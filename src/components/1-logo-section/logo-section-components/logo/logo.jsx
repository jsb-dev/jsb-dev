import React from 'react';
import LogoImg from '../../../../assets/images/logo-full.png';

function Logo() {
  return (
    <figure>
      <img
        src={LogoImg}
        alt="JSBDev Logo"
        style={{
          width: '100%',
        }}
      />
    </figure>
  );
}

export default Logo;
