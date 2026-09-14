import { contactDetails, servicesList, serviceAreas } from "./siteData.js";

const BASE_URL = 'https://topcoolservice.com';

// Organization & Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: 'Top Cool Service',
  url: BASE_URL,
  logo: `${BASE_URL}/assets/logo.png`,
  image: `${BASE_URL}/assets/hero-bg.jpg`,
  description: "Mumbai's trusted doorstep home appliance repair specialists for AC, Refrigerator, Washing Machine, Microwave, and more.",
  telephone: contactDetails.phoneRaw,
  email: contactDetails.email,
  priceRange: '₹₹',
  paymentAccepted: ['Cash', 'Credit Card', 'UPI', 'Net Banking'],
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactDetails.address,
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400068',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.2493,
    longitude: 72.8596
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  ],
  areaServed: serviceAreas.map((area) => ({
    '@type': 'AdministrativeArea',
    name: `${area}, Mumbai`
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: servicesList.map((srv) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: srv.title,
        description: srv.shortDesc,
        url: `${BASE_URL}/${srv.slug}/`
      }
    }))
  }
};

// Appliance Specific Service Schema
export const applianceServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.title,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Top Cool Service',
    telephone: contactDetails.phoneRaw,
    url: BASE_URL
  },
  areaServed: {
    '@type': 'City',
    name: 'Mumbai'
  },
  description: service.shortDesc,
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/${service.slug}/`
  }
});