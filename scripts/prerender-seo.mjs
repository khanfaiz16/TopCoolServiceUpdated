import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { siteConfig, staticPageMeta, absoluteUrl } from '../src/data/seoConfig.js';
import { servicesList, serviceAreas, allBrands, contactDetails, faqsData } from '../src/data/siteData.js';
import { applianceServiceSchema, faqPageSchema, defaultSchema } from '../src/data/schema.js';
import { blogPosts } from '../src/data/blogData.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const escapeAttr = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const serializeJsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

const slugify = (text) =>
  String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

function buildProgrammaticSchema(brand, service, location, path) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://topcoolservice.com/#organization',
      name: 'Top Cool Service',
      telephone: contactDetails.phoneRaw,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: contactDetails.address,
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400068',
        addressCountry: 'IN',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${location}, Mumbai`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${brand} ${service.title} in ${location}`,
      serviceType: `${brand} ${service.title}`,
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'Top Cool Service',
        telephone: contactDetails.phoneRaw,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${location}, Mumbai`,
      },
      brand: {
        '@type': 'Brand',
        name: brand,
      },
      description: `Certified ${brand} ${service.title.toLowerCase()} in ${location}, Mumbai. 60-90 min doorstep response with genuine parts.`,
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl(path),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `How quickly can an engineer reach ${location} for ${brand} repair?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Our technicians are deployed across ${location} and typically reach you within 60 to 90 minutes.`,
          },
        },
        {
          '@type': 'Question',
          name: `Are the spare parts original for ${brand}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes, we use 100% genuine parts for ${brand} appliances with a warranty of 30 to 90 days.`,
          },
        },
      ],
    },
  ];
}

function buildBlogPostSchema(post) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate,
      author: {
        '@type': 'Organization',
        name: post.author || 'Top Cool Service Technical Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Top Cool Service',
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/favicon.svg'),
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteUrl(`/blog/${post.slug}/`),
      },
    },
  ];

  if (Array.isArray(post.faqs) && post.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return schemas;
}

function schemaFor(path) {
  if (path === '/faq/') return typeof faqPageSchema === 'function' ? faqPageSchema(faqsData) : faqPageSchema;
  const service = (servicesList || []).find((s) => `/${s.slug}/` === path);
  if (service) return typeof applianceServiceSchema === 'function' ? applianceServiceSchema(service) : applianceServiceSchema;
  const def = typeof defaultSchema === 'function' ? defaultSchema() : defaultSchema;
  return Array.isArray(def) ? def : [def];
}

function collectAllRoutes() {
  const routes = Object.entries(staticPageMeta || {}).map(([path, meta]) => ({
    path,
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    image: meta.image || siteConfig.defaultImage,
    priority: meta.priority || (path === '/' ? '1.0' : '0.8'),
    changefreq: meta.changefreq || 'weekly',
    schemas: schemaFor(path),
  }));

  // Ensure /blog/ is added
  if (!routes.some((r) => r.path === '/blog/')) {
    routes.push({
      path: '/blog/',
      title: 'Official Blog | Appliance Maintenance & News | Top Cool Service',
      description: 'Expert diagnostic guides, error code solutions, and maintenance insights by certified Mumbai technicians.',
      keywords: 'appliance repair blog, ac troubleshooting guide, washing machine error codes, fridge repair tips mumbai',
      image: siteConfig.defaultImage,
      priority: '0.8',
      changefreq: 'weekly',
      schemas: typeof defaultSchema === 'function' ? defaultSchema() : defaultSchema,
    });
  }

  // Dynamic Blog Article Routes (/blog/:slug/)
  for (const post of blogPosts || []) {
    routes.push({
      path: `/blog/${post.slug}/`,
      title: `${post.title} | Top Cool Service Blog`,
      description: post.excerpt,
      keywords: `${post.category.toLowerCase()} repair mumbai, ${post.slug.replace(/-/g, ' ')}, doorstep diagnostic guide`,
      image: post.image || siteConfig.defaultImage,
      priority: '0.8',
      changefreq: 'monthly',
      schemas: buildBlogPostSchema(post),
      lastmod: post.publishDate,
    });
  }

  // Priority Crawl Budget Optimization:
  // Focus initial programmatic SEO on the highest-demand Mumbai hubs to eliminate crawl budget exhaustion
  const priorityHubs = ['Bandra', 'Andheri', 'BKC', 'Kalina', 'Juhu', 'Powai', 'Dahisar', 'Thane'];
  const priorityServices = servicesList.filter((s) =>
    ['ac-repair', 'refrigerator-repair', 'washing-machine-repair'].includes(s.slug)
  );
  const priorityBrands = ['Samsung', 'LG', 'Whirlpool', 'Bosch', 'Voltas', 'Daikin'];

  for (const srv of priorityServices) {
    for (const brand of priorityBrands) {
      for (const loc of priorityHubs) {
        const slug = `${slugify(brand)}-${srv.slug}-in-${slugify(loc)}`;
        const path = `/repair/${slug}/`;

        routes.push({
          path,
          title: `${brand} ${srv.title} in ${loc}, Mumbai | Top Cool Service`,
          description: `Certified ${brand} ${srv.title.toLowerCase()} in ${loc}, Mumbai. Doorstep technician in 60-90 mins, genuine spare parts, and service warranty.`,
          keywords: `${brand} ${srv.slug} ${loc}, ${brand} service center ${loc}, doorstep ${brand} repair`,
          image: srv.image || siteConfig.defaultImage,
          priority: '0.7',
          changefreq: 'monthly',
          schemas: buildProgrammaticSchema(brand, srv, loc, path),
        });
      }
    }
  }

  return routes;
}

function buildHead(route) {
  const fullTitle = route.title.includes(siteConfig.titleSuffix)
    ? route.title
    : `${route.title} | ${siteConfig.titleSuffix}`;
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

  const schemas = Array.isArray(route.schemas) ? route.schemas : [route.schemas];
  for (const block of schemas) {
    if (block) tags.push(`<script type="application/ld+json">${serializeJsonLd(block)}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join('\n');
}

function stripManagedTags(html) {
  return html
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
  const routes = collectAllRoutes();
  const seen = new Set();

  for (const route of routes) {
    if (seen.has(route.path)) continue;
    seen.add(route.path);

    const html = base.replace('</head>', `${buildHead(route)}\n  </head>`);
    const outFile =
      route.path === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.path.replace(/^\/|\/$/g, ''), 'index.html');

    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf8');
  }

  const today = new Date().toISOString().split('T')[0];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(
      (route) =>
        `  <url>\n    <loc>${absoluteUrl(route.path)}</loc>\n    <lastmod>${route.lastmod || today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`
    ),
    '</urlset>',
    '',
  ].join('\n');

  await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`[prerender-seo] Successfully prerendered ${routes.length} static SEO landing pages and generated dist/sitemap.xml!`);
}

main();