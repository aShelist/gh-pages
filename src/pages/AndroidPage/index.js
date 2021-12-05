import React from 'react';

import './AndroidPage.css';
import { Carousel } from '../../components/Carousel';
import background from '../../components/App/line.svg';

export const AndroidPage = () => {
  return (
    <div className="app-page" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <h3 className="content__text">Новый способ совершать покупки не отрываясь от любимых видео!</h3>
        <button className="content__btn" onClick={() => window.location.href = "https://livecommerceservice.page.link/cooper"}>Попробовать</button>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  )
}
