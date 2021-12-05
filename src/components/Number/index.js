import React from 'react';
import './Number.css';

export const Number = (props) => {
  return (
    <div className={`number ${props.className}`}>{props.number}</div>
  )
}
