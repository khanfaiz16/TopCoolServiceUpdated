import React from 'react';
import ServicePage from './ServicePage';
import { servicesList } from '../data/siteData';

export default function MicrowaveRepair() {
  const service = servicesList.find((s) => s.slug === 'microwave-repair');
  return <ServicePage service={service} />;
}