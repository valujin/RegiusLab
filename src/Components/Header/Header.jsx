import React from 'react';
import logoPic from '../../assets/logo.png';
import './Header.scss';
// import '../../style/fonts/fonts.scss';
export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <a href="/" className="header__logo ">
          <img src={logoPic} alt="" className="header__logo-img" />
        </a>
        <div className="header__nav">
          <a href="#" className="header__link">
            О нас
          </a>
          <a href="#" className="header__link">
            Услуги
          </a>
          <a href="#" className="header__link">
            Обратная связь
          </a>
          <a href="#" className="header__link">
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
}
