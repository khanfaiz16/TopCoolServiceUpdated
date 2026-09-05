// Lightweight event tracker for conversion clicks (Calls & WhatsApp)
export const logEvent = (action, category, label = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  } else {
    // Development console log
    console.log(`[Event Logged]: ${category} -> ${action} (${label})`);
  }
};