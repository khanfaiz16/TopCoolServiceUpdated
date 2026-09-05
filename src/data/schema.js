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
import { PUNE_COVERAGE_AREAS, SERVICE_CITY } from './brandServiceData.js';
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

/** Structured data for a brand + appliance page, e.g. /bosch-dishwasher-service-pune/. */
export function brandServiceSchema(page) {
  const path = `/${page.slug}/`;
  const url = absoluteUrl(path);

  // The provider is described as an Organization rather than a LocalBusiness
  // here. A LocalBusiness node needs a real postal address, and the only
  // address this project actually holds is the Mumbai one - which does not
  // belong on a Pune page, and must not be swapped for an invented Pune
  // address. Organization + areaServed states what is true: this business
  // serves Pune, from no address we are entitled to publish here.
  const provider = {
    '@type': 'Organization',
    name: siteConfig.siteName,
    telephone: contactDetails.phoneRaw,
    email: contactDetails.email,
    url: siteConfig.siteUrl,
  };

  // City-level unless the owner has supplied real locality coverage.
  const areaServed = PUNE_COVERAGE_AREAS.length
    ? PUNE_COVERAGE_AREAS.map((area) => ({ '@type': 'Place', name: `${area}, ${SERVICE_CITY}` }))
    : [{ '@type': 'City', name: SERVICE_CITY }];

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `${page.brand} ${page.appliance} Repair & Service in ${SERVICE_CITY}`,
      serviceType: `${page.brand} ${page.appliance} repair and service`,
      description: page.description,
      url,
      provider,
      areaServed,
      // Identifies the make of appliance serviced. This is NOT an authorisation
      // claim - each page carries an explicit non-affiliation notice.
      brand: { '@type': 'Brand', name: page.brand },
      category: `${page.appliance} Repair`,
    },
    breadcrumb([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services/' },
      { name: `${page.brand} ${page.appliance} ${SERVICE_CITY}`, path },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
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
