import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { faqsData } from '../data/siteData';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="faq-page">
      <SEO
        title="Frequently Asked Questions - Top Cool Service"
        description="Find answers to common questions about appliance repair turnaround times, spares warranties, and pricing in Mumbai."
      />

      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our doorstep repair workflow and service guarantees.</p>
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
      </section>
    </div>
  );
}