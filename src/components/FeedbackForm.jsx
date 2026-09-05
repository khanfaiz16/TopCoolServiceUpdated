import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Star } from 'lucide-react';
import { contactDetails, serviceAreas } from '../data/siteData';
import { logEvent } from '../analytics';

export default function FeedbackForm() {
  const [state, handleSubmit] = useForm(contactDetails.formspreeId);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  if (state.succeeded) {
    return (
      <div className="success-banner">
        <h3>Thank You for Your Review!</h3>
        <p>Your feedback has been recorded and helps us improve our repair services across Mumbai.</p>
      </div>
    );
  }

  const onSubmit = (e) => {
    logEvent('Submit Customer Feedback', 'Review', `${rating} Stars`);
    handleSubmit(e);
  };

  return (
    <form className="repair-form feedback-form" onSubmit={onSubmit}>
      {/* Hidden input to pass the numeric star rating to Formspree */}
      <input type="hidden" name="star_rating" value={rating} />

      <div className="rating-picker-wrapper">
        <label className="rating-label">Rate Your Experience:</label>
        <div className="star-selection" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className="star-btn"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              aria-label={`${star} Star`}
            >
              <Star
                size={26}
                fill={(hoverRating || rating) >= star ? '#f59e0b' : 'none'}
                color={(hoverRating || rating) >= star ? '#f59e0b' : '#cbd5e1'}
              />
            </button>
          ))}
          <span className="selected-rating-text">{rating} / 5 Stars</span>
        </div>
      </div>

      <input type="text" name="customer_name" placeholder="Your Name" required />
      
      <select name="service_area" defaultValue="" required>
        <option value="" disabled>Select Your Mumbai Area</option>
        {serviceAreas.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      <textarea
        name="review_feedback"
        rows="4"
        placeholder="Share your experience (e.g., technician arrival speed, appliance condition, repair quality...)"
        required
      ></textarea>

      <button type="submit" className="btn btn-primary form-submit-btn" disabled={state.submitting}>
        {state.submitting ? 'Submitting Review...' : 'Submit Feedback'}
      </button>

      <ValidationError prefix="Feedback" errors={state.errors} />
    </form>
  );
}