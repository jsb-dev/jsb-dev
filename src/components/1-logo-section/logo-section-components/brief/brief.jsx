import React from 'react';
import './brief-styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Brief() {
  return (
    <div
      className="card"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: 'inset 0 0 2rem 0.5rem rgba(255,255,255, 0.2)',
        borderRadius: '1rem',
      }}
    >
      <div className="card-body">
        <p className="card-text">
          Find out how I can develop your company's website through contemporary
          design strategies and industry best practices.
        </p>
        <a href="#" className="btn btn-primary">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Brief;
