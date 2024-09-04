import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate/ServiceTemplate';
import serviceDb from '../../data/services.json';

export default function OneCDev() {
  return (
    <div>
      <ServiceTemplate currentInfo={serviceDb['1Cdev']} />
    </div>
  );
}
