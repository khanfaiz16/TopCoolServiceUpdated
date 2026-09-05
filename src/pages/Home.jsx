import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import Feedback from '../components/Feedback';
import BookingForm from './BookingForm';
import { contactDetails, servicesList, serviceAreas, allBrands, faqsData } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div>
      <SEO {...getPageMeta('/')} />

      {/* Hero Section with Online Background */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="badge">Mumbai's #1 Doorstep Appliance Experts</span>
              <h1>Fast, Reliable Appliance Repairs at Your Doorstep</h1>
              <p>
                Technicians at your home within 90 minutes. We repair all major brands using 100% genuine parts with service warranty.
              </p>
              <div className="hero-actions">
                <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-call">
                  <Phone size={18} /> Call {contactDetails.phone}
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}?text=Hi%20Top%20Cool%20Service%2C%20I%20need%20a%20technician.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> WhatsApp Booking
                </a>
              </div>
            </div>

            <div className="hero-form-wrapper">
              <h3>Schedule Fast Doorstep Repair</h3>
              <p className="form-subtext">Book an expert inspection across Mumbai</p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Ribbon */}
      <section className="brands-bar">
        <div className="container">
          <p className="brands-title">We Service All Leading Brands:</p>
          <div className="brands-scroll">
            {allBrands.map((brand) => (
              <span key={brand} className="brand-pill">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Appliance Repair Services</h2>
          <p className="section-subtitle">Select your appliance to view detailed repair solutions and transparent pricing</p>
          <div className="services-grid">
            {servicesList.map((item) => (
              <Link to={`/${item.slug}/`} key={item.slug} className="service-card">
                <div className="service-img-wrap">
                  <img src={item.image} alt={`${item.title} at a customer home in Mumbai`} loading="lazy" />
                </div>
                <div className="service-body">
                  <h3>{item.title}</h3>
                  <p>{item.shortDesc}</p>
                  <span className="view-more">View Service Details &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section areas-section">
        <div className="container">
          <h2 className="section-title">Locations We Cover Across Mumbai</h2>
          <p className="section-subtitle">Prompt doorstep arrival in Western, Central, and South Mumbai</p>
          <div className="areas-grid">
            {serviceAreas.map((area) => (
              <div key={area} className="area-pill">
                <MapPin size={16} /> <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <Feedback />

      {/* FAQs Section */}
      <section className="section faqs-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Common queries regarding our doorstep service policies</p>
          <div className="faq-list">
            {faqsData.map((f, i) => (
              <div key={i} className="faq-item" onClick={() => toggleFaq(i)}>
                <div className="faq-q">
                  <h4>{f.q}</h4>
                  <span>{openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
                </div>
                <p className={`faq-a${openFaq === i ? ' is-open' : ''}`}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}