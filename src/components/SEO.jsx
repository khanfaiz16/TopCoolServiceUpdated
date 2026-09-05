import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig, absoluteUrl } from '../data/seoConfig';

// Meta tags this component owns. Anything listed here is either updated with
// the current page's value or removed outright, so a page that does not supply
// (say) keywords can never inherit the previous page's keywords. The tags that
// ship statically in index.html are adopted by the same mechanism rather than
// being duplicated.
const MANAGED_NAME_TAGS = [
  'description',
  'keywords',
  'robots',
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image',
];

const MANAGED_PROPERTY_TAGS = [
  'og:title',
  'og:description',
  'og:type',
  'og:url',
  'og:image',
  'og:site_name',
  'og:locale',
];

function upsertMeta(attr, key, value) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);

  if (value === undefined || value === null || value === '') {
    if (el) el.remove();
    return;
  }

  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const DEFAULT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Top Cool Service',
  telephone: '+919920435051',
  email: 'mhussainkhan34@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dahisar',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: ['Juhu', 'Bandra', 'Andheri', 'Dahisar', 'Powai', 'BKC', 'Colaba'],
  priceRange: '₹₹',
};

/**
 * Injects per-page metadata into <head>.
 *
 * Existing callers that pass only title/description/keywords/schemaData keep
 * working unchanged; canonical, Open Graph and Twitter tags are then derived
 * automatically from those values and the current route.
 *
 * @param {string}  title          Page title, without the site-name suffix.
 * @param {string}  description    Meta description.
 * @param {string}  keywords       Optional comma-separated keywords.
 * @param {object|object[]} schemaData  One or more JSON-LD objects.
 * @param {string}  canonicalPath  Overrides the canonical path (defaults to the current route).
 * @param {string}  image          Site-relative or absolute social share image.
 * @param {string}  ogType         Open Graph type, defaults to "website".
 * @param {string}  robots         Robots directive, e.g. "noindex, follow".
 */
export default function SEO({
  title,
  description,
  keywords,
  schemaData,
  canonicalPath,
  image,
  ogType = 'website',
  robots,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.titleSuffix}` : siteConfig.siteName;
    document.title = fullTitle;

    const canonical = absoluteUrl(canonicalPath || pathname);
    const shareImage = absoluteUrl(image || siteConfig.defaultImage);

    const values = {
      description,
      keywords,
      robots,
      'twitter:card': siteConfig.twitterCard,
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': shareImage,
    };

    const properties = {
      'og:title': fullTitle,
      'og:description': description,
      'og:type': ogType,
      'og:url': canonical,
      'og:image': shareImage,
      'og:site_name': siteConfig.siteName,
      'og:locale': siteConfig.locale,
    };

    MANAGED_NAME_TAGS.forEach((key) => upsertMeta('name', key, values[key]));
    MANAGED_PROPERTY_TAGS.forEach((key) => upsertMeta('property', key, properties[key]));
    upsertCanonical(canonical);

    // JSON-LD. Every block we add is tagged so the previous page's structured
    // data is cleared before the current page's is written.
    document.head
      .querySelectorAll('script[data-seo-schema]')
      .forEach((node) => node.remove());

    const blocks = schemaData
      ? Array.isArray(schemaData)
        ? schemaData
        : [schemaData]
      : [DEFAULT_SCHEMA];

    blocks.filter(Boolean).forEach((block) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', '');
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
    });
  }, [title, description, keywords, schemaData, canonicalPath, image, ogType, robots, pathname]);

  return null;
}
