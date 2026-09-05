// ---------------------------------------------------------------------------
// Post-build SEO step. Runs automatically after `vite build`.
//
// WHY THIS EXISTS
// This is a client-rendered Vite app: without help, every route is served the
// same index.html and the real <title>/description/canonical/JSON-LD only
// appear after React executes. Googlebot does render JavaScript, but social and
// messaging scrapers (WhatsApp, Facebook, X, LinkedIn, Slack) do not, so every
// shared link would fall back to the home page's card.
//
// Rather than migrating the project to a different framework, this script emits
// a static HTML file per indexable route with the correct <head> already baked
// in. The body is untouched, so React still boots and renders exactly as before
// - only the metadata is pre-resolved. It pulls that metadata from the same
// modules the app imports, so the two can never disagree.
//
// It also generates dist/sitemap.xml from the same route list, which means the
// sitemap cannot drift out of sync with the routes that actually exist.
//
// DEPLOYMENT NOTE: routes use a trailing slash, so /about/ resolves to
// dist/about/index.html on any standard static host. Unknown paths (such as the
// /repair/... programmatic pages) still need the usual SPA fallback to
// index.html.
// ---------------------------------------------------------------------------

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { siteConfig, staticPageMeta, absoluteUrl } from '../src/data/seoConfig.js';
import { brandServices } from '../src/data/brandServiceData.js';
import { servicesList, faqsData } from '../src/data/siteData.js';
import { applianceServiceSchema, brandServiceSchema, faqPageSchema, defaultSchema } from '../src/data/schema.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Prevents a "</script>" inside any string from terminating the JSON-LD block.
const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

/** Structured data for a route, reusing the app's own builders. */
function schemaFor(path) {
  if (path === '/faq/') return faqPageSchema(faqsData);

  const service = servicesList.find((s) => `/${s.slug}/` === path);
  if (service) return applianceServiceSchema(service);

  const brandPage = brandServices.find((entry) => `/${entry.slug}/` === path);
  if (brandPage) return brandServiceSchema(brandPage);

  return [defaultSchema()];
}

/** Every route that should be prerendered and listed in the sitemap. */
function collectRoutes() {
  const routes = Object.entries(staticPageMeta).map(([path, meta]) => ({
    path,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    image: siteConfig.defaultImage,
    priority: meta.priority,
  }));

  for (const entry of brandServices) {
    routes.push({
      path: `/${entry.slug}/`,
      title: entry.title,
      description: entry.description,
      keywords: entry.keywords,
      image: entry.image,
      priority: '0.9',
    });
  }

  return routes;
}

function buildHead(route) {
  const fullTitle = `${route.title} | ${siteConfig.titleSuffix}`;
  const canonical = absoluteUrl(route.path);
  const image = absoluteUrl(route.image || siteConfig.defaultImage);

  const tags = [
    `<title>${escapeAttr(fullTitle)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    route.keywords ? `<meta name="keywords" content="${escapeAttr(route.keywords)}" />` : '',
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(image)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(siteConfig.siteName)}" />`,
    `<meta property="og:locale" content="${escapeAttr(siteConfig.locale)}" />`,
    `<meta name="twitter:card" content="${escapeAttr(siteConfig.twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
  ].filter(Boolean);

  for (const block of schemaFor(route.path)) {
    tags.push(`<script type="application/ld+json">${serializeJsonLd(block)}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join('\n');
}

/**
 * Removes the tags this script owns from the built template so the per-route
 * versions cannot end up duplicated alongside the home page defaults.
 */
function stripManagedTags(html) {
  return html
    // Drop the authoring comments from index.html; they document the source
    // file and are dead weight on every generated page.
    .replace(/\s*<!--[\s\S]*?-->/g, '')
    .replace(/\s*<title>[\s\S]*?<\/title>/gi, '')
    .replace(/\s*<meta\s+name="(description|keywords|twitter:[a-z]+)"[^>]*>/gi, '')
    .replace(/\s*<meta\s+property="og:[a-z_]+"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<script\s+type="application\/ld\+json"[\s\S]*?<\/script>/gi, '');
}

async function main() {
  let template;
  try {
    template = await readFile(join(DIST, 'index.html'), 'utf8');
  } catch {
    console.error('[prerender-seo] dist/index.html not found. Run `vite build` first.');
    process.exitCode = 1;
    return;
  }

  const base = stripManagedTags(template);
  if (!base.includes('</head>')) {
    console.error('[prerender-seo] Could not find </head> in dist/index.html. Aborting.');
    process.exitCode = 1;
    return;
  }

  const routes = collectRoutes();

  const seen = new Set();
  for (const route of routes) {
    if (seen.has(route.path)) {
      console.error(`[prerender-seo] Duplicate route in metadata: ${route.path}`);
      process.exitCode = 1;
      return;
    }
    seen.add(route.path);
  }

  for (const route of routes) {
    const html = base.replace('</head>', `${buildHead(route)}\n  </head>`);
    const outFile =
      route.path === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.path.replace(/^\/|\/$/g, ''), 'index.html');

    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf8');
  }

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(
      (route) =>
        `  <url><loc>${absoluteUrl(route.path)}</loc><priority>${route.priority || '0.8'}</priority></url>`
    ),
    '</urlset>',
    '',
  ].join('\n');

  await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

  console.log(`[prerender-seo] Prerendered ${routes.length} routes and generated sitemap.xml`);
}

main();
