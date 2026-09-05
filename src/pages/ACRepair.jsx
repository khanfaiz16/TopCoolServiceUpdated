import React from 'react';
import ServicePage from './ServicePage';
import { servicesList } from '../data/siteData';

export default function ACRepair() {
  const service = servicesList.find((s) => s.slug === 'ac-repair');
  return <ServicePage service={service} />;
}