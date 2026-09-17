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
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border-card)',
                  backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  boxShadow: isSelected ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <MapPin size={24} color={isSelected ? 'var(--primary)' : 'var(--primary-light)'} />
                <h3 style={{ color: '#ffffff', margin: '0.6rem 0 0.4rem 0', fontSize: '1.25rem', fontWeight: 700 }}>
                  {area}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
                  Doorstep AC, Fridge, Washing Machine, and Microwave repairs.
                </p>
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
                    fontSize: '0.88rem',
                    color: 'var(--primary-light)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '0.75rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                >
                  View Local Services <ChevronRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Anchor Target for Smooth Scroll */}
        <div
          id="local-hub"
          className="local-seo-hub"
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            background: 'var(--bg-surface)',
            borderRadius: '12px',
            border: '1px solid var(--border-accent)',
            scrollMarginTop: '90px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <Wrench size={22} color="var(--primary-light)" />
            <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-main)' }}>
              Specialized Doorstep Repairs in {selectedArea}
            </h2>
          </div>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Direct dispatch units ready in {selectedArea}. Select your appliance and brand below for genuine OEM parts and warranty coverage:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {servicesList.map((srv) => (
              <div
                key={srv.slug}
                style={{
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-card)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    margin: '0 0 0.75rem 0',
                    color: '#ffffff',
                    borderBottom: '1px solid var(--border-subtle)',
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
                            color: 'var(--primary-light)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'var(--transition)',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.transform = 'translateX(3px)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.color = 'var(--primary-light)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
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