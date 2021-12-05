import React from 'react';

import "./IosPage.css";
import { Number } from '../../components/Number';
import arrow from './Arrow.svg';

export const IosPage = () => {
  return (
    <div className="app-page">
      <div className="ios-page__text">
        <Number number={1} className="ios-page__number" />
        <div>Для просмотра видео нажмите на кнопку вверху</div>
        <img className="ios-page__arrow" src={arrow} alt="arrow" />
      </div>
    </div>
  )
}
