import React from 'react';
import { useEffect } from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate/ServiceTemplate';
import serviceDb from '../../data/services.json';

export default function Automatization() {
  useEffect(() => {
    window.fbq('track', 'ViewContent');
  }, []);
  return (
    <div>
      <ServiceTemplate currentInfo={serviceDb.automatization} />
    </div>
  );
}
