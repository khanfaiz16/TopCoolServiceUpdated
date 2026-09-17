import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, MapPin, Phone, MessageCircle, Wrench, Award } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { servicesList, serviceAreas, allBrands, contactDetails } from '../data/siteData';

export default function LocationBrandService() {
  const { pageSlug } = useParams();

  const slug = pageSlug || '';
  const separatorIndex = slug.lastIndexOf('-in-');
  const brandAndService = separatorIndex > -1 ? slug.slice(0, separatorIndex) : slug;
  const locationSlug = separatorIndex > -1 ? slug.slice(separatorIndex + 4) : '';
  const firstDash = brandAndService.indexOf('-');
  const brandSlug = firstDash > -1 ? brandAndService.slice(0, firstDash) : brandAndService;
  const serviceSlug = firstDash > -1 ? brandAndService.slice(firstDash + 1) : '';

  const normalize = (value) => (value || '').toLowerCase().replace(/[\s-]+/g, ' ').trim();
  const titleCase = (value) =>
    normalize(value).replace(/\b\w/g, (character) => character.toUpperCase());

  const service = servicesList.find((s) => s.slug === serviceSlug) || servicesList[0];
  const matchedBrand =
    allBrands.find((b) => normalize(b) === normalize(brandSlug)) || titleCase(brandSlug);
  const matchedLocation =
    serviceAreas.find((loc) => normalize(loc) === normalize(locationSlug)) || titleCase(locationSlug);

  const pageTitle = `${matchedBrand} ${service.title} in ${matchedLocation}, Mumbai | Top Cool Service`;
  const metaDescription = `Need expert ${matchedBrand} ${service.title.toLowerCase()} in ${matchedLocation}? Doorstep technician in 60-90 mins, genuine ${matchedBrand} spare parts, upfront pricing & warranty.`;

  // Localized Schema.org Structured Data
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": `https://topcoolservice.com/#organization`,
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
        "url": `https://topcoolservice.com/repair/${slug}/`
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
        canonical={`https://topcoolservice.com/repair/${slug}/`}
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
              Looking for reliable {matchedBrand} {service.title.toLowerCase()} near {matchedLocation}? Top Cool Service provides fast, factory-grade repairs directly at your home. Our vans carry genuine {matchedBrand} diagnostic tools and factory parts to ensure your appliance is restored on the very first visit.
            </p>

            <h3>Common {matchedBrand} {service.title} Problems We Fix:</h3>
            <ul className="feature-list">
              {service.issues.map((issue, idx) => (
                <li key={idx}>
                  <CheckCircle size={20} color="#16a34a" />
                  <span>{matchedBrand} {issue}</span>
                </li>
              ))}
            </ul>

            <div className="service-perks-grid">
              <div className="perk-box">
                <Clock size={24} color="#0284c7" />
                <h4>60-90 Min Arrival in {matchedLocation}</h4>
                <p>Fast dispatch throughout {matchedLocation} and adjacent suburbs.</p>
              </div>
              <div className="perk-box">
                <Shield size={24} color="#0284c7" />
                <h4>Authentic {matchedBrand} Parts</h4>
                <p>Genuine factory spares backed by a 30 to 90-day replacement warranty.</p>
              </div>
              <div className="perk-box">
                <Wrench size={24} color="#0284c7" />
                <h4>Diagnostic Guarantee</h4>
                <p>Inspection charge waived if you proceed with our repair estimate.</p>
              </div>
              <div className="perk-box">
                <Award size={24} color="#0284c7" />
                <h4>5+ Years Expert Mechanics</h4>
                <p>Background-verified, company-trained appliance engineers.</p>
              </div>
            </div>

            <div className="faq-block" style={{ marginTop: '2.5rem' }}>
              <h3>Frequently Asked Questions in {matchedLocation}</h3>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>
                    How quickly can an engineer arrive in {matchedLocation}?
                  </h4>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>
                    Our engineers cover {matchedLocation} continuously and typically arrive within 60 to 90 minutes of receiving your booking.
                  </p>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>
                    Are replacement parts for {matchedBrand} authentic?
                  </h4>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>
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