import React from 'react';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { allBrands } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';

export default function About() {
  return (
    <div className="about-page">
      <SEO {...getPageMeta('/about/')} />

      <section className="page-header">
        <div className="container">
          <h1>About Top Cool Service</h1>
          <p>Delivering dependable, certified appliance repair solutions to Mumbai households for over a decade.</p>
        </div>
      </section>

      <section className="section container">
        <div className="about-grid">
          <div>
            <h2>Trusted Appliance Specialists Across Mumbai</h2>
            <p className="lead-text">
              Top Cool Service is dedicated to resolving household appliance failures with minimal disruption. From complex inverter AC issues to precision dishwasher valve repairs, our background-checked technicians deliver on-site diagnosis and repair.
            </p>
            <p>
              Based in Dahisar and operating across all major suburbs including Bandra, Andheri, BKC, and Virar, we ensure genuine replacement parts, transparent estimates, and zero hidden inspection costs.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <Clock size={32} color="#0284c7" />
              <h3>90-Minute Response</h3>
              <p>Quick doorstep dispatch across the Mumbai suburban network.</p>
            </div>
            <div className="highlight-card">
              <ShieldCheck size={32} color="#0284c7" />
              <h3>Warranty Assured</h3>
              <p>Guaranteed post-service protection on all replaced spares.</p>
            </div>
            <div className="highlight-card">
              <Award size={32} color="#0284c7" />
              <h3>Certified Technicians</h3>
              <p>Professionally trained engineers for all domestic & imported brands.</p>
            </div>
            <div className="highlight-card">
              <Users size={32} color="#0284c7" />
              <h3>15,000+ Happy Homes</h3>
              <p>Consistently rated 5 stars for upfront rates and quality work.</p>
            </div>
          </div>
        </div>

        <div className="brands-supported-section">
          <h3>Brands We Regularly Service</h3>
          <div className="brands-scroll">
            {allBrands.map((brand) => (
              <span key={brand} className="brand-pill">{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}