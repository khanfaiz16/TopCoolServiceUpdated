import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ChevronRight, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { serviceAreas, servicesList, contactDetails } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';

const slugify = (text) =>
  String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

export default function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState('Kalina');

  const featuredBrands = ['Bosch', 'Samsung', 'LG', 'Voltas', 'Whirlpool', 'Daikin'];

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    const element = document.getElementById('local-hub');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="service-areas-page">
      <SEO {...getPageMeta('/service-areas/')} />

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">&larr; Home</Link>
          <h1>Mumbai Service Areas & Local Hubs</h1>
          <p>
            Doorstep home appliance repair coverage across 15+ Mumbai hubs. 60–90 minute turnaround with certified engineers.
          </p>
        </div>
      </section>

      <section className="section container">
        {/* Coverage Cards Grid */}
        <div className="areas-grid">
          {serviceAreas.map((area) => {
            const isSelected = selectedArea === area;
            return (
              <div
                key={area}
                onClick={() => handleAreaSelect(area)}
                className={`area-card ${isSelected ? 'active' : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleAreaSelect(area)}
              >
                <MapPin size={24} className="area-pin-icon" />
                <h3 className="area-card-title">{area}</h3>
                <p className="area-card-text">
                  Doorstep AC, Fridge, Washing Machine, and Microwave repairs.
                </p>
                <button
                  type="button"
                  className="area-view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAreaSelect(area);
                  }}
                >
                  View Local Services <ChevronRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Anchor Target for Smooth Scroll */}
        <div id="local-hub" className="local-seo-hub">
          <div className="local-hub-header">
            <Wrench size={22} className="local-hub-icon" />
            <h2 className="local-hub-title">
              Specialized Doorstep Repairs in {selectedArea}
            </h2>
          </div>
          <p className="local-hub-subtitle">
            Direct dispatch units ready in {selectedArea}. Select your appliance and brand below for genuine OEM parts and warranty coverage:
          </p>

          <div className="local-hub-grid">
            {servicesList.map((srv) => (
              <div key={srv.slug} className="local-hub-card">
                <h3 className="local-hub-card-title">
                  {srv.title} in {selectedArea}
                </h3>
                <ul className="local-hub-brand-list">
                  {featuredBrands.map((brand) => {
                    const pageSlug = `${slugify(brand)}-${srv.slug}-in-${slugify(selectedArea)}`;
                    return (
                      <li key={brand} className="local-hub-brand-item">
                        <Link
                          to={`/repair/${pageSlug}/`}
                          className="local-hub-brand-link"
                        >
                          <ChevronRight size={12} /> {brand} {srv.title.replace(' & Service', '')} in {selectedArea}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="text-center call-banner">
          <h3>Need an Appliance Engineer in {selectedArea} Today?</h3>
          <p>Technicians arrive equipped with original spare parts within 60 to 90 minutes.</p>
          <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-primary">
            <Phone size={18} /> Call {contactDetails.phone}
          </a>
        </div>
      </section>
    </div>
  );
}