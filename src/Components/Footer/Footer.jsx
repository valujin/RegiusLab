import React from 'react';
import './Footer.scss';
import logoPic from '../../assets/logo.png';
import soc1 from '../../assets/soc1.png';
import soc2 from '../../assets/soc2.png';
import soc3 from '../../assets/soc3.png';
import soc4 from '../../assets/soc4.png';

export default function Footer() {
  return (
    <div className="footer">
      <a href="/" className="footer__logo">
        <img src={logoPic} alt="" className="footer__logo-pic" />
      </a>

      <div className="footer__column">
        <div className="footer__social-med">
          <a href="" className="footer__item-soc">
            <img src={soc1} alt="" className="footer__soc-img" />
          </a>{' '}
          <a href="" className="footer__item-soc">
            <img src={soc2} alt="" className="footer__soc-img" />
          </a>{' '}
          <a href="" className="footer__item-soc">
            <img src={soc3} alt="" className="footer__soc-img" />
          </a>{' '}
          <a href="" className="footer__item-soc">
            <img src={soc4} alt="" className="footer__soc-img" />
          </a>
        </div>

        <a href="tel:+375295756725" className="footer__tel">
          Тел: +375295756725
        </a>
        <a href="" className="footer__link">
          Настройки cookie
        </a>
      </div>
      <div className="footer__column">
        <p className="footer__info">ООО "РЕГИУСЛАБ"</p>
        <p className="footer__info">УНП: 193776565</p>
        <a href="" className="footer__link">
          Условия обслуживания
        </a>
      </div>
      <div className="footer__column">
        <p className="footer__info">
          Юр. адрес: 220083 г.Минск пр.Газеты Правды 9 оф. 5Н
        </p>
        <p className="footer__info">Офис: Янки Мавра 41, посещение 408</p>
        <a href="" className="footer__link">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
}
