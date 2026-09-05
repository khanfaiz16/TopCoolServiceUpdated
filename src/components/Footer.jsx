import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Wrench } from 'lucide-react';
import { contactDetails, servicesList } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Company Column */}
        <div>
          <div className="footer-logo">
            <Wrench size={22} color="#38bdf8" />
            <h3 className="footer-title">Top Cool Service</h3>
          </div>
          <p className="footer-text">
            Mumbai's trusted doorstep repair specialists. Delivering certified technical service for all domestic and commercial home appliances.
          </p>
          <p className="working-hours">
            <Clock size={16} /> Mon - Sun: 8:00 AM - 10:00 PM
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About Company</Link></li>
            <li><Link to="/services/">All Services</Link></li>
            <li><Link to="/service-areas/">Mumbai Service Areas</Link></li>
            <li><Link to="/faq/">Frequently Asked Questions</Link></li>
            <li><Link to="/contact/">Book Technician</Link></li>
          </ul>
        </div>

        {/* Repair Services */}
        <div>
          <h4>Repair Services</h4>
          <ul className="footer-links">
            {servicesList.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}/`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact Us</h4>
          <div className="contact-item">
            <MapPin size={18} color="#38bdf8" />
            <span>{contactDetails.address}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} color="#38bdf8" />
            <a href={`tel:${contactDetails.phoneRaw}`}>{contactDetails.phone}</a>
          </div>
          <div className="contact-item">
            <Mail size={18} color="#38bdf8" />
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Top Cool Service. All Rights Reserved. Mumbai, Maharashtra.</p>
      </div>
    </footer>
  );
}