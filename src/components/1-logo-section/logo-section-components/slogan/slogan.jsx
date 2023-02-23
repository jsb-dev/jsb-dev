import React from 'react';
import './slogan-styles.css';

function Slogan() {
  return (
    <div className={'slogan-container'}>
      <div className="center-box">
        <div className="animated-border-box-glow"></div>
        <div className="animated-border-box">
          <p className="call-to-action">Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
