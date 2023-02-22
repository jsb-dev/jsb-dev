import React from 'react';
import { CheckOrientation } from '../../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../../utils/CheckDevice.jsx';

function ImgSectionBreaker({ background, topContent, bottomContent }) {
  const isVertical = CheckOrientation();
  const isMobile = CheckDevice();

  return (
    <section
      style={{
        height: isVertical
          ? '100vh'
          : !isVertical && isMobile
          ? '150vh'
          : '100vh',
        maxHeight: isVertical ? 900 : !isVertical && isMobile ? 600 : '',
      }}
    >
      <figure
        style={{
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
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            height: '100%',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(102, 38, 158, 0.2)',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                marginBottom: '20%',
              }}
            >
              {topContent}
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                marginTop: '20%',
              }}
            >
              {bottomContent}
            </div>
          </div>
        </div>
      </figure>
    </section>
  );
}

export default ImgSectionBreaker;
