import React from 'react';
import './brief-styles.css';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Brief() {
  const isVertical = CheckOrientation();
  const briefRef = React.useRef(null);

  React.useEffect(() => {
    const briefElement = briefRef.current;
    briefElement.style.opacity = 1;
  }, []);

  return (
    <div
      ref={briefRef}
      className="card"
      style={{
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        opacity: 0,
        transition: 'opacity 6s ease-in-out',
      }}
    >
      <div
        className="card-body"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <p
          className="card-text"
          style={{
            color: 'white',
            textAlign: isVertical ? 'center' : '',
            fontSize: isVertical ? 'max(1rem, 3vw)' : '1rem',
          }}
        >
          Find out how I can develop your company's website as an extension of
          your brand
        </p>
        {/* eslint-disable-next-line */}
        <a href="#" className="btn btn-primary" style={{}}>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Brief;
