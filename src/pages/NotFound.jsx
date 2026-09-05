import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="section container not-found-page text-center">
      <SEO title="404 Page Not Found" description="The page you requested could not be found." />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been relocated.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
        Return to Home
      </Link>
    </div>
  );
}