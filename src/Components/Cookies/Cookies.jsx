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
  const handleOnlyNecessary = () => {
    setCookieVisibleState(false);
    localStorage.setItem('onlyNecessary', 'true');
    
    // Удаляем Facebook Pixel
    if (window.fbq) {
      window.fbq = function () {
        console.log('Facebook Pixel отключен');
      };
    }
  
    // Отключаем Yandex.Metrika
    if (window.ym) {
      window.ym = function () {
        console.log('Yandex.Metrika отключена');
      };
    }
  
    // Убираем загруженные скрипты
    const yandexScript = document.querySelector('script[src*="mc.yandex.ru"]');
    if (yandexScript) yandexScript.remove();
  
    const facebookScript = document.querySelector('script[src*="facebook.net"]');
    if (facebookScript) facebookScript.remove();
  
    // Удаляем <noscript> для метрик
    document.querySelectorAll('noscript').forEach((el) => el.remove());
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
        <div className="cookie_wrapper_buttons">
        <button className="cookie__button" onClick={handleAccept}>
          Согласен
        </button>
        <button className="cookie__button" onClick={handleOnlyNecessary}>
  Только необходимые
</button>
</div>
      </div>
    </>
  );
}
