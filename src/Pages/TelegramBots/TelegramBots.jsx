import React from 'react';
import ServiceTemplate from '../../Components/ServiceTemplate/ServiceTemplate';
import serviceDb from '../../data/services.json';

export default function TelegramBots() {
  return (
    <div>
      <ServiceTemplate currentInfo={serviceDb.telegram} />
    </div>
  );
}
