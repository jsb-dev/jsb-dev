import React from 'react';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../utils/CheckDevice.jsx';
import MelbBg from '../../assets/images/melb-bg.jpg';
import SkillsBrief from './skills-section-components/skills-brief/skills-brief.jsx';
import SkillsList from './skills-section-components/skills-list/skills-list.jsx';

function SkillsSection() {
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
          backgroundImage: `url(${MelbBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(102, 38, 158, 0.1)',
              display: 'flex',
              justifyContent: 'space-around',
              padding: isVertical ? '2rem 0 0 0' : '1rem 0 0 0',
              width: '100vw',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: isVertical
                  ? 'column'
                  : !isVertical && isMobile
                  ? 'column'
                  : 'row',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                padding: isMobile ? '3% 5%' : '0 0 0 3%',
              }}
            >
              <div
                style={{
                  width: isVertical
                    ? '100%'
                    : !isVertical && isMobile
                    ? '100%'
                    : '40%',
                  height: isVertical ? '50%' : '100%',
                }}
              >
                <SkillsBrief />
              </div>
              <div
                style={{
                  width: isVertical
                    ? '100%'
                    : !isVertical && isMobile
                    ? '100%'
                    : '60%',
                  height: isVertical ? '50%' : '100%',
                  padding: '2%',
                }}
              >
                <SkillsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
