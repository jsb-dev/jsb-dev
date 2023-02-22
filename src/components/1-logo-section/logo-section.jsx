import React from 'react';
import MainHeader from './logo-section-components/main-header/main-header.jsx';
import Brief from './logo-section-components/brief/brief.jsx';
import StarsBg from '../../assets/images/light-travel-bg.jpg';
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
          backgroundImage: `url(${StarsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(102, 38, 158, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isVertical ? '2rem 0' : '1rem 0',
              minHeight: '100vh',
              boxShadow: 'inset 0 0 2.5rem 1.5rem rgb(0, 0, 0)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: isVertical ? '90%' : '50%',
                transform: 'scale(0.9)',
                height: '100%',
              }}
            >
              <MainHeader />
              <div
                style={{
                  margin: isMobile ? '15%' : '5%',
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
