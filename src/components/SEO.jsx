import { useEffect } from 'react';

export default function SEO({ title, description, keywords, schemaData }) {
  useEffect(() => {
    if (title) document.title = `${title} | Top Cool Service`;

    const setMeta = (name, value) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // Inject JSON-LD Rich Snippet for Google Search Bots
    const scriptId = 'json-ld-schema';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
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

    scriptTag.text = JSON.stringify(schemaData || defaultSchema);
  }, [title, description, keywords, schemaData]);

  return null;
}