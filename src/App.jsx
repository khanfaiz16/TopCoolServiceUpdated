import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ServiceAreas from './pages/ServiceAreas';
import NotFound from './pages/NotFound';

import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

import ACRepair from './pages/ACRepair';
import RefrigeratorRepair from './pages/RefrigeratorRepair';
import WashingMachineRepair from './pages/WashingMachineRepair';
import MicrowaveRepair from './pages/MicrowaveRepair';
import DryerRepair from './pages/DryerRepair';
import DishwasherRepair from './pages/DishwasherRepair';

import LocationBrandService from './pages/LocationBrandService';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <div className="site-wrapper">
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Static Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/" element={<ServiceAreas />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/:slug/" element={<BlogPost />} />

          {/* Individual Service Categories */}
          <Route path="/ac-repair" element={<ACRepair />} />
          <Route path="/ac-repair/" element={<ACRepair />} />
          <Route path="/refrigerator-repair" element={<RefrigeratorRepair />} />
          <Route path="/refrigerator-repair/" element={<RefrigeratorRepair />} />
          <Route path="/washing-machine-repair" element={<WashingMachineRepair />} />
          <Route path="/washing-machine-repair/" element={<WashingMachineRepair />} />
          <Route path="/microwave-repair" element={<MicrowaveRepair />} />
          <Route path="/microwave-repair/" element={<MicrowaveRepair />} />
          <Route path="/dryer-repair" element={<DryerRepair />} />
          <Route path="/dryer-repair/" element={<DryerRepair />} />
          <Route path="/dishwasher-repair" element={<DishwasherRepair />} />
          <Route path="/dishwasher-repair/" element={<DishwasherRepair />} />

          {/* Standard Programmatic Routes (e.g. /repair/voltas-ac-repair-in-bandra/) */}
          <Route path="/repair/:pageSlug" element={<LocationBrandService />} />
          <Route path="/repair/:pageSlug/" element={<LocationBrandService />} />

          {/* Legacy / Direct Root Slug Catch-All for Google Caches (e.g. /voltas-ac-repair-in-bandra/) */}
          <Route path="/:pageSlug" element={<LocationBrandService />} />
          <Route path="/:pageSlug/" element={<LocationBrandService />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
      <FloatingActions />
    </div>
  );
}