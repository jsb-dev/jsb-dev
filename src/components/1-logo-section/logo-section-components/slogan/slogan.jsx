import React from 'react';
import './slogan-styles.css';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';

function Slogan() {
  const isVertical = CheckOrientation();

  return (
    <div className={'slogan-container'}>
      <div className="center-box">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <p
            style={{
              fontSize: isVertical ? 'max(1rem, 4vw)' : '1rem',
              color: 'white',
              padding: '1rem',
              minWidth: 250,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              letterSpacing: '0.2rem',
              wordSpacing: '0.4rem',
              margin: 0,
              width: '100%',
            }}
          >
            Full Stack Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
