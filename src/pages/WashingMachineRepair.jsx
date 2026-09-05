import React from 'react';
import ServicePage from './ServicePage';
import { servicesList } from '../data/siteData';

export default function WashingMachineRepair() {
  const service = servicesList.find((s) => s.slug === 'washing-machine-repair');
  return <ServicePage service={service} />;
}