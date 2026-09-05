import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { contactDetails, serviceAreas, servicesList } from '../data/siteData';
import { logEvent } from '../analytics';

export default function BookingForm({ defaultService = '' }) {
  const [state, handleSubmit] = useForm(contactDetails.formspreeId);

  if (state.succeeded) {
    return (
      <div className="success-banner">
        <h3>Booking Received!</h3>
        <p>Thank you. Our expert technician will call you within 15 minutes to confirm your slot.</p>
      </div>
    );
  }

  const onSubmit = (e) => {
    logEvent('Submit Booking Form', 'Lead Generation', defaultService || 'General');
    handleSubmit(e);
  };

  return (
    <form className="repair-form" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Full Name" required />
      <input type="tel" name="phone" placeholder="Mobile Number (e.g. 9920435051)" required />
      
      <select name="service" defaultValue={defaultService} required>
        <option value="" disabled>Select Appliance</option>
        {servicesList.map((s) => (
          <option key={s.slug} value={s.title}>{s.title}</option>
        ))}
      </select>

      <select name="location" defaultValue="" required>
        <option value="" disabled>Select Your Mumbai Area</option>
        {serviceAreas.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      <textarea
        name="issue_description"
        rows="3"
        placeholder="Briefly describe the problem (e.g., cooling issue, error code, leaking water...)"
        required
      ></textarea>

      <button type="submit" className="btn btn-primary form-submit-btn" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Book Doorstep Inspection'}
      </button>

      <ValidationError prefix="Form" errors={state.errors} />
    </form>
  );
}