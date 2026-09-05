import React, { useState, useEffect } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { customerReviews } from '../data/siteData';
import FeedbackForm from './FeedbackForm';

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? customerReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === customerReviews.length - 1 ? 0 : prev + 1));
  };

  // Automatic slide interval (3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === customerReviews.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <h2 className="section-title">Verified Customer Reviews</h2>
        <p className="section-subtitle">Read feedback from Mumbai & Thane residents or share your own experience</p>

        {/* 1. Review Form Above */}
        <div className="feedback-top-form-wrapper">
          <div className="sidebar-card">
            <h3>Leave a Review</h3>
            <p className="sidebar-subtext">Did we repair your appliance recently? Let us know how we did!</p>
            <FeedbackForm />
          </div>
        </div>

        {/* 2. Customer Reviews Auto-Carousel with Arrows */}
        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Back Arrow */}
          <button
            type="button"
            className="carousel-nav-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous Review"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Slider Window */}
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {customerReviews.map((rev, index) => (
                <div key={index} className="carousel-slide">
                  <article className="review-card carousel-card">
                    <div className="stars" aria-label={`${rev.rating} out of 5 stars`}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <p className="review-comment">"{rev.comment}"</p>
                    <div className="review-meta">
                      <strong className="reviewer-name">{rev.name}</strong>
                      <span className="reviewer-loc">
                        <MapPin size={15} /> {rev.area}
                      </span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Forward Arrow */}
          <button
            type="button"
            className="carousel-nav-btn next-btn"
            onClick={nextSlide}
            aria-label="Next Review"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="carousel-dots">
          {customerReviews.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}