import React from 'react';
import '../../style/Rules.scss';

export default function Privacy() {
  return (
    <div className="rules">
      <p className="rules__title  ">Политика конфиденциальности</p>
             <iframe className="w-full h-screen" src="/privacy.pdf" frameborder="0"></iframe>
    </div>
  );
}
