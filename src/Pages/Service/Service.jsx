import React, { useState, useEffect } from 'react';
import './Service.scss';
import serviceDb from '../../data/services.json';
import lamp from '../../assets/lamp.png';

export default function Service({
  page,
  setPage,
  serviceDb,
  activeIndex,
  setActiveIndex,
}) {
  function scrollTop() {
    window.scrollTo({ top: 0 });
  }

  const services = [
    serviceDb.blockchain,
    serviceDb.automatization,
    serviceDb.telegram,
    serviceDb['1Cdev'],
    serviceDb.CMSMagento,
    serviceDb.Bitrix24,
  ];
  const handleTabClick = (index, service) => {
    setActiveIndex(index);
    setPage(service);
    localStorage.setItem('activeServiceIndex', index);
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    const savedIndex = localStorage.getItem('activeServiceIndex');
    if (savedIndex) {
      setActiveIndex(Number(savedIndex));
      setPage(services[Number(savedIndex)]);
    } else {
      setPage(services[0]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('currentPagePart', JSON.stringify(page));
  }, [page]);
  return (
    <div className="service">
      <div
        className={
          page === serviceDb['1Cdev']
            ? 'service__main service__main-bottom'
            : page === serviceDb.CMSMagento
            ? 'service__main service__main-center'
            : 'service__main'
        }
        style={{
          backgroundImage: `url(${page['main-back-img']}) `,
        }}
      >
        <div className="service__main-back"></div>

        <div className="service__main-container">
          <p className="service__main-id">#{page.id}</p>
          <h1 className="service__main-title">{page['main-title']}</h1>
          <p className="service__main-description">
            {page['main-description']}
          </p>
          <div className="service__main-bullit-wrapper">
            {page['main-bullits'].map((bullet, index) => (
              <div className="service__main-bullit" key={index}>
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tabs">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => {
              handleTabClick(index, service);
            }}
            className={
              activeIndex === index ? 'tabs__item active' : 'tabs__item'
            }
          >
            {service['main-title']}
          </div>
        ))}
      </div>

      <div className="theory">
        <p className="theory__title"> {page['what-is-title']}</p>
        <div className="theory__wrapper">
          <img className="theory__lamp" src={lamp} alt="" />
          <div className="theory__text">
            {page['what-is-description'].map((definition, index) => (
              <p key={index} className="theory__item">
                {definition}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="role">
        <div className="role__top">
          <div className="role__text">
            <p className="role__title">{page['role-title']}</p>
            <div className="role__definition">
              <img src={lamp} className="role__lamp" alt="" />
              <p className="role__definition-text">
                {page['role-description']}
              </p>
            </div>
          </div>
          <a href="/#form" className="role__button">
            Связаться
          </a>
        </div>

        <div className="role__wrapper">
          {page['role-wrapper'].map((role, index) => (
            <div className="role__item" key={index}>
              <img
                src={role['role-item-img']}
                className="role__item-img"
                alt=""
              />
              <p className="role__item-text">{role['role-item-title']}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="our-services">
        <p className="our-services__title">Наши услуги</p>
        <div className="our-services__wrapper">
          {page.services.map((service, index) => (
            <div className="our-services__item" key={index}>
              <div className="our-services__item-content">
                <div className="our-services__item-content-container">
                  <p className="our-services__item-content-num">0{index + 1}</p>
                  <div className="our-services__item-text">
                    <p className="our-services__item-content-title">
                      {service.title}
                    </p>
                    <div className="our-services__item-content-line"></div>
                    <p className="our-services__item-content-description">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={service.img}
                className="our-services__item-img"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="why-auto">
        <div className="why-auto__left">
          <img src={page['why-need-img']} className="why-auto__img" alt="" />
          <p className="why-auto__title">{page['why-need']}</p>
        </div>
        <div className="why-auto__wrapper">
          {page['why-need-wrapper'].map((item, index) => (
            <div className="why-auto__item" key={index}>
              <p className="why-auto__text">
                <span className="why-auto__item-title">{item.title} </span>
                <span className="why-auto__description">
                  {item.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="why-us">
        <p className="why-us__title">Почему выбирают нас?</p>
        <div className="why-us__content">
          <div className="why-us__wrapper">
            {page['why-us-wrapper'].map((item, index) => (
              <div className="why-us__item" key={index}>
                <p className="why-us__item-title">{item.title}</p>
                <p className="why-us__description">{item.description}</p>
                <div className="why-us__line"></div>
              </div>
            ))}
          </div>
          <img src={page['why-us-img']} className="why-us__img" alt="" />
        </div>
      </div>
    </div>
  );
}
