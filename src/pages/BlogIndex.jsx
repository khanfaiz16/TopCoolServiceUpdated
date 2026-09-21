import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';

export default function BlogIndex() {
  return (
    <div className="blog-index-page">
      <SEO 
        title="Appliance Repair Guides & Troubleshooting Tips | Top Cool Service"
        description="Troubleshooting guides, error code solutions, and cost estimation tips for AC, refrigerator, and washing machine repairs in Mumbai."
        canonicalUrl="/blog/"
      />

      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link">&larr; Home</Link>
          <h1>Appliance Repair Knowledge Base</h1>
          <p>
            Expert diagnostic guides, error code fixes, and maintenance insights curated by certified Mumbai technicians.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="services-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="service-card blog-card">
              <div className="service-body">
                <div className="blog-card-meta-top">
                  <span className="badge blog-category-badge">
                    {post.category}
                  </span>
                  <span className="blog-read-time">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>

                <h3 className="blog-card-title">
                  <Link to={`/blog/${post.slug}/`} className="blog-title-link">
                    {post.title}
                  </Link>
                </h3>

                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>

                <div className="blog-card-footer">
                  <span className="blog-card-date">
                    <Calendar size={13} /> {post.publishDate}
                  </span>
                  <Link to={`/blog/${post.slug}/`} className="view-more">
                    Read Guide <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}