import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Phone, MessageCircle, Wrench, Award, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { servicesList, serviceAreas, allBrands, contactDetails } from '../data/siteData';

// Local geographical environmental factors per Mumbai area[cite: 7]
const regionalInsights = {
  bandra: 'Homes along coastal belts like Bandra and Khar frequently experience accelerated salt-air corrosion on outdoor copper condenser coils and PCB solder joints. Our local team carries anti-corrosive blue-fin coated replacement parts.',
  juhu: 'Due to humid beachside atmosphere, electrical sensors and defrost timers require specialized moisture-sealed diagnostics to prevent recurring short-circuits.',
  andheri: 'As a high-density transit zone, our mobile vans stationed near Western Express Highway & Metro corridors ensure emergency 60-minute doorstep arrival across Andheri East and West.',
  bkc: 'Targeted support for corporate setups, server room split cooling units, and high-capacity luxury home appliances with digital manifold inspection tools.',
  kalina: 'Fast doorstep technician response near CST Road and University campus, stocked with genuine PCB relays and drain pump assemblies.',
  santacruz: 'Specialized diagnostic tools for residential apartments near SV Road and Milan Subway, equipped for on-site nitrogen leak tests and compressor servicing.',
  powai: 'High-rise residential complexes in Hiranandani and Powai lake belt often require specialized inverter board replacements and drum vibration damper balancing.',
  dahisar: 'Immediate localized dispatch from our North Mumbai hub, specializing in quick turnaround compressor brazing and nitrogen leakage detection.',
  miraroad: 'Serving fast-growing residential hubs across Shanti Park and Beverly Park with heavy-duty voltage stabilizer checks and genuine washing machine tub bearings.',
  vasai: 'Rapid doorstep response for residential townships with fully stocked genuine spares for front-load drain motors and compressor kits.',
  virar: 'Addresses frequent seasonal voltage variations and power spikes with heavy-duty voltage-regulated relays and factory inverter motor controllers.',
  nallsopara: 'Prompt appliance motor rewinding, thermostat replacement, and high-grade capacitor testing for top-load washers and direct-cool refrigerators.',
  colaba: 'Heritage residential setups in South Mumbai frequently require precision maintenance on aging copper piping, moisture-proof wiring, and custom appliance fittings.',
  'marine lines': 'South Mumbai marine-facing residences receive anti-rust coil servicing and chemical jet-wash cleaning to counter aggressive coastal salt breeze.',
  thane: 'Full coverage from Ghodbunder Road to Majiwada, equipped for multi-split VRV diagnostics, gas charging, and microwave magnetron replacements.',
  default: 'Our localized mobile service engineering unit carries genuine factory diagnostic equipment and original spare parts for immediate first-visit resolution.'
};

