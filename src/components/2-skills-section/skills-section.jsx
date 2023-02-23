import React from 'react';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../utils/CheckDevice.jsx';
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
          backgroundColor: '#171717',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              boxShadow: 'inset 0 0 2rem 0.5rem rgb(0, 0, 0)',
              padding: '1rem',
            }}
          >
            <div
              style={{
                margin: isVertical
                  ? '5rem 0'
                  : !isVertical && isMobile
                  ? '5rem 0'
                  : '',
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
                padding: isVertical ? '1% 3%' : '0 1%',
              }}
            >
              <div
                style={{
                  width: isVertical
                    ? '100%'
                    : !isVertical && isMobile
                    ? '100%'
                    : '40%',
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
                  padding: isVertical ? '' : '2%',
                  marginTop: isVertical
                    ? '10%'
                    : !isVertical && isMobile
                    ? '10%'
                    : '',
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
