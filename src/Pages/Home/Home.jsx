import './Home.scss';
import mainBack from '../../assets/main-back.png';
import arrowDownImg from '../../assets/arrow-down-right.png';
import arrowBlack from '../../assets/arrow-down-right-black.png';
import '../../style/fonts/fonts.scss';

import bullit1 from '../../assets/bullit1.png';
import bullit2 from '../../assets/bullit2.png';
import bullit3 from '../../assets/bullit3.png';
import bullit4 from '../../assets/bullit4.jpg';
import bullit5 from '../../assets/bullit5.jpg';
import bullit6Robot from '../../assets/bullit6Robot.png';

import pegasusLeft from '../../assets/PegasusLeft.png';
import pegasusRight from '../../assets/PegasusRight.png';

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
import FAQ from '../../Components/FAQ/FAQ';

export default function Header() {
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

            <div className="services__bullits-item-default">
              <p className="services__item-title">Блокчейн и Web3</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <ul className="services__item-description">
                <li className="services__item-li">
                  Бот-магазин с возможностью оплаты картой либо криптовалютой
                </li>
                <li className="services__item-li">Информационный бот</li>
                <li className="services__item-li">Чат–бот</li>
                <li className="services__item-li">
                  Бот для управления организацией
                </li>
                <li className="services__item-li">
                  Боты с искусственным интеллектом
                </li>
              </ul>
              <button className="services__item-button">Подробнее</button>
            </div>
          </div>

          <div className="services__bullits-item  ">
            <img src={bullit2} className="services__bullit-back" alt="" />
            <div className="services__bullits-item-default">
              <p className="services__item-title">Автоматизация бизнеса</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <ul className="services__item-description">
                <li className="services__item-li">
                  Бот-магазин с возможностью оплаты картой либо криптовалютой
                </li>
                <li className="services__item-li">Информационный бот</li>
                <li className="services__item-li">Чат–бот</li>
                <li className="services__item-li">
                  Бот для управления организацией
                </li>
                <li className="services__item-li">
                  Боты с искусственным интеллектом
                </li>
              </ul>
              <button className="services__item-button">Подробнее</button>
            </div>
          </div>

          <div className="services__bullits-item  ">
            <img src={bullit3} className="services__bullit-back" alt="" />
            <div className="services__bullits-item-default">
              <p className="services__item-title">Telegram боты</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <ul className="services__item-description">
                <li className="services__item-li">
                  Бот-магазин с возможностью оплаты картой либо криптовалютой
                </li>
                <li className="services__item-li">Информационный бот</li>
                <li className="services__item-li">Чат–бот</li>
                <li className="services__item-li">
                  Бот для управления организацией
                </li>
                <li className="services__item-li">
                  Боты с искусственным интеллектом
                </li>
              </ul>
              <button className="services__item-button">Подробнее</button>
            </div>
          </div>

          <div className="services__bullits-item  ">
            <img src={bullit4} className="services__bullit-back" alt="" />
            <div className="services__bullits-item-default">
              <p className="services__item-title">1С разработка</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <ul className="services__item-description">
                <li className="services__item-li">
                  Бот-магазин с возможностью оплаты картой либо криптовалютой
                </li>
                <li className="services__item-li">Информационный бот</li>
                <li className="services__item-li">Чат–бот</li>
                <li className="services__item-li">
                  Бот для управления организацией
                </li>
                <li className="services__item-li">
                  Боты с искусственным интеллектом
                </li>
              </ul>
              <button className="services__item-button">Подробнее</button>
            </div>
          </div>

          <div className="services__bullits-item  ">
            <img src={bullit5} className="services__bullit-back" alt="" />

            <div className="services__bullits-item-default">
              <p className="services__item-title">CMS Magento</p>
              <img src={arrowDownImg} className="servises__item-arrow" alt="" />
            </div>

            <div className="services__item-active">
              <ul className="services__item-description">
                <li className="services__item-li">
                  Бот-магазин с возможностью оплаты картой либо криптовалютой
                </li>
                <li className="services__item-li">Информационный бот</li>
                <li className="services__item-li">Чат–бот</li>
                <li className="services__item-li">
                  Бот для управления организацией
                </li>
                <li className="services__item-li">
                  Боты с искусственным интеллектом
                </li>
              </ul>
              <button className="services__item-button">Подробнее</button>
            </div>
          </div>

          <img src={bullit6Robot} className="services__robot-img" alt="" />
        </div>
      </div>
      <Marquee />
      <div className="about">
        <img src={pegasusLeft} alt="  " className="about__pegas-left" />
        <img src={pegasusRight} alt="  " className="about__pegas-right" />

        <div className="about__container">
          <a href="#" className="about__button">
            <p className="about__button-text">О нас</p>
            <img src={arrowDownImg} alt="" className="about__button-img" />
            <img src={arrowBlack} className="about__button-black" alt="" />
          </a>

          <p className="about__description">
            Мы — команда высококвалифицированных профессионалов. Чья цель —
            создавать индивидуальные решения для каждого клиента. Мы не просто
            автоматизируем бизнес-процессы, но и находим оптимальные пути для
            роста и развития вашего бизнеса. Наш широкий спектр услуг позволяет
            реализовать проекты под любые цели. Выбирайте нас, чтобы вместе
            достичь новых высот!
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
            <p className="consultation__title">Запросить консультацию</p>
            <form className="consultation__form">
              <input
                type="text"
                className="consultation__name"
                autoComplete="none"
                placeholder="Имя"
              />
              <input
                type="tel"
                autoComplete="none"
                className="consultation__tel"
                placeholder="Телефон"
              />
              <input
                type="email"
                className="consultation__email"
                autoComplete="none"
                placeholder="Электронная почта"
              />

              <input
                type="submit"
                className="consultation__submit"
                value="Отправить"
                autoComplete="none"
              />
            </form>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
