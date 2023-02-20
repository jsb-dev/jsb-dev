import React, { useEffect, useState } from 'react';
import './slogan-styles.css';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';

function Slogan() {
  const isVertical = CheckOrientation();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`slogan-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="center-box">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <p
            style={{
              fontSize: isVertical ? 'max(1rem, 4vw)' : '1rem',
              color: 'white',
              padding: 'min(5%,1rem)',
              width: isVertical ? '70vw' : '50vw',
              minWidth: 250,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              letterSpacing: '0.2rem',
              wordSpacing: '0.4rem',
              margin: 0,
            }}
          >
            The way you see it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
