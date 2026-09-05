import React from 'react';
import ServicePage from './ServicePage';
import { servicesList } from '../data/siteData';

export default function DishwasherRepair() {
  const service = servicesList.find((s) => s.slug === 'dishwasher-repair');
  return <ServicePage service={service} />;
}