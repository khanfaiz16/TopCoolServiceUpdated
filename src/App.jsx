import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

// Informational Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ServiceAreas from './pages/ServiceAreas';
import NotFound from './pages/NotFound';

// Static Individual Appliance Pages
import ACRepair from './pages/ACRepair';
import RefrigeratorRepair from './pages/RefrigeratorRepair';
import WashingMachineRepair from './pages/WashingMachineRepair';
import MicrowaveRepair from './pages/MicrowaveRepair';
import DryerRepair from './pages/DryerRepair';
import DishwasherRepair from './pages/DishwasherRepair';

// Dynamic Hyper-Local Programmatic SEO Page
import LocationBrandService from './pages/LocationBrandService';

export default function App() {
  const location = useLocation();

  // Automatically track every page transition in Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <div className="site-wrapper">
      {/* Ensures window jumps to top on navigation */}
      <ScrollToTop />

      {/* Global Header */}
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Main Info Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/service-areas/" element={<ServiceAreas />} />

          {/* Standard Appliance Routes */}
          <Route path="/ac-repair/" element={<ACRepair />} />
          <Route path="/refrigerator-repair/" element={<RefrigeratorRepair />} />
          <Route path="/washing-machine-repair/" element={<WashingMachineRepair />} />
          <Route path="/microwave-repair/" element={<MicrowaveRepair />} />
          <Route path="/dryer-repair/" element={<DryerRepair />} />
          <Route path="/dishwasher-repair/" element={<DishwasherRepair />} />

          {/* Programmatic SEO Dynamic Route */}
          {/* Matches URLs like: /repair/haier-ac-repair-in-juhu/ */}
          <Route
            path="/repair/:brandSlug-:serviceSlug-in-:locationSlug/"
            element={<LocationBrandService />}
          />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}