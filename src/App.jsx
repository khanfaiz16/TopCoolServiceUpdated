import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ServiceAreas from './pages/ServiceAreas';
import NotFound from './pages/NotFound';

// Individual Appliance Service Pages
import ACRepair from './pages/ACRepair';
import RefrigeratorRepair from './pages/RefrigeratorRepair';
import WashingMachineRepair from './pages/WashingMachineRepair';
import MicrowaveRepair from './pages/MicrowaveRepair';
import DryerRepair from './pages/DryerRepair';
import DishwasherRepair from './pages/DishwasherRepair';

export default function App() {
  return (
    <div className="site-wrapper">
      {/* Scroll to Top on every route transition */}
      <ScrollToTop />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Application Routing Map */}
      <main className="main-content">
        <Routes>
          {/* Informational & Directory Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/service-areas/" element={<ServiceAreas />} />

          {/* Individual Appliance Routes */}
          <Route path="/ac-repair/" element={<ACRepair />} />
          <Route path="/refrigerator-repair/" element={<RefrigeratorRepair />} />
          <Route path="/washing-machine-repair/" element={<WashingMachineRepair />} />
          <Route path="/microwave-repair/" element={<MicrowaveRepair />} />
          <Route path="/dryer-repair/" element={<DryerRepair />} />
          <Route path="/dishwasher-repair/" element={<DishwasherRepair />} />

          {/* 404 Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Dahisar, Mumbai Footer */}
      <Footer />

      {/* Hovered Floating WhatsApp & Call Buttons */}
      <FloatingActions />
    </div>
  );
}