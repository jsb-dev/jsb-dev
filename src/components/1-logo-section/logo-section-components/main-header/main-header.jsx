import React from 'react';
import Slogan from '../slogan/slogan.jsx';
import Logo from '../logo/logo.jsx';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';
import './main-header-styles.css';

function MainHeader() {
  const isVertical = CheckOrientation();

  return (
    <figure className={`container ${isVertical ? 'vertical' : ''}`}>
      <div className="logo">
        <Logo />
      </div>
      <div className="slogan">
        <Slogan />
      </div>
    </figure>
  );
}

export default MainHeader;
