import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';

export const CarouselItem = (props) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__icon" src={props.icon} alt="icon" />
      <div className="carousel-item__text" >{props.text}</div>
    </div>
  )
}

export const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1.5,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <Slider {...settings}>
      <CarouselItem
        icon={icon2}
        text="Быстрое переключение между товаром во время просмотра видео"
      />
      <CarouselItem
        icon={icon1}
        text="Покупка товаров из видео в 2-а клика"
      />
      <CarouselItem
        icon={icon3}
        text="Без скачивания приложений"
      />
    </Slider>
  );
}
