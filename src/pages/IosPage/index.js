import React from 'react';

import "./IosPage.css";
import { Number } from '../../components/Number';
import arrow from './Arrow.svg';
import { Content } from '../../components/Content';

export const IosPage = () => {
  return (
    <div className="app-page">
      <div className="ios-page__text">
        <div className="ios-page__number">
         <Number number={1} />
        </div>
        <div>Для просмотра видео нажмите на кнопку вверху</div>
        <img className="ios-page__arrow" src={arrow} alt="arrow" />
      </div>
      <Content />
    </div>
  )
}
