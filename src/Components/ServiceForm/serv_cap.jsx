import React, { useState, useEffect, useRef } from 'react';
import './ServiceForm.scss';
import closeCross from '../../assets/cross.png';

export default function ServiceForm({
  modal,
  setModal,
  setIsScrollDisabled,
  serviceName,
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [thanks, setThanks] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const captchaRef = useRef(null);


  const TURNSTILE_SITE_KEY = '0x4AAAAAAAmbqmpfLAfHC-Xs';

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window.turnstile && captchaRef.current) {
        window.turnstile.render(captchaRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => {
            setTurnstileToken(token);
            setIsVerified(true); 
          },
          'error-callback': () => {
            setTurnstileToken(null);
            setIsVerified(false); 

          },
        });
        clearInterval(intervalId); 

      }
    }, 500);

    return () => clearInterval(intervalId); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Пожалуйста, завершите проверку CAPTCHA.');
      return;
    }
  
    const data = {
      'cf-turnstile-response': turnstileToken,
      name,
      phone,
      email,
      comment,
      serviceName,
    };
  
    try {
      // console.log('Attempting to submit:', data);
      const response = await fetch('https://turnstile.regiuslab.by/v0/captcha', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // console.log('Response Status:', response.status);
      
      if (response.status === 200) {
        setThanks(true);
        console.log('Форма успешно отправлена');
      } else {
        throw new Error('Проверка Turnstile не удалась');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const digits = value.replace(/\D/g, '');
    setPhone(`+${digits}`);
  };

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (thanks) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setThanks(false);
            setModal(false);
            setIsScrollDisabled(false);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [thanks]);

  return (
    <div
      onClick={() => {
        setModal(false);
        setIsScrollDisabled(false);
      }}
      className="service-form"
    >
      <div
        style={{
          opacity: thanks ? '1' : '0',
          visibility: thanks ? 'visible' : 'hidden',
        }}
        className="consultation__thanks"
      >
        <p className="consultation__title consultation__title-thank">
          Спасибо за вашу заявку, мы свяжемся с вами в ближайшее время!
        </p>
        {thanks && <p className="consultation__timer"> {countdown} </p>}
      </div>
      <form
        onClick={(event) => event.stopPropagation()}
        className="service-form__form"
        style={{
          opacity: !thanks ? '1' : '0',
          visibility: !thanks ? 'visible' : 'hidden',
        }}
        onSubmit={handleSubmit}
      >
        <img
          onClick={() => {
            setModal(false);
            setIsScrollDisabled(false);
          }}
          src={closeCross}
          className="service-form__close-cross"
          alt=""
        />
        <p className="service-form__title">
          Заполните форму и мы свяжемся с вами в ближайшее время!
        </p>
        <input
          required
          type="text"
          className="service-form__name"
          name="name"
          placeholder="*Имя"
          value={name}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[A-Za-zА-Яа-яЁё\s]*$/.test(value)) {
              setName(value);
            }
          }}
        />
        <input
          required
          type="tel"
          name="phone"
          className="service-form__tel"
          placeholder="*+375 (__) ___-__-__"
          value={phone}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          className="service-form__email"
          name="email"
          placeholder="*Электронная почта"
          value={email}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              document.querySelector('.service-form__comment').focus();
            }
          }}
        />
        <textarea
          type="text"
          className="service-form__comment"
          placeholder="Комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <label className="consent-checkbox">
          <input required type="checkbox" id="consent" name="consent" />
          <span>
            Нажимая на кнопку "Отправить", я даю свое согласие на обработку моих
            персональных данных для получения обратной связи в соответствии с
            <a className="consent-checkbox-link" href="/privacy">
              Политикой обработки персональных данных
            </a>
          </span>
        </label>

        {/* Turnstile CAPTCHA */}
        <div ref={captchaRef} className="turnstile-captcha"></div>

        <input
          type="submit"
          className="service-form__submit"
          value="Отправить"
          disabled={!isVerified}
        />
      </form>
    </div>
  );
}
