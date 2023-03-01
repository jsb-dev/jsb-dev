import React from 'react';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../utils/CheckDevice.jsx';
import {
  FrontEndCard,
  BackEndCard,
  FullStackCard,
} from './full-stack-section-components/description-cards.jsx';

function FullStackSection() {
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
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                margin: isVertical
                  ? '5rem 0'
                  : !isVertical && isMobile
                  ? '5rem 0'
                  : '',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                padding: isVertical ? '1% 5%' : '1%',
              }}
            >
              <div
                style={{
                  marginTop: !isVertical ? '5%' : '',
                }}
              >
                <FrontEndCard />
              </div>
              <div
                style={{
                  marginTop: '5%',
                }}
              >
                <BackEndCard />
              </div>
              <div
                style={{
                  marginTop: '5%',
                }}
              >
                <FullStackCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullStackSection;
