import React, { useEffect, useRef, useState } from 'react';
import LogoImg from '../../../../assets/images/logo-full.png';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';
import './logo-styles.css';

function Logo() {
  const isVertical = CheckOrientation();
  const [isVisible, setIsVisible] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <figure ref={logoRef} className={`Logo ${isVisible ? 'visible' : ''}`}>
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
