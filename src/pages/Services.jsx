import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesList } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';

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
      </section>
    </div>
  );
}