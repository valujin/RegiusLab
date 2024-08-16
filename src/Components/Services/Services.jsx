import React from 'react';
import { useState } from 'react';
import './Services.scss';

import bullit1 from '../../assets/bullit1.png';
import bullit2 from '../../assets/bullit2.png';
import bullit3 from '../../assets/bullit3.png';
import bullit4 from '../../assets/bullit4.jpg';
import bullit5 from '../../assets/bullit5.jpg';
import arrowDownImg from '../../assets/arrow-down-right.png';
import bullit6 from '../../assets/bullit6.png';

const services_data = [
  {
    title: 'Блокчейн и Web3',
    description: [
      ' Разработка Smart контрактов',
      ' Создание криптобирж и криптообменников',
      'Разработка майнинг пулов',
      'Создание блокчейн / монет с нуля под ключ',
    ],
    image: bullit1,
    link: '/noPage',
  },
  {
    title: 'Автоматизация бизнеса',
    description: [
      'Автоматизация бизнес-процессов',
      'Автоматизация документооборота',
      'Автоматизация производства',
      'Бот для организацией',
      'Автоматизация интернет торговли',
    ],
    image: bullit2,
    link: '/noPage',
  },
  {
    title: 'Telegram боты',
    description: [
      'Информационный бот',
      'Чат–бот',
      'Бот для управления организацией',
      'Боты с искусственным интеллектом',
      'Бот-магазин с возможностью оплаты картой либо криптовалютой',
    ],
    image: bullit3,
    link: '/noPage',
  },
  {
    title: '1С разработка',
    description: [
      'Настройка логики',
      'Оптимизация быстродействия',
      'Разработка модулей и калькуляторов',
      'Автоматизация интернет-торговли',
      'Интеграция с другими информационными системами',
    ],
    image: bullit4,
    link: '/noPage',
  },
  {
    title: 'CMS Magento',
    description: [
      'PWA приложения',
      'Оптимизация и поддержка сайтов на CMS Magento',
      'Разработка публичных и приватных модулей',
      'Разработка систем электронной коммерции',
      'Интеграция с системами ERP',
      'Подключение POS систем',
      'PIM интеграция',
    ],
    image: bullit5,
    link: '/noPage',
  },
  {
    title: 'Битрикс24',
    description: [
      'Автоматизация бизнес процессов',
      'Интеграция с 1С ',
      ' Внедрение и настройка Битрикс24',
      'Поддержка и доработка Битрикс24',
    ],
    image: bullit6,
    link: 'https://b24.regiuslab.by/',
  },
];

export default function Services() {
  const [openService, setOpenService] = useState(null);
  function changeServiceIndex(index) {
    console.log(window.innerWidth);
    if (window.innerWidth < 450) {
      setOpenService(openService === index ? null : index);
    } else return;
  }

  return (
    <div>
      <div id="services" className="services">
        <p className="services__title">Индивидуальная разработка</p>
        <div className="services__bullits">
          {services_data.map(({ title, description, image, link }, index) => (
            <div
              key={index}
              className="services__bullits-item"
              onClick={() => changeServiceIndex(index)}
              style={{
                maxHeight:
                  window.innerWidth <= 450 && openService !== index
                    ? ' 50px'
                    : ' none',
                overflow:
                  window.innerWidth <= 450 && openService !== index
                    ? 'visible'
                    : 'hidden',
                border:
                  window.innerWidth <= 450 && openService === index
                    ? '1px solid #AF7B20'
                    : 'none ',
                boxShadow:
                  window.innerWidth <= 450 && openService !== index
                    ? ' 0px 0px 30px 0px #000000E5'
                    : 'none',
              }}
            >
              <img src={image} className="services__bullit-back" alt="" />
              <div className="services__bullits-mobile-back"></div>

              <div className="services__bullits-item-default">
                <p className="services__item-title">{title}</p>
                <img
                  src={arrowDownImg}
                  className="servises__item-arrow"
                  alt=""
                />
              </div>

              <div
                className="services__item-active"
                style={{
                  opacity:
                    window.innerWidth <= 450 && openService === index
                      ? '1'
                      : '0',
                  visibility:
                    window.innerWidth <= 450 && openService === index
                      ? 'visible'
                      : 'hidden',
                }}
              >
                <img src={image} className="services__back-mobile" alt="" />
                <ul className="services__item-description">
                  {description.map((Element, index) => (
                    <li key={index} className="services__item-li">
                      {Element}
                    </li>
                  ))}
                </ul>
                <a className="services__item-button" href={link}>
                  Подробнее
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
