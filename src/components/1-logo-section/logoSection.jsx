import React from 'react';
import Logo from './logo-section-components/logo/logo.jsx';
import Slogan from './logo-section-components/slogan/slogan.jsx';
import Brief from './logo-section-components/brief/brief.jsx';
import StarsBg from '../../assets/images/section-1-bg-casey-horner.jpg';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';

function LogoSection() {
  const isVertical = CheckOrientation();
  const isMobile = window.innerWidth < 601;
  const isTablet = window.innerWidth < 961;

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${StarsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            width: '100vw',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(102, 38, 158, 0.1)',
              width: '100vw',
              minHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              padding: isVertical ? '5% 0' : '2% 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '80vh',
              }}
            >
              <div
                style={{
                  width: isVertical ? '90vw' : '40vw',
                  minWidth: 300,
                }}
              >
                <Logo />
              </div>
              <div>
                <Slogan />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: isVertical ? '70vw' : '50vw',
                  margin: isMobile ? '15%' : isTablet ? '20%' : '5%',
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
