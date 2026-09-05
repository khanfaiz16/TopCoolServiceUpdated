import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { contactDetails } from '../data/siteData';
import { getPageMeta } from '../data/seoConfig';

export default function Contact() {
  return (
    <div className="contact-page">
      <SEO {...getPageMeta('/contact/')} />

      <section className="page-header">
        <div className="container">
          <h1>Contact Us & Book Inspection</h1>
          <p>Reach out directly or submit your inquiry to receive a callback within 15 minutes.</p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-layout">
          <div className="contact-info-panel">
            <h2>Get In Touch</h2>
            <p>Our helpdesk is operational 7 days a week to dispatch certified technicians to your location.</p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <MapPin size={22} color="#0284c7" />
                <div>
                  <strong>Main Service Center:</strong>
                  <p>{contactDetails.address}</p>
                </div>
              </div>

              <div className="contact-meta-item">
                <Phone size={22} color="#0284c7" />
                <div>
                  <strong>Phone / WhatsApp:</strong>
                  <p><a href={`tel:${contactDetails.phoneRaw}`}>{contactDetails.phone}</a></p>
                </div>
              </div>

              <div className="contact-meta-item">
                <Mail size={22} color="#0284c7" />
                <div>
                  <strong>Email:</strong>
                  <p><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
                </div>
              </div>

              <div className="contact-meta-item">
                <Clock size={22} color="#0284c7" />
                <div>
                  <strong>Working Hours:</strong>
                  <p>Monday – Sunday: 8:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="sidebar-card">
              <h3>Send a Service Request</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}