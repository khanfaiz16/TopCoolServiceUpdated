import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { faqsData, contactDetails } from '../data/siteData';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="faq-page">
      <SEO
        title="Frequently Asked Questions - Top Cool Service"
        description="Got questions about our doorstep appliance repairs, warranty, inspection charges, or turnaround time in Mumbai & Thane? Find your answers here."
      />

      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our doorstep repair workflow, spares warranty, and service guarantees.</p>
        </div>
      </section>

      <section className="section container">
        <div className="faq-list">
          {faqsData.map((f, i) => (
            <div key={i} className="faq-item" onClick={() => toggleFaq(i)}>
              <div className="faq-q">
                <h4>{f.q}</h4>
                <span>{openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
              </div>
              {openFaq === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>

        <div className="text-center call-banner" style={{ marginTop: '3.5rem' }}>
          <h3>Still Have Questions?</h3>
          <p>Talk directly with our senior technician in Mumbai & Thane.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-primary">
              <Phone size={18} /> Call {contactDetails.phone}
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsappRaw}?text=Hi%20Top%20Cool%20Service%2C%20I%20have%20a%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}