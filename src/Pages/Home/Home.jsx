import './Home.scss';
import mainBack from '../../assets/main-back.png';
import arrowDownImg from '../../assets/arrow-down-right.png';
import arrowBlack from '../../assets/arrow-down-right-black.png';
import '../../style/fonts/fonts.scss';
import { useState } from 'react';

import bullit1 from '../../assets/bullit1.png';
import bullit2 from '../../assets/bullit2.png';
import bullit3 from '../../assets/bullit3.png';
import bullit4 from '../../assets/bullit4.jpg';
import bullit5 from '../../assets/bullit5.jpg';
import bullit6 from '../../assets/bullit6.png';

import pegasusLeft from '../../assets/PegasusLeft.png';

import Marquee from '../../Components/Marquee/Marquee';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';
import partner7 from '../../assets/partner7.png';
import partner8 from '../../assets/partner8.png';

import bro from '../../assets/bro.png';
// import InputMask from 'react-input-mask';
import FAQ from '../../Components/FAQ/FAQ';

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [thanks, setThanks] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch('https://b24-lead.valuxin.workers.dev', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setThanks(true);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    const digits = value.replace(/\D/g, '');

    setPhone(`+${digits}`);
  };

  return (
    <div>
      <div className="main">
        <img src={mainBack} className="main__back" alt="" />

        <div className="main__content">
          <p className="main__company-name">REGIUSLAB</p>
          <h1 className="main__title">широкий спектр IT услуг</h1>
          <a href="#form" className="main__contact">
            <p className="main__contact-link">СВЯЗАТЬСЯ</p>
            <img src={arrowDownImg} alt="" className="main__contact-img" />
            <img src={arrowBlack} className="main__contact-img-black" alt="" />
          </a>
        </div>
      </div>
      <div className="services">
        <p className="services__title">Индивидуальная разработка</p>
        <div className="services__bullits">
          <div className="services__bullits-item  ">
            <img src={bullit1} className="services__bullit-back" alt="" />
            <div className="services__bullits-mobile-back"></div>

            <div className="services__bullits-item-default">
              <p className="services__item-title">Блокчейн и Web3</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <img src={bullit1} className="services__back-mobile" alt="" />
              <ul className="services__item-description">
                <li className="services__item-li">
                  Разработка Smart контрактов
                </li>
                <li className="services__item-li">
                  Создание криптобирж и криптообменников
                </li>
                <li className="services__item-li">Разработка майнинг пулов</li>
                <li className="services__item-li">
                  Создание блокчейн / монет с нуля под ключ
                </li>
              </ul>
              <a className="services__item-button" href="#form">
                Подробнее
              </a>
            </div>
          </div>

          <div className="services__bullits-item  ">
            <img src={bullit2} className="services__bullit-back" alt="" />
            <div className="services__bullits-mobile-back"></div>
            <div className="services__bullits-item-default">
              <p className="services__item-title">Автоматизация бизнеса</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <img src={bullit2} className="services__back-mobile" alt="" />

              <ul className="services__item-description">
                <li className="services__item-li">
                  Автоматизация бизнес-процессов
                </li>
                <li className="services__item-li">
                  Автоматизация документооборота
                </li>
                <li className="services__item-li">
                  Автоматизация производства
                </li>
                <li className="services__item-li">Бот для организацией</li>
                <li className="services__item-li">
                  Автоматизация интернет торговли
                </li>
              </ul>
              <a className="services__item-button" href="#form">
                Подробнее
              </a>
            </div>
          </div>

          <div className="services__bullits-item   ">
            <img src={bullit3} className="services__bullit-back" alt="" />
            <div className="services__bullits-mobile-back"></div>
            <div className="services__bullits-item-default">
              <p className="services__item-title">Telegram боты</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <img src={bullit3} className="services__back-mobile" alt="" />

              <ul className="services__item-description">
                <li className="services__item-li">Информационный бот</li>
                <li className="services__item-li">Чат–бот</li>
                <li className="services__item-li">
                  Бот для управления организацией
                </li>
                <li className="services__item-li">
                  Боты с искусственным интеллектом
                </li>
                <li className="services__item-li">
                  Бот-магазин с возможностью оплаты картой либо криптовалютой
                </li>
              </ul>
              <a className="services__item-button" href="#form">
                Подробнее
              </a>
            </div>
          </div>

          <div className="services__bullits-item  ">
            <img src={bullit4} className="services__bullit-back" alt="" />
            <div className="services__bullits-mobile-back"></div>
            <div className="services__bullits-item-default">
              <p className="services__item-title">1С разработка</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <img src={bullit4} className="services__back-mobile" alt="" />

              <ul className="services__item-description">
                <li className="services__item-li">Настройка логики </li>
                <li className="services__item-li">
                  Оптимизация быстродействия
                </li>
                <li className="services__item-li">
                  Разработка модулей и калькуляторов
                </li>
                <li className="services__item-li">
                  Автоматизация интернет-торговли
                </li>
                <li className="services__item-li">
                  Интеграция с другими информационными системами
                </li>
              </ul>
              <a className="services__item-button" href="#form">
                Подробнее
              </a>
            </div>
          </div>

          <div className="services__bullits-item   ">
            <img src={bullit5} className="services__bullit-back" alt="" />
            <div className="services__bullits-mobile-back"></div>

            <div className="services__bullits-item-default">
              <p className="services__item-title">CMS Magento</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <img src={bullit5} className="services__back-mobile" alt="" />

              <ul className="services__item-description">
                <li className="services__item-li">PWA приложения</li>
                <li className="services__item-li">
                  Оптимизация и поддержка сайтов на CMS Magento
                </li>
                <li className="services__item-li">
                  Разработка публичных и приватных модулей
                </li>
                <li className="services__item-li">
                  Разработка систем электронной коммерции
                </li>
                <li className="services__item-li">
                  Интеграция с системами ERP
                </li>
                <li className="services__item-li">Подключение POS систем</li>
                <li className="services__item-li">PIM интеграция</li>
              </ul>
              <a className="services__item-button" href="#form">
                Подробнее
              </a>
            </div>
          </div>

          <div className="services__bullits-item   ">
            <img src={bullit6} className="services__bullit-back" alt="" />
            <div className="services__bullits-mobile-back"></div>

            <div className="services__bullits-item-default">
              <p className="services__item-title">Битрикс24</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <img src={bullit6} className="services__back-mobile" alt="" />

              <ul className="services__item-description">
                <li className="services__item-li">
                  Автоматизация бизнес процессов
                </li>
                <li className="services__item-li">Интеграция с 1С </li>
                <li className="services__item-li">
                  Внедрение и настройка Битрикс24
                </li>
                <li className="services__item-li">
                  Поддержка и доработка Битрикс24
                </li>
              </ul>
              <a className="services__item-button" href="#form">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <div className="about">
        <img src={pegasusLeft} alt="  " className="about__pegas-left" />
        <img src={pegasusLeft} alt="  " className="about__pegas-right" />

        <div className="about__container">
          <a href="#" className="about__button">
            <p className="about__button-text">О нас</p>
            <img src={arrowDownImg} alt="" className="about__button-img" />
            <img src={arrowBlack} className="about__button-black" alt="" />
          </a>

          <p className="about__description">
            Мы — команда высококвалифицированных профессионалов. <br />
            <br /> Наша цель — создавать индивидуальные решения для каждого
            клиента. Мы не просто автоматизируем бизнес-процессы, но и находим
            оптимальные пути для роста и развития вашего бизнеса. Наш широкий
            спектр услуг позволяет реализовать проекты под любые цели. Выбирайте
            нас, чтобы вместе достичь новых высот!
          </p>
        </div>
      </div>
      <div className="partners">
        <div className="partners__container">
          <img src={partner1} className="partners__item" alt="" />
          <img src={partner2} className="partners__item" alt="" />
          <img src={partner3} className="partners__item" alt="" />
          <img src={partner4} className="partners__item" alt="" />
          <img src={partner5} className="partners__item" alt="" />
          <img src={partner6} className="partners__item" alt="" />
          <img src={partner7} className="partners__item" alt="" />
          <img src={partner8} className="partners__item" alt="" />
        </div>
      </div>
      <div id="form" className="consultation">
        <div className="consultation__shadow"></div>
        <div className="consultation__container">
          <img src={bro} className="consultation__img" alt="" />
          <div className="consultation__right">
            <div
              style={{
                opacity: thanks === true ? '1' : '0',
                visibility: thanks === true ? 'visible' : 'hidden',
              }}
              className="consultation__thanks"
            >
              <p className="consultation__title consultation__title-thank">
                Спасибо за вашу заявку, мы свяжемся с вами в ближайшее время!
              </p>
            </div>

            <p
              style={{
                opacity: thanks === false ? '1' : '0',
                visibility: thanks === false ? 'visible' : 'hidden',
              }}
              className="consultation__title"
            >
              Запросить консультацию
            </p>
            <form
              style={{
                opacity: thanks === false ? '1' : '0',
                visibility: thanks === false ? 'visible' : 'hidden',
              }}
              onSubmit={handleSubmit}
              className="consultation__form"
            >
              <input
                required
                type="text"
                className="consultation__name"
                autoComplete="none"
                placeholder="Имя"
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
                value={phone}
                type="tel"
                autoComplete="none"
                className="consultation__tel"
                placeholder="+375 (__) ___-__-__"
                // onChange={(e) => {
                //   setPhone(e.target.value);
                // }}
                onChange={handleChange}
              />
              <input
                required
                type="email"
                className="consultation__email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="none"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                placeholder="Электронная почта"
              />

              <input
                type="submit"
                className="consultation__submit"
                value="Отправить"
              />
            </form>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
