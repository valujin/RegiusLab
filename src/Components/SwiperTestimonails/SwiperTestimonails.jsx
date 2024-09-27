import React from "react";
import { useState } from "react";
import {  EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimolail_data from "../../data/testimonails.json";
import arrow from '../../assets/arrow-slider.png'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./SwiperTestimonails.scss";
export default function SwiperTestimonails() {

  return (
    <div className="swiper_outer">
       <p className="title testimonails__title services__title">отзывы наших клиентов</p>
      <Swiper
        effect={"slide"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={window.innerWidth < 1200 ? 1 : 2}
        spaceBetween={50}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 0,
          slideShadows: true,
        }}
        navigation={true}
   
        modules={[EffectCoverflow,  Navigation]}
        className="mySwiper"
      >
        
        {testimolail_data.map(({img, name, profession, description}, index) => (
          <SwiperSlide key={index} className="init_container">
            <img src={img} className="swiper__img"/>
            <p className="swiper__name">{name}</p>
            <p className="swiper__prof">{profession}</p>
            <p className="swiper__description">{description}</p>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
