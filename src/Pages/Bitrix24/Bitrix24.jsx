import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate/ServiceTemplate';
import serviceDb from '../../data/services.json';

export default function Bitrix24() {
  return (
    <div>
      <ServiceTemplate currentInfo={serviceDb.Bitrix24} />
    </div>
  );
}
