import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactDetails } from '../data/siteData';
import { logEvent } from '../analytics';

export default function FloatingActions() {
  return (
    <aside className="floating-actions" aria-label="Quick contact buttons">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contactDetails.whatsappRaw}?text=Hi%20Top%20Cool%20Service%2C%20I%20need%20doorstep%20appliance%20repair.`}
        className="float-btn float-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => logEvent('Click WhatsApp Floating Button', 'Conversion')}
      >
        <MessageCircle size={26} />
        <span className="tooltip">Chat on WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${contactDetails.phoneRaw}`}
        className="float-btn float-call"
        aria-label="Call Support"
        onClick={() => logEvent('Click Call Floating Button', 'Conversion')}
      >
        <Phone size={26} />
        <span className="tooltip">Call +91 99204 35051</span>
      </a>
    </aside>
  );
}