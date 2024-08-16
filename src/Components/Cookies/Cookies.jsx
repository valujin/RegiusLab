import React, { useState, useEffect } from 'react';
import './Cookies.scss';

export default function Cookies() {
  const [cookieVisible, setCookieVisibleState] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли флаг в localStorage
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
      {cookieVisible && (
        <div className="cookie">
          <p className="cookie__text">
            Наш сайт использует файлы cookie, чтобы улучшить работу сайта,
            повысить его эффективность и удобство. Продолжая использовать сайт
            <a href="https://regiuslab.by/" className="cookie__regiuslab-link">
              regiuslab.by
            </a>
            , вы соглашаетесь c
            <a href="" className="cookie__privacy-link">
              политикой
            </a>
            их применения.
          </p>
          <button className="cookie__button" onClick={handleAccept}>
            Согласен
          </button>
        </div>
      )}
    </>
  );
}
