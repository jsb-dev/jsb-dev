import React from 'react';
import Slogan from '../slogan/slogan.jsx';
import Logo from '../logo/logo.jsx';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';

function MainHeader() {
  const isVertical = CheckOrientation();

  return (
    <figure
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '1rem',
        padding: isVertical ? '8% 1%' : '3%',
      }}
    >
      <div
        style={{
          width: '70%',
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          width: '90%',
        }}
      >
        <Slogan />
      </div>
    </figure>
  );
}

export default MainHeader;
