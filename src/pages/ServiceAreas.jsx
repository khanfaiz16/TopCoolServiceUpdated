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
          {serviceAreas.map((area) => (
            <div
              key={area}
              onClick={() => handleAreaSelect(area)}
              className={`area-card ${selectedArea === area ? 'active' : ''}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleAreaSelect(area)}
              style={{
                cursor: 'pointer',
                borderColor: selectedArea === area ? '#0284c7' : '#e2e8f0',
                backgroundColor: selectedArea === area ? '#f0f9ff' : '#ffffff',
                transition: 'all 0.2s ease',
              }}
            >
              <MapPin size={24} color={selectedArea === area ? '#0284c7' : '#64748b'} />
              <h3>{area}</h3>
              <p>Doorstep AC, Fridge, Washing Machine, and Microwave repairs.</p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAreaSelect(area);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '0.85rem',
                  color: '#0284c7',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                View Local Services <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Anchor Target for Smooth Scroll */}
        <div
          id="local-hub"
          className="local-seo-hub"
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            scrollMarginTop: '90px', // Prevents navbar from covering header
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <Wrench size={22} color="#0284c7" />
            <h2 style={{ fontSize: '1.4rem', margin: 0, color: '#0f172a' }}>
              Specialized Doorstep Repairs in {selectedArea}
            </h2>
          </div>
          <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Direct dispatch units ready in {selectedArea}. Select your appliance and brand below for genuine OEM parts and warranty coverage:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {servicesList.map((srv) => (
              <div
                key={srv.slug}
                style={{
                  background: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    margin: '0 0 0.75rem 0',
                    color: '#1e293b',
                    borderBottom: '1px solid #f1f5f9',
                    paddingBottom: '0.5rem',
                  }}
                >
                  {srv.title} in {selectedArea}
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {featuredBrands.map((brand) => {
                    const pageSlug = `${slugify(brand)}-${srv.slug}-in-${slugify(selectedArea)}`;
                    return (
                      <li key={brand}>
                        <Link
                          to={`/repair/${pageSlug}/`}
                          style={{
                            color: '#0284c7',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                          onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
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
        <div className="text-center call-banner" style={{ marginTop: '3rem' }}>
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