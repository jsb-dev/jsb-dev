import React from 'react';
import { CheckOrientation } from '../../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../../utils/CheckDevice.jsx';

function ApplicateVideo() {
  const isVertical = CheckOrientation();
  const isMobile = CheckDevice();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/YpqtiTPa-kQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style={{
          borderRadius: '1rem',
          width: isVertical
            ? '92.5vw'
            : !isVertical && isMobile
            ? '92.5vw'
            : '45vw',
          height: isVertical
            ? '46.25vw'
            : !isVertical && isMobile
            ? '46.25vw'
            : '50vh',
          maxHeight: '95vh',
          boxShadow: ' 0 0 2rem 0.1rem rgba(255, 255, 255, 0.3)',
        }}
      ></iframe>
    </div>
  );
}

export default ApplicateVideo;
