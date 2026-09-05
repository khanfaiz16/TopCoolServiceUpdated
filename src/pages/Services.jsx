import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesList } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';
import { brandServices } from '../data/brandServiceData';

export default function Services() {
  return (
    <div className="services-page">
      <SEO {...getPageMeta('/services/')} />

      <section className="page-header">
        <div className="container">
          <h1>Our Repair Services</h1>
          <p>Fast, reliable, and manufacturer-standard repairs for all your essential home appliances.</p>
        </div>
      </section>

      <section className="section container">
        <div className="services-grid">
          {servicesList.map((item) => (
            <Link to={`/${item.slug}/`} key={item.slug} className="service-card">
              <div className="service-img-wrap">
                <img src={item.image} alt={`${item.title} at a customer home in Mumbai`} loading="lazy" />
              </div>
              <div className="service-body">
                <h3>{item.title}</h3>
                <p>{item.shortDesc}</p>
                <span className="view-more">View Full Service Details &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Brand hub. Gives every brand landing page a crawlable link from a
            page that is itself linked from the main navigation. */}
        <div className="brand-hub">
          <h2 className="section-title">Brand-Specific Repair &amp; Service in Pune</h2>
          <p className="section-subtitle">
            Common faults, service process and FAQs for Bosch, IFB, Siemens and LG in Pune
          </p>
          {[...new Set(brandServices.map((entry) => entry.brand))].map((brand) => (
            <div key={brand} className="brand-hub-group">
              <h3>{brand} appliance repair in Pune</h3>
              <div className="brands-scroll">
                {brandServices
                  .filter((entry) => entry.brand === brand)
                  .map((entry) => (
                    <Link key={entry.slug} to={`/${entry.slug}/`} className="brand-pill">
                      {entry.brand} {entry.appliance} repair &amp; service
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}