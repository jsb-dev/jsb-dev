import React from 'react';
import { CheckOrientation } from '../../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../../utils/CheckDevice.jsx';

function ImgSectionBreaker({
  background,
  topContent,
  midContent,
  bottomContent,
}) {
  const isVertical = CheckOrientation();
  const isMobile = CheckDevice();

  return (
    <section
      style={{
        height: '100vh',
        maxHeight: isVertical ? 600 : !isVertical && isMobile ? 600 : 500,
      }}
    >
      <figure
        style={{
          backgroundColor: '#171717',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          margin: 0,
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            height: '100%',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(102, 38, 158, 0.1)',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>{topContent}</div>
            <div>{midContent}</div>
            <div>{bottomContent}</div>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default ImgSectionBreaker;
