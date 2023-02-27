import React from 'react';
import MainHeader from './logo-section-components/main-header/main-header.jsx';
import Brief from './logo-section-components/brief/brief.jsx';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../utils/CheckDevice.jsx';

function LogoSection() {
  const isVertical = CheckOrientation();
  const isMobile = CheckDevice();

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#171717',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          boxShadow: 'inset 0 0 2rem 0.5rem rgb(0, 0, 0)',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isVertical
                ? '1rem 0'
                : !isVertical && isMobile
                ? '1rem 0'
                : '1rem 0',
              height: isVertical ? '100vh' : '',
              minHeight: !isVertical ? '100vh' : '',
              transform: isVertical && isMobile ? 'scale(0.9)' : '',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: isVertical
                  ? '90%'
                  : !isVertical && isMobile
                  ? '90%'
                  : '30%',
                maxWidth: !isVertical && isMobile ? 400 : 600,
              }}
            >
              <MainHeader />
              <div
                style={{
                  marginTop: '5%',
                  width: '100%',
                }}
              >
                <Brief />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
