import React from 'react';
import ServicePage from './ServicePage';
import { servicesList } from '../data/siteData';

export default function RefrigeratorRepair() {
  const service = servicesList.find((s) => s.slug === 'refrigerator-repair');
  return <ServicePage service={service} />;
}