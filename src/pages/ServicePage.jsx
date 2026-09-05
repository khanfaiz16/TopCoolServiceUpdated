import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { allBrands, contactDetails } from '../data/siteData';

export default function ServicePage({ service }) {
  if (!service) return null;

  return (
    <div className="service-detail-view">
      <SEO
        title={`${service.title} in Mumbai`}
        description={`Fast doorstep ${service.title.toLowerCase()} across Mumbai. Genuine spare parts, 90-min technician arrival, and warranty on all repairs.`}
        keywords={`${service.title} Mumbai, appliance repair Dahisar, appliance service Bandra, genuine spare parts`}
      />

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
              <img src={service.image} alt={service.title} className="detail-banner" />
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