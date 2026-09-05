import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { customerReviews } from '../data/siteData';
import FeedbackForm from './FeedbackForm';

export default function Feedback() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <h2 className="section-title">Verified Customer Reviews</h2>
        <p className="section-subtitle">Read feedback from Mumbai residents or share your own service experience</p>

        <div className="feedback-container-layout">
          {/* Left Column: Existing Verified Reviews */}
          <div className="reviews-grid">
            {customerReviews.map((rev, index) => (
              <article key={index} className="review-card">
                <div className="stars" aria-label={`${rev.rating} out of 5 stars`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="review-comment">"{rev.comment}"</p>
                <div className="review-meta">
                  <strong className="reviewer-name">{rev.name}</strong>
                  <span className="reviewer-loc"><MapPin size={14} /> {rev.area}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Interactive Leave a Review Form */}
          <div className="feedback-form-card">
            <div className="sidebar-card">
              <h3>Leave a Review</h3>
              <p className="sidebar-subtext">Did we repair your appliance recently? Let us know how we did!</p>
              <FeedbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}