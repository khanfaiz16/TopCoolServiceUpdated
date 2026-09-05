// Central SEO configuration and metadata for the static (non brand-specific)
// pages. Keeping page metadata here gives us a single source of truth that is
// shared by the React <SEO> component at runtime AND by the build-time
// prerender script (scripts/prerender-seo.mjs), so titles/descriptions can
// never drift between the app and the crawlable HTML.

export const siteConfig = {
  // Canonical host. The apex domain 308-redirects to www in production, so www
  // is the canonical form: canonicals, OG/Twitter URLs, JSON-LD and the sitemap
  // must all point at it, never at a URL that redirects.
  siteUrl: 'https://www.topcoolservice.com',
  siteName: 'Top Cool Service',
  titleSuffix: 'Top Cool Service',
  locale: 'en_IN',
  defaultImage: '/images/ac.jpg',
  twitterCard: 'summary_large_image',
};

/**
 * Builds an absolute URL from a site-relative path.
 */
export function absoluteUrl(path = '/') {
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}

/**
 * Metadata for the fixed informational + appliance pages.
 * Every entry must have a unique title and description.
 */
export const staticPageMeta = {
  '/': {
    title: 'Doorstep Appliance Repair in Mumbai',
    description:
      'Certified repair technicians for AC, Fridge, Washing Machine, Dryer, Microwave, and Dishwasher across Bandra, Andheri, Dahisar, Virar, and all Mumbai.',
    keywords:
      'appliance repair Mumbai, AC repair Mumbai, fridge repair Bandra, washing machine repair Dahisar, dishwasher service Mumbai',
    priority: '1.0',
  },
  '/about/': {
    title: 'About Us - Mumbai Appliance Repair Company',
    description:
      "Learn more about Top Cool Service, Mumbai's trusted multi-brand appliance repair specialists offering doorstep service across Dahisar, Bandra, and beyond.",
    keywords: 'about Top Cool Service, appliance repair company Mumbai, multi-brand service centre Mumbai',
    priority: '0.7',
  },
  '/services/': {
    title: 'Appliance Repair Services in Mumbai',
    description:
      'Comprehensive doorstep repairs for AC, Refrigerators, Washing Machines, Dryers, Microwaves, and Dishwashers in Mumbai, plus Bosch, IFB, Siemens and LG specialist pages.',
    keywords:
      'appliance repair services Mumbai, washing machine repair and service, dishwasher repair Mumbai, dryer repair Mumbai',
    priority: '0.9',
  },
  '/contact/': {
    title: 'Contact Us & Book a Technician',
    description:
      'Contact Top Cool Service for doorstep appliance repair in Mumbai. Call +91 99204 35051, message us on WhatsApp, or send a booking request online.',
    keywords: 'book appliance technician Mumbai, appliance repair contact number Mumbai, service booking Mumbai',
    priority: '0.8',
  },
  '/faq/': {
    title: 'Appliance Repair FAQs',
    description:
      'Answers to common questions about appliance repair turnaround times, inspection charges, spare part warranty, and brand coverage in Mumbai.',
    keywords: 'appliance repair FAQ, repair warranty Mumbai, inspection charges appliance repair',
    priority: '0.6',
  },
  '/service-areas/': {
    title: 'Appliance Service Areas Across Mumbai',
    description:
      'We serve Bandra, BKC, Kalina, Andheri, Santacruz, Vasai, Virar, Nallsopara, Powai, Dahisar, Miraroad, Colaba, Juhu, and Marine Lines with doorstep appliance repair.',
    keywords:
      'appliance repair near me Mumbai, AC repair Bandra, fridge service Andheri, washing machine repair Dahisar',
    priority: '0.8',
  },
  '/ac-repair/': {
    title: 'AC Repair & Service in Mumbai',
    description:
      'Split, window and inverter AC repair in Mumbai. Gas leak detection, jet pump cleaning, PCB fixes and cooling faults handled at your doorstep with genuine spares.',
    keywords: 'AC repair Mumbai, AC service near me, split AC repair Bandra, inverter AC gas refill Mumbai',
    priority: '0.9',
  },
  '/refrigerator-repair/': {
    title: 'Refrigerator Repair & Service in Mumbai',
    description:
      'Single door, double door and side-by-side fridge repair in Mumbai. Cooling failures, gas refilling, thermostat and compressor faults fixed at home.',
    keywords: 'refrigerator repair Mumbai, fridge repair near me, double door fridge service Mumbai',
    priority: '0.9',
  },
  '/washing-machine-repair/': {
    title: 'Washing Machine Repair & Service in Mumbai',
    description:
      'Front load, top load and semi-automatic washing machine repair in Mumbai. Drum, motor, bearing, drainage and error-code faults fixed at your doorstep.',
    keywords:
      'washing machine repair Mumbai, washing machine service near me, front load washing machine repair Mumbai',
    priority: '0.9',
  },
  '/microwave-repair/': {
    title: 'Microwave Oven Repair & Service in Mumbai',
    description:
      'Solo, grill and convection microwave repair in Mumbai. Heating failures, sparking, keypad faults, magnetron and transformer replacement at home.',
    keywords: 'microwave repair Mumbai, microwave oven service near me, convection microwave repair Mumbai',
    priority: '0.9',
  },
  '/dryer-repair/': {
    title: 'Clothes Dryer Repair & Service in Mumbai',
    description:
      'Tumble, condenser and heat pump clothes dryer repair in Mumbai. No-heat faults, drum belts, thermal fuses and long drying times resolved at your doorstep.',
    keywords: 'dryer repair Mumbai, clothes dryer service near me, tumble dryer repair Mumbai',
    priority: '0.9',
  },
  '/dishwasher-repair/': {
    title: 'Dishwasher Repair & Service in Mumbai',
    description:
      'Dishwasher repair in Mumbai for drainage blockages, spray arm clogging, leaking door seals, heating faults and error codes. Doorstep service with genuine spares.',
    keywords: 'dishwasher repair Mumbai, dishwasher service near me, dishwasher repair and service Mumbai',
    priority: '0.9',
  },
};

/**
 * Returns the SEO props for a static page path, without the sitemap-only
 * fields. Pages call this instead of hard-coding their own strings, so the
 * metadata rendered by React and the metadata baked in at build time are
 * guaranteed to be identical.
 */
export function getPageMeta(path) {
  const meta = staticPageMeta[path];
  if (!meta) return {};
  const { title, description, keywords } = meta;
  return { title, description, keywords, canonicalPath: path };
}
