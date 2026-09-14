import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig, absoluteUrl } from '../data/seoConfig';

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
 * Injects per-page metadata and JSON-LD schema into document.head.
 *
 * @param {string}  title          Page title (excluding the site suffix).
 * @param {string}  description    Meta description.
 * @param {string}  keywords       Comma-separated SEO keywords.
 * @param {object|object[]} schemaData JSON-LD structured data object(s).
 * @param {string}  canonicalPath  Custom canonical route override.
 * @param {string}  image          Relative or absolute share banner image URL.
 * @param {string}  ogType         Open Graph type (default: "website").
 * @param {string}  robots         Robots indexing directives.
 */
export default function SEO({
  title,
  description,
  keywords,
  schemaData,
  canonicalPath,
  image,
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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
      'twitter:card': siteConfig.twitterCard || 'summary_large_image',
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
      'og:locale': siteConfig.locale || 'en_IN',
    };

    MANAGED_NAME_TAGS.forEach((key) => upsertMeta('name', key, values[key]));
    MANAGED_PROPERTY_TAGS.forEach((key) => upsertMeta('property', key, properties[key]));
    upsertCanonical(canonical);

    // Remove previously injected JSON-LD schema blocks before adding new ones
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