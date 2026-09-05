import React from 'react';
import ServicePage from './ServicePage';
import { servicesList } from '../data/siteData';

export default function DryerRepair() {
  const service = servicesList.find((s) => s.slug === 'dryer-repair');
  return <ServicePage service={service} />;
}