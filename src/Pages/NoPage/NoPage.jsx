import React, { useState } from 'react';
import './NoPage.scss';
import ServiceForm from '../../Components/ServiceForm/ServiceForm';

export default function NoPage() {
  const [modal, setModal] = useState(false);

  return (
    <div className="no-page">
      {/* <button onClick={() => setModal(true)}>form</button>
      {modal && <ServiceForm modal={modal} setModal={setModal} />} */}
    </div>
  );
}
