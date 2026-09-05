import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Wrench, MapPin, Phone, MessageCircle, Info } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from './BookingForm';
import { contactDetails, servicesList } from '../data/siteData';
import { brandServiceSchema } from '../data/schema';
import {
  getBrandService,
  getBrandSiblings,
  getApplianceSiblings,
  serviceProcess,
  PUNE_COVERAGE_AREAS,
  SERVICE_CITY,
} from '../data/brandServiceData';

/**
 * Renders one brand + appliance landing page for Pune, e.g. Bosch Dishwasher.
 * Every page on this template is driven entirely by src/data/brandServiceData.js,
 * so there is a single component rather than twelve near-identical pages.
 *
 * These pages deliberately carry no Mumbai references: Mumbai is the subject of
 * the existing site (home, service areas, the six appliance pages) and Pune is
 * the subject of these. Keeping them separate is what stops the two sets of
 * pages competing for the same searches.
 */
export default function BrandServicePage({ slug }) {
  const page = getBrandService(slug);

  const schema = useMemo(() => (page ? brandServiceSchema(page) : null), [page]);

  if (!page) return null;

  const brandSiblings = getBrandSiblings(page.brand, page.slug);
  const applianceSiblings = getApplianceSiblings(page.applianceSlug, page.slug);
  // The booking form's appliance dropdown is populated from servicesList, so the
  // default must be one of those exact titles for it to preselect correctly.
  const applianceService = servicesList.find((s) => s.slug === page.applianceSlug);
  const applianceTitle = applianceService ? applianceService.title : `${page.appliance} Repair`;

  return (
    <div className="service-detail-view">
      <SEO
        title={page.title}
        description={page.description}
        keywords={page.keywords}
        canonicalPath={`/${page.slug}/`}
        image={page.image}
        schemaData={schema}
      />

      <section className="page-header">
        <div className="container">
          <nav className="seo-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services/">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">
              {page.brand} {page.appliance} {SERVICE_CITY}
            </span>
          </nav>
          <h1>{page.h1}</h1>
          <p>{page.tagline}</p>
        </div>
      </section>

      <section className="section container">
        <div className="detail-layout">
          <div className="detail-info">
            <div className="detail-img-box">
              <img
                src={page.image}
                alt={page.imageAlt}
                className="detail-banner"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>

            {/* Non-affiliation notice. Placed high on the page on purpose: it is
                the honest answer to the "authorised service centre" searches
                that bring people here. */}
            <div className="disclosure-note">
              <Info size={18} />
              <p>
                <strong>We are an independent service provider.</strong> Top Cool Service is a
                multi-brand appliance repair company and is not an authorised service centre for{' '}
                {page.brand}, nor affiliated with or endorsed by {page.brand}. If your appliance is
                still under manufacturer warranty, please contact {page.brand} directly using the
                details supplied with the product.
              </p>
            </div>

            <h2>
              {page.brand} {page.appliance} Repair &amp; Service Overview
            </h2>
            {page.overview.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'lead-text' : undefined}>
                {paragraph}
              </p>
            ))}

            <h2>
              Common {page.brand} {page.appliance} Problems We Fix
            </h2>
            <ul className="feature-list problem-list">
              {page.problems.map((problem) => (
                <li key={problem.title} className="problem-item">
                  <CheckCircle size={20} color="#16a34a" />
                  <div>
                    <h3>{problem.title}</h3>
                    <p>{problem.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="service-perks-grid">
              <div className="perk-box">
                <Wrench size={24} color="#0284c7" />
                <h3>Doorstep Service</h3>
                <p>The technician comes to your home, at a slot confirmed with you.</p>
              </div>
              <div className="perk-box">
                <Shield size={24} color="#0284c7" />
                <h3>Warranty on Replaced Parts</h3>
                <p>Up to 90 days of service warranty on the spares we fit.</p>
              </div>
            </div>

            <h2>
              How Our {page.brand} {page.appliance} Service Works
            </h2>
            <ol className="process-list">
              {serviceProcess.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>

            <h2>
              {page.brand} {page.appliance} Service Near Me: How Coverage in {SERVICE_CITY} Works
            </h2>
            <p>
              Searching for &ldquo;{page.brand.toLowerCase()} {page.appliance.toLowerCase()} service
              near me&rdquo; usually means you want someone who can actually reach you. Two honest
              points about how we work: this website does not detect your location, and we do not
              run a walk-in service centre you can carry the appliance to. Bookings are taken for{' '}
              {SERVICE_CITY} and a technician travels to your home.
            </p>

            {PUNE_COVERAGE_AREAS.length > 0 ? (
              <>
                <p>Localities we currently cover:</p>
                <div className="areas-grid coverage-areas-grid">
                  {PUNE_COVERAGE_AREAS.map((area) => (
                    <div key={area} className="area-pill">
                      <MapPin size={16} /> <span>{area}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>
                Because coverage varies by locality and by day, we confirm your area before
                dispatching anyone rather than accepting every booking and leaving you waiting. Tell
                us where you are in {SERVICE_CITY} when you book and you will get a straight answer,
                including a realistic arrival window.
              </p>
            )}

            <p className="coverage-footnote">
              Not sure whether we reach you?{' '}
              <Link to="/contact/">Send us your locality and the appliance model</Link> and we will
              tell you before you commit to anything.
            </p>

            <h2>
              {page.brand} {page.appliance} Repair FAQs
            </h2>
            <div className="faq-list">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="seo-faq-item">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Related Repair Services</h2>
            <p>
              We service the whole {page.brand} home appliance range, and every other major brand in
              the same categories.
            </p>

            {brandSiblings.length > 0 && (
              <>
                <h3>
                  Other {page.brand} appliances we repair in {SERVICE_CITY}
                </h3>
                <div className="brands-scroll">
                  {brandSiblings.map((sibling) => (
                    <Link key={sibling.slug} to={`/${sibling.slug}/`} className="brand-pill">
                      {sibling.brand} {sibling.appliance} service in {SERVICE_CITY}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {applianceSiblings.length > 0 && (
              <>
                <h3>
                  {page.appliance} repair in {SERVICE_CITY} for other brands
                </h3>
                <div className="brands-scroll">
                  {applianceSiblings.map((sibling) => (
                    <Link key={sibling.slug} to={`/${sibling.slug}/`} className="brand-pill">
                      {sibling.brand} {sibling.appliance} repair {SERVICE_CITY}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <h3>More from Top Cool Service</h3>
            <div className="brands-scroll">
              <Link to="/services/" className="brand-pill">
                Every appliance repair service we offer
              </Link>
              <Link to="/faq/" className="brand-pill">
                Repair charges, warranty and booking FAQs
              </Link>
              <Link to="/contact/" className="brand-pill">
                Book a technician
              </Link>
            </div>

            <div className="quick-call-cta">
              <h3>
                Book a {page.brand} {page.appliance} Technician
              </h3>
              <p>
                Speak to our booking desk, or send the model number and error code on WhatsApp for a
                quicker diagnosis.
              </p>
              <div className="hero-actions">
                <a href={`tel:${contactDetails.phoneRaw}`} className="btn btn-call">
                  <Phone size={18} /> Call {contactDetails.phone}
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsappRaw}?text=Hi%20Top%20Cool%20Service%2C%20I%20need%20${encodeURIComponent(
                    `${page.brand} ${page.appliance}`
                  )}%20repair%20in%20${encodeURIComponent(SERVICE_CITY)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>
                Book {page.brand} {page.appliance} Service
              </h3>
              <p className="sidebar-subtext">Technician arrives at your doorstep</p>
              <BookingForm
                defaultService={applianceTitle}
                locationCity={SERVICE_CITY}
                contextLabel={`${page.brand} ${page.appliance} - ${SERVICE_CITY}`}
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
