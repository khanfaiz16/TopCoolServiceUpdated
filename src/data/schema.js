// JSON-LD builders.
//
// Kept as plain JavaScript (no JSX) on purpose: the React pages import these at
// runtime and scripts/prerender-seo.mjs imports the very same functions at build
// time, so the structured data served to a crawler that does not run JavaScript
// is identical to what the app renders.
//
// Nothing here may contain data the business has not actually supplied. In
// particular: no aggregateRating, no review markup, no opening hours or prices
// beyond what the site already states, and no claim of brand authorisation.

import { contactDetails, serviceAreas } from './siteData.js';
import { siteConfig, absoluteUrl } from './seoConfig.js';

/** The business itself, reused as the `provider` of every Service node. */
export function localBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.siteUrl}/#business`,
    name: siteConfig.siteName,
    telephone: contactDetails.phoneRaw,
    email: contactDetails.email,
    url: siteConfig.siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dahisar',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: serviceAreas.map((area) => ({ '@type': 'Place', name: `${area}, Mumbai` })),
    openingHours: 'Mo-Su 08:00-22:00',
    priceRange: '₹₹',
  };
}

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Structured data for a generic appliance page, e.g. /dishwasher-repair/. */
export function applianceServiceSchema(service) {
  const path = `/${service.slug}/`;
  const url = absoluteUrl(path);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `${service.title} in Mumbai`,
      serviceType: service.title,
      description: service.shortDesc,
      url,
      provider: localBusinessSchema(),
      areaServed: serviceAreas.map((area) => ({ '@type': 'Place', name: `${area}, Mumbai` })),
    },
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services/' },
      { name: service.title, path },
    ]),
  ];
}

/** Structured data for the site-wide FAQ page. */
export function faqPageSchema(faqs) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq/' },
    ]),
  ];
}

/** Default structured data used by any page that does not supply its own. */
export function defaultSchema() {
  return { '@context': 'https://schema.org', ...localBusinessSchema() };
}
