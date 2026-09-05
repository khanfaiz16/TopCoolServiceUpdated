import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { contactDetails } from '../data/siteData';
import { logEvent } from '../analytics';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <Wrench size={24} color="#0284c7" />
          <div>
            <span className="brand-name">Top Cool Service</span>
            <span className="brand-tag">Appliance Experts</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about/" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services/" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/service-areas/" onClick={closeMenu}>Areas</NavLink>
          <NavLink to="/faq/" onClick={closeMenu}>FAQ</NavLink>
          <NavLink to="/contact/" onClick={closeMenu}>Contact</NavLink>
        </nav>

        {/* Single Contact Button & Mobile Hamburger */}
        <div className="nav-actions">
          <a
            href={`tel:${contactDetails.phoneRaw}`}
            className="btn btn-call-nav"
            onClick={() => logEvent('Click Desktop Nav Call Button', 'Engagement')}
          >
            <Phone size={16} /> {contactDetails.phone}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle Navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}