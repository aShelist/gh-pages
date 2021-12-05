import React from 'react';
import { Number } from '../Number';

import './Content.css';
import image from './Clip.png';
import arrow from './arrow.svg';
import arrowMobile from './arrowMobile.svg';

export const Content = () => {
  return (
    <div className="content-block">
      <div className="ios-page__text ios-page__text_content">
        <div className="ios-page__number">
          <Number number={2} />
        </div>
        <div>У вас откроется снизу окно, в котором нажмите на “Открыть”</div>
      </div>
      <div className="content-block__image">
        <img src={image}  className="content-block__img" alt="demo" />
        <img src={arrow} className="content-block__image_arrow content-block__image_arrow_table" alt="arrow" />
        <img src={arrowMobile} className="content-block__image_arrow content-block__image_arrow_mobile" alt="arrow" />
      </div>

    </div>
  )
}