export default function LocationBrandService() {
  const { pageSlug } = useParams();

  // 1. Clean the raw incoming URL
  let rawSlug = (pageSlug || '').trim().replace(/^\/+|\/+$/g, '');
  if (rawSlug.startsWith('repair/')) {
    rawSlug = rawSlug.replace(/^repair\//, '');
  }

  // 2. Parse "-in-" pattern: [brand]-[service]-in-[location][cite: 7]
  const separatorIndex = rawSlug.lastIndexOf('-in-');
  const brandAndService = separatorIndex > -1 ? rawSlug.slice(0, separatorIndex) : rawSlug;
  const locationSlug = separatorIndex > -1 ? rawSlug.slice(separatorIndex + 4) : '';
  const firstDash = brandAndService.indexOf('-');
  const brandSlug = firstDash > -1 ? brandAndService.slice(0, firstDash) : brandAndService;
  const serviceSlug = firstDash > -1 ? brandAndService.slice(firstDash + 1) : '';

  const normalize = (val) => (val || '').toLowerCase().replace(/[\s-]+/g, ' ').trim();
  const titleCase = (val) =>
    normalize(val).replace(/\b\w/g, (char) => char.toUpperCase());

  // 3. Match against data lists or generate clean dynamic titles[cite: 7]
  const service =
    servicesList.find((s) => s.slug === serviceSlug || normalize(s.slug) === normalize(serviceSlug)) ||
    servicesList.find((s) => s.slug.includes(serviceSlug) || (serviceSlug && serviceSlug.includes(s.slug))) ||
    servicesList[0];

  const matchedBrand =
    allBrands.find((b) => normalize(b) === normalize(brandSlug)) ||
    (brandSlug ? titleCase(brandSlug) : 'All Brand');

  const matchedLocation =
    serviceAreas.find((loc) => normalize(loc) === normalize(locationSlug)) ||
    (locationSlug ? titleCase(locationSlug) : 'Mumbai');

  const locKey = normalize(matchedLocation);
  const locationSpecificAdvice = regionalInsights[locKey] || regionalInsights.default;

  const pageTitle = `${matchedBrand} ${service.title} in ${matchedLocation}, Mumbai | Top Cool Service`;
  const metaDescription = `Need expert ${matchedBrand} ${service.title.toLowerCase()} in ${matchedLocation}? Doorstep technician in 60-90 mins, genuine ${matchedBrand} spare parts, upfront pricing & warranty.`;
  const canonicalUrl = `https://topcoolservice.com/repair/${rawSlug}/`;

  // 4. Schema Generation for Local SEO[cite: 7]
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://topcoolservice.com/#organization",
      "name": "Top Cool Service",
      "telephone": contactDetails.phoneRaw,
      "email": contactDetails.email,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactDetails.address,
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400068",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": `${matchedLocation}, Mumbai`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${matchedBrand} ${service.title} in ${matchedLocation}`,
      "serviceType": `${matchedBrand} ${service.title}`,
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Top Cool Service",
        "telephone": contactDetails.phoneRaw
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": `${matchedLocation}, Mumbai`
      },
      "brand": {
        "@type": "Brand",
        "name": matchedBrand
      },
      "description": metaDescription,
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": canonicalUrl
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How soon can a technician arrive in ${matchedLocation} for ${matchedBrand} repair?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Our localized mobile service team is active across ${matchedLocation}, reaching your doorstep within 60 to 90 minutes of booking confirmation.`
          }
        },
        {
          "@type": "Question",
          "name": `Do you use original ${matchedBrand} spare parts?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, all replacement components used for ${matchedBrand} appliances are 100% genuine, certified, and covered under our 30 to 90-day service warranty.`
          }
        }
      ]
    }
  ];

  return (
    <div className="service-detail-view">
      <SEO
        title={pageTitle}
        description={metaDescription}
        keywords={`${matchedBrand} ${service.slug} ${matchedLocation}, ${matchedBrand} repair in ${matchedLocation}, doorstep ${matchedBrand} service Mumbai`}
        robots="index, follow"
        canonical={canonicalUrl}
        image={service.image}
        schemaData={schemaData}
      />

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">&larr; Home</Link>
          <h1>{matchedBrand} {service.title} in {matchedLocation}, Mumbai</h1>
          <p>
            Certified doorstep repair, genuine {matchedBrand} components, and same-day turnaround in {matchedLocation}.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="detail-layout">
          <div className="detail-info">
            <div className="detail-img-box">
              <img
                src={service.image}
                alt={`${matchedBrand} ${service.title} in ${matchedLocation}`}
                className="detail-banner"
              />
            </div>

            <h2>Doorstep {matchedBrand} Specialist in {matchedLocation}</h2>
            <p className="lead-text">
              Looking for reliable {matchedBrand} {service.title.toLowerCase()} near {matchedLocation}? Top Cool Service provides fast, factory-grade repairs directly at your home. Our mobile units carry genuine {matchedBrand} diagnostic tools and factory parts to ensure your appliance is restored on the very first visit.
            </p>

            <div className="local-hub-card local-context-box">
              <div className="local-hub-header">
                <AlertCircle size={20} className="local-hub-icon" />
                <h4 className="local-hub-card-title">Localized Diagnostic Insight for {matchedLocation}</h4>
              </div>
              <p className="area-card-text">{locationSpecificAdvice}</p>
            </div>

            <h3>Common {matchedBrand} {service.title} Problems We Fix:</h3>
            <ul className="feature-list">
              {service.issues.map((issue, idx) => (
                <li key={idx}>
                  <CheckCircle size={20} className="feature-icon-check" />
                  <span>{matchedBrand} {issue}</span>
                </li>
              ))}
            </ul>

            <div className="service-perks-grid">
              <div className="perk-box">
                <Clock size={24} />
                <h4>60-90 Min Arrival in {matchedLocation}</h4>
                <p>Fast dispatch throughout {matchedLocation} and adjacent suburbs.</p>
              </div>
              <div className="perk-box">
                <Shield size={24} />
                <h4>Authentic {matchedBrand} Parts</h4>
                <p>Genuine factory spares backed by a 30 to 90-day replacement warranty.</p>
              </div>
              <div className="perk-box">
                <Wrench size={24} />
                <h4>Diagnostic Guarantee</h4>
                <p>Inspection charge waived if you proceed with our repair estimate.</p>
              </div>
              <div className="perk-box">
                <Award size={24} />
                <h4>5+ Years Expert Mechanics</h4>
                <p>Background-verified, company-trained appliance engineers.</p>
              </div>
            </div>

            <div className="blog-faq-section">
              <h3 className="blog-faq-title">Frequently Asked Questions in {matchedLocation}</h3>
              <div className="blog-faq-list">
                <div className="blog-faq-card">
                  <h4 className="blog-faq-q">
                    How quickly can an engineer arrive in {matchedLocation}?
                  </h4>
                  <p className="blog-faq-a">
                    Our engineers cover {matchedLocation} continuously and typically arrive within 60 to 90 minutes of receiving your booking.
                  </p>
                </div>
                <div className="blog-faq-card">
                  <h4 className="blog-faq-q">
                    Are replacement parts for {matchedBrand} authentic?
                  </h4>
                  <p className="blog-faq-a">
                    Yes, we use brand-certified components for {matchedBrand} units, and all fitted parts carry a 30 to 90-day warranty.
                  </p>
                </div>
              </div>
            </div>

            <div className="quick-call-cta">
              <h3>Direct Hotline for {matchedLocation} Residents</h3>
              <p>Instant booking with our technical desk in Mumbai.</p>
              <div className="hero-actions">
                <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-call">
                  <Phone size={18} /> Call {contactDetails.phone}
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}?text=Hi%20Top%20Cool%20Service%2C%20I%20need%20${encodeURIComponent(matchedBrand)}%20${encodeURIComponent(service.title)}%20in%20${encodeURIComponent(matchedLocation)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> WhatsApp Booking
                </a>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>Book {matchedBrand} Service</h3>
              <p className="sidebar-subtext">Doorstep slot in {matchedLocation}</p>
              <BookingForm defaultService={`${matchedBrand} ${service.title}`} />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}