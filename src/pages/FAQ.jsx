import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { faqsData } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';
import { faqPageSchema } from '../data/schema';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  // Memoised so toggling an accordion item does not rebuild the JSON-LD.
  const faqSchema = useMemo(() => faqPageSchema(faqsData), []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="faq-page">
      <SEO {...getPageMeta('/faq/')} schemaData={faqSchema} />

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
              <p className={`faq-a${openFaq === i ? ' is-open' : ''}`}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}