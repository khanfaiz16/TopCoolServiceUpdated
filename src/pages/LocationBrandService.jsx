import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { servicesList, serviceAreas, allBrands, contactDetails } from '../data/siteData';

export default function LocationBrandService() {
  const { pageSlug } = useParams();

  // The route captures the whole slug in one param, because React Router only
  // supports dynamic params that span a complete path segment. Rebuild the
  // three parts here: "<brand>-<service>-in-<location>", e.g.
  // "bosch-dishwasher-repair-in-marine-lines". We split on the LAST "-in-" so
  // multi-word localities keep their hyphens.
  const slug = pageSlug || '';
  const separatorIndex = slug.lastIndexOf('-in-');
  const brandAndService = separatorIndex > -1 ? slug.slice(0, separatorIndex) : slug;
  const locationSlug = separatorIndex > -1 ? slug.slice(separatorIndex + 4) : '';
  const firstDash = brandAndService.indexOf('-');
  const brandSlug = firstDash > -1 ? brandAndService.slice(0, firstDash) : brandAndService;
  const serviceSlug = firstDash > -1 ? brandAndService.slice(firstDash + 1) : '';

  // Normalize inputs. Slugs are hyphenated while the source data is not, so
  // compare on a form where hyphens and spaces are equivalent ("marine-lines"
  // has to match "Marine Lines"). Anything we cannot match falls back to a
  // title-cased version of the slug rather than the raw slug.
  const normalize = (value) => (value || '').toLowerCase().replace(/[\s-]+/g, ' ').trim();
  const titleCase = (value) =>
    normalize(value).replace(/\b\w/g, (character) => character.toUpperCase());

  const service = servicesList.find((s) => s.slug === serviceSlug) || servicesList[0];
  const matchedBrand =
    allBrands.find((b) => normalize(b) === normalize(brandSlug)) || titleCase(brandSlug);
  const matchedLocation =
    serviceAreas.find((loc) => normalize(loc) === normalize(locationSlug)) || titleCase(locationSlug);

  const pageTitle = `${matchedBrand} ${service.title} in ${matchedLocation}`;
  const metaDescription = `Looking for certified ${matchedBrand} ${service.title.toLowerCase()} in ${matchedLocation}, Mumbai? 90-min doorstep arrival, 100% genuine spares, and repair warranty.`;

  // LocalBusiness + Service JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": `Top Cool Service - ${pageTitle}`,
    "image": service.image,
    "telephone": contactDetails.phone,
    "email": contactDetails.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dahisar",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": matchedLocation
    },
    "priceRange": "₹₹",
    "description": metaDescription,
    "openingHours": "Mo-Su 08:00-22:00"
  };

  return (
    <div className="service-detail-view">
      {/* These brand x service x locality combinations are generated
          automatically, so there are well over a thousand of them and they are
          necessarily thin and near-identical. They still work for anyone who
          arrives directly, but they are marked noindex/follow so that a
          thousand near-duplicate pages are not offered to search engines.
          Links on them are still followed, so they pass link equity on to the
          real pages. */}
      <SEO
        title={pageTitle}
        description={metaDescription}
        keywords={`${matchedBrand} ${service.slug} ${matchedLocation}, ${matchedBrand} appliance service ${matchedLocation}, doorstep repair Mumbai`}
        robots="noindex, follow"
        image={service.image}
        schemaData={schemaData}
      />

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">&larr; Home</Link>
          <h1>{pageTitle}</h1>
          <p>
            Same-day, doorstep diagnosis and repair for all {matchedBrand} models across {matchedLocation}, Mumbai.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="detail-layout">
          <div className="detail-info">
            <div className="detail-img-box">
              <img src={service.image} alt={`${matchedBrand} ${service.title} in ${matchedLocation}`} className="detail-banner" />
            </div>

            <h2>Doorstep {matchedBrand} Specialist in {matchedLocation}</h2>
            <p className="lead-text">
              Experiencing issues with your {matchedBrand} appliance in {matchedLocation}? Our localized service vans are stationed nearby, allowing technicians to reach your location in under 90 minutes with authentic {matchedBrand} replacement spares.
            </p>

            <h3>Common {matchedBrand} Issues We Resolve:</h3>
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
                <h4>Express {matchedLocation} Dispatch</h4>
                <p>Localized engineers available within 60–90 minutes.</p>
              </div>
              <div className="perk-box">
                <Shield size={24} color="#0284c7" />
                <h4>Genuine {matchedBrand} Parts</h4>
                <p>Authentic spares backed by a 30 to 90-day warranty.</p>
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