import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { allBrands, contactDetails } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';
import { getApplianceSiblings } from '../data/brandServiceData';
import { applianceServiceSchema } from '../data/schema';

export default function ServicePage({ service }) {
  if (!service) return null;

  const canonicalPath = `/${service.slug}/`;
  // Brand-specific landing pages that exist for this appliance, e.g. the Bosch,
  // IFB, Siemens and LG dishwasher pages when this is the dishwasher page.
  const brandPages = getApplianceSiblings(service.slug, null);

  const schemaData = applianceServiceSchema(service);

  return (
    <div className="service-detail-view">
      <SEO {...getPageMeta(canonicalPath)} image={service.image} schemaData={schemaData} />

      <section className="page-header">
        <div className="container">
          <Link to="/services/" className="back-link">&larr; All Services</Link>
          <h1>{service.title} in Mumbai</h1>
          <p>{service.shortDesc}</p>
        </div>
      </section>

      <section className="section container">
        <div className="detail-layout">
          {/* Main Content Area */}
          <div className="detail-info">
            <div className="detail-img-box">
              <img
                src={service.image}
                alt={`${service.title} carried out at a customer's home in Mumbai`}
                className="detail-banner"
                loading="lazy"
              />
            </div>

            <h2>Comprehensive Solutions for {service.title}</h2>
            <p className="lead-text">
              We specialize in diagnosing and repairing all makes and models of {service.title.toLowerCase()}. Our technicians carry advanced diagnostic tools and genuine spares for instant on-site turnaround.
            </p>

            <h3>Common Problems We Fix:</h3>
            <ul className="feature-list">
              {service.issues.map((issue, idx) => (
                <li key={idx}>
                  <CheckCircle size={20} color="#16a34a" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>

            <div className="service-perks-grid">
              <div className="perk-box">
                <Clock size={24} color="#0284c7" />
                <h4>90-Min Arrival</h4>
                <p>Swift doorstep response across Mumbai suburbs.</p>
              </div>
              <div className="perk-box">
                <Shield size={24} color="#0284c7" />
                <h4>Service Warranty</h4>
                <p>Up to 90 days warranty on replaced spare parts.</p>
              </div>
            </div>

            <h3>All Brands Serviced</h3>
            <p>Our engineers are fully certified to service every major brand:</p>
            <div className="brands-scroll">
              {allBrands.map((brand) => (
                <span key={brand} className="brand-pill">{brand}</span>
              ))}
            </div>

            {brandPages.length > 0 && (
              <>
                <h3>Brand-Specific {service.title} Pages (Pune)</h3>
                <p>
                  Detailed repair guides, common faults and FAQs for our Pune service pages:
                </p>
                <div className="brands-scroll">
                  {brandPages.map((entry) => (
                    <Link key={entry.slug} to={`/${entry.slug}/`} className="brand-pill">
                      {entry.brand} {entry.appliance} repair &amp; service in Pune
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div className="quick-call-cta">
              <h3>Need Immediate Help?</h3>
              <p>Speak directly with our technical support team in Mumbai.</p>
              <div className="hero-actions">
                <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-call">
                  <Phone size={18} /> Call {contactDetails.phone}
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}?text=Hi%20Top%20Cool%20Service%2C%20I%20need%20help%20with%20my%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Form */}
          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>Book {service.title}</h3>
              <p className="sidebar-subtext">Technician arrives at your doorstep</p>
              <BookingForm defaultService={service.title} />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}