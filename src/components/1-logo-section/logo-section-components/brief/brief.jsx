import React from 'react';
import './brief-styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Brief() {
  return (
    <div
      className="card"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="card-body">
        <p className="card-text">
          Find out how I can develop your company's website as an extension of
          the brand
        </p>
        <a href="#" className="btn btn-primary">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Brief;
