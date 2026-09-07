import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Wrench, Sparkles } from 'lucide-react';
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
        <div className="container footer-bottom-content">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Top Cool Service. All Rights Reserved. Mumbai, Maharashtra.
          </p>

          {/* Premium Developer Badge */}
          <div className="dev-badge">
            <div className="dev-meta">
              <Sparkles size={14} className="sparkle-icon" />
              <span className="built-text">Developed by</span>
              <span className="dev-name">Khan Faiz</span>
            </div>

            <div className="dev-actions">
              <a href="tel:+917385540220" className="dev-phone-pill" title="Call Khan Faiz">
                +91 73855 40220
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohd-faiz-khan-085555319/"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-social-pill linkedin"
                title="Khan Faiz LinkedIn"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917385540220?text=Hi%20Khan%20Faiz,%20I%20saw%20your%20work%20on%20Top%20Cool%20Service."
                target="_blank"
                rel="noopener noreferrer"
                className="dev-social-pill whatsapp"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.53 1.37 5.07L2 22l5.18-1.36a11.9 11.9 0 0 0 4.86 1.05h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm.01 18.11c-1.52 0-3.02-.4-4.32-1.17l-.31-.18-3.2.84.85-3.12-.2-.32a9.88 9.88 0 0 1-1.52-5.25c0-4.39 3.58-7.97 7.99-7.97 2.13 0 4.14.83 5.65 2.34a7.96 7.96 0 0 1 2.34 5.64c0 4.4-3.58 7.99-7.99 7.99zm4.38-5.99c-.24-.12-1.42-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.27 7.27 0 0 1-1.34-1.66c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}