import React from 'react';

import ServiceNewTemplate from '../../Components/ServiceNewTemplate/ServiceNewTemplate';
import serviceDb from '../../data/services.json';

export default function SitesDev() {
 

  return (

    <><ServiceNewTemplate currentInfo={serviceDb.SitesDev}/></>
    
  );
}
