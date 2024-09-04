import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate/ServiceTemplate';
import serviceDb from '../../data/services.json';

export default function Automatization() {
  return (
    <div>
      <ServiceTemplate currentInfo={serviceDb.automatization} />
    </div>
  );
}
