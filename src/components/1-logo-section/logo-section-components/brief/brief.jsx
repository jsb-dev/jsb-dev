import React from 'react';
import './brief-styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Brief() {
  return (
    <div
      className="card"
      style={{
        borderRadius: '1rem',
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        height: '100%',
        padding: '3%',
      }}
    >
      <div
        className="card-body"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'space-between',
        }}
      >
        <p
          className="card-text"
          style={{
            color: 'white',
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          Find out how I can develop your company's website as an extension of
          the brand
        </p>
        {/* eslint-disable-next-line */}
        <a
          href="#"
          className="btn btn-primary"
          style={{
            width: '100%',
          }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Brief;
