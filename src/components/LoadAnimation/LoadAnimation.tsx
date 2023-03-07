import React from 'react';
import './LoadAnimation.scss';

export const LoadAnimation = () => {
  return (
    <div className="loadAnimation">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
}