import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Phone, AlertTriangle, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';
import { contactDetails } from '../data/siteData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        author: {
          '@type': 'Organization',
          name: post.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Top Cool Service'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="blog-post-page">
      <SEO 
        title={`${post.title} | Top Cool Service Mumbai`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}/`}
        schemaJson={JSON.stringify(schemaData)}
      />

      <section className="page-header">
        <div className="container blog-header-container">
          <Link to="/blog/" className="back-link">&larr; All Guides</Link>
          <h1 className="blog-article-header-title">{post.title}</h1>
          <div className="blog-header-meta">
            <span className="blog-meta-item"><Calendar size={14} /> {post.publishDate}</span>
            <span className="blog-meta-item"><Clock size={14} /> {post.readTime}</span>
            <span className="badge blog-header-badge">{post.category}</span>
          </div>
        </div>
      </section>

      <div className="container blog-content-wrapper">
        {/* Article HTML Content */}
        <div 
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* High-Intent Service Booking Box (Internal Conversion Link) */}
        <div className="quick-call-cta blog-service-cta-box">
          <div className="blog-cta-title-row">
            <AlertTriangle size={24} className="blog-cta-icon" />
            <h3 className="blog-cta-heading">
              Prefer a Professional Diagnostic in {post.targetHub}?
            </h3>
          </div>
          <p className="blog-cta-description">
            Appliance repairs involving high-voltage relays, sealed compressors, or refrigerant lines require calibrated digital manifolds and certified technicians.
          </p>

          <div className="blog-cta-actions">
            <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-primary">
              <Phone size={18} /> Book Technician Now
            </a>
            <Link to="/service-areas/" className="blog-hub-link">
              View {post.targetHub} Service Coverage <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* FAQ Schema Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="blog-faq-section">
            <h3 className="blog-faq-title">
              <HelpCircle size={22} className="blog-faq-icon" /> Frequently Asked Questions
            </h3>
            <div className="blog-faq-list">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="blog-faq-card">
                  <h4 className="blog-faq-q">{faq.q}</h4>
                  <p className="blog-faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}