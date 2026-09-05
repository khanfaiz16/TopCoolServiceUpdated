import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { serviceAreas, contactDetails, allBrands, servicesList } from '../data/siteData';

export default function ServiceAreas() {
  return (
    <div className="service-areas-page">
      <SEO
        title="Doorstep Appliance Service Areas in Mumbai"
        description="We serve Bandra, BKC, Kalina, Andheri, Santacruz, Vasai, Virar, Nallsopara, Powai, Dahisar, Miraroad, Colaba, Juhu, and Marine Lines."
        keywords="Appliance repair Mumbai, AC repair Bandra, Fridge service Andheri, Washing machine repair Dahisar"
      />

      <section className="page-header">
        <div className="container">
          <h1>Mumbai Service Areas</h1>
          <p>Fast doorstep appliance repair coverage across all major Mumbai zones and suburbs.</p>
        </div>
      </section>

      <section className="section container">
        {/* Coverage Cards */}
        <div className="areas-grid">
          {serviceAreas.map((area) => (
            <div key={area} className="area-card">
              <MapPin size={24} color="#0284c7" />
              <h3>{area}</h3>
              <p>Same-day doorstep repair for AC, Fridge, Washing Machine, and all appliances.</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Banner */}
        <div className="text-center call-banner">
          <h3>Need a Technician in Your Area Today?</h3>
          <p>Our mobile service vans operate locally for 90-minute turnaround times.</p>
          <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-primary">
            <Phone size={18} /> Call {contactDetails.phone}
          </a>
        </div>
      </section>
    </div>
  );
}