import React, { useState, useEffect } from 'react';
import './Cookies.scss';

export default function Cookies() {
  const [cookieVisible, setCookieVisibleState] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => {
        setCookieVisibleState(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookieVisibleState(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <>
      <div className={cookieVisible ? 'cookie active' : 'cookie'}>
        <p className="cookie__text">
          Используя сайт
          <a href="https://regiuslab.by/" className="cookie__regiuslab-link">
            regiuslab.by
          </a>
          , вы даете согласие на использование
          <a href="/cookie-settings" className="cookie__privacy-link">
            файлов cookie
          </a>
          , помогающих нам сделать его удобнее для вас
        </p>
        <button className="cookie__button" onClick={handleAccept}>
          Согласен
        </button>
      </div>
    </>
  );
}
