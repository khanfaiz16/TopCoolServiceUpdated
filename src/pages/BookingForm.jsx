import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { contactDetails, serviceAreas, servicesList } from '../data/siteData';
import { logEvent } from '../analytics';

/**
 * @param {string} defaultService  Preselects the appliance dropdown. Must match
 *                                 one of the servicesList titles exactly.
 * @param {string} locationCity    When set (e.g. "Pune"), the Mumbai locality
 *                                 dropdown is replaced with a free-text field
 *                                 for that city. The dropdown only contains
 *                                 Mumbai areas, so a Pune visitor would
 *                                 otherwise be forced to submit a Mumbai
 *                                 locality.
 * @param {string} contextLabel    Optional hidden field recording which landing
 *                                 page the enquiry came from.
 */
export default function BookingForm({ defaultService = '', locationCity = '', contextLabel = '' }) {
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
    logEvent(
      'Submit Booking Form',
      'Lead Generation',
      contextLabel || defaultService || 'General'
    );
    handleSubmit(e);
  };

  return (
    <form className="repair-form" onSubmit={onSubmit}>
      {contextLabel && <input type="hidden" name="enquiry_source" value={contextLabel} />}

      <input type="text" name="name" placeholder="Full Name" required />
      <input type="tel" name="phone" placeholder="Mobile Number (e.g. 9920435051)" required />

      <select name="service" defaultValue={defaultService} required>
        <option value="" disabled>Select Appliance</option>
        {servicesList.map((s) => (
          <option key={s.slug} value={s.title}>{s.title}</option>
        ))}
      </select>

      {locationCity ? (
        <input
          type="text"
          name="location"
          placeholder={`Your area in ${locationCity}`}
          aria-label={`Your area in ${locationCity}`}
          required
        />
      ) : (
        <select name="location" defaultValue="" required>
          <option value="" disabled>Select Your Mumbai Area</option>
          {serviceAreas.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      )}

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
