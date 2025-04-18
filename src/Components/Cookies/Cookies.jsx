import React, { useState, useEffect } from 'react';
import './Cookies.scss';

export default function Cookies() {
  const [cookieVisible, setCookieVisibleState] = useState(false);
  const [settingsVisible, setSettingsVisibleState] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    functionality: false,
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    const hasRefusedCookies = localStorage.getItem('cookiesRefused');

    if (savedPreferences || hasAcceptedCookies || hasRefusedCookies) {
      // Load preferences if available
      if (savedPreferences) {
        const parsedPreferences = JSON.parse(savedPreferences);
        setPreferences(parsedPreferences);
        activateCookies(parsedPreferences);
      }
      return; // Do not show the cookie banner
    }

    // Show cookie banner if no prior decision
    const timer = setTimeout(() => {
      setCookieVisibleState(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    const allPreferences = {
      analytics: true,
      marketing: true,
      functionality: true,
    };
    setCookieVisibleState(false);
    setPreferences(allPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    activateCookies(allPreferences);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleRefuse = () => {
    setCookieVisibleState(false);
    localStorage.setItem('cookiesRefused', 'true');
    deactivateCookies();
  };

  const handleSettings = () => {
    setCookieVisibleState(false);
    setSettingsVisibleState(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    activateCookies(preferences);
    setSettingsVisibleState(false);
    localStorage.setItem('cookiesAccepted', 'true'); // Mark as accepted if preferences are saved
  };

  const handlePreferenceChange = (type, value) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const activateCookies = (preferences) => {
    if (preferences.analytics) {
      // Activate analytics cookies
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
      ym(98405652, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true,
      });
    }

    if (preferences.marketing) {
      // Activate marketing cookies
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1943877312726905');
      fbq('track', 'PageView');
    }

    if (preferences.functionality) {
      console.log('Functionality cookies activated.');
    }
  };

  const deactivateCookies = () => {
    if (window.fbq) {
      window.fbq = function () {
        console.log('Facebook Pixel отключен');
      };
    }
    if (window.ym) {
      window.ym = function () {
        console.log('Yandex.Metrika отключена');
      };
    }

    const yandexScript = document.querySelector('script[src*="mc.yandex.ru"]');
    if (yandexScript) yandexScript.remove();

    const facebookScript = document.querySelector('script[src*="facebook.net"]');
    if (facebookScript) facebookScript.remove();

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
          <button className="cookie__button" onClick={handleRefuse}>
            Отказаться
          </button>
          <button className="cookie__button" onClick={handleSettings}>
            Настройки
          </button>
        </div>
      </div>

      {settingsVisible && (
        <div className="popup">
          <div className="popup__content">
            <h2>Настройки файлов cookie</h2>
            <div className="popup__setting">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    handlePreferenceChange('analytics', e.target.checked)
                  }
                />
                Аналитические файлы cookie
              </label>
            </div>
            <div className="popup__setting">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    handlePreferenceChange('marketing', e.target.checked)
                  }
                />
                Маркетинговые файлы cookie
              </label>
            </div>
            <div className="popup__setting">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.functionality}
                  onChange={(e) =>
                    handlePreferenceChange('functionality', e.target.checked)
                  }
                />
                Функциональные файлы cookie
              </label>
            </div>
            <button className="popup__button button" onClick={handleSavePreferences}>
              Сохранить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
