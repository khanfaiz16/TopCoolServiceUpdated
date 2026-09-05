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

        {/* Localized SEO Keyword Link Matrix */}
        <div className="seo-links-matrix section">
          <h2 className="section-title">Popular Doorstep Appliance Services by Locality</h2>
          <p className="section-subtitle">Select your brand and local area for targeted 90-minute service</p>
          
          <div className="matrix-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {servicesList.map((service) =>
              allBrands.map((brand) =>
                serviceAreas.map((area) => {
                  const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
                  const brandSlug = brand.toLowerCase();
                  return (
                    <Link
                      key={`${service.slug}-${brandSlug}-${areaSlug}`}
                      to={`/repair/${brandSlug}-${service.slug}-in-${areaSlug}/`}
                      className="brand-pill"
                      style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', textDecoration: 'none' }}
                    >
                      {brand} {service.title.split(' ')[0]} in {area}
                    </Link>
                  );
                })
              )
            )}
          </div>
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