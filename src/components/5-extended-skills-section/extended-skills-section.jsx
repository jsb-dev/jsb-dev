import React from 'react';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../utils/CheckDevice.jsx';
import DropdownDrawerSkillsList from './extended-skills-section-components/dropdown-drawer-skills-list.jsx';

function ExtendedSkillsSection() {
  const isVertical = CheckOrientation();
  const isMobile = CheckDevice();

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: !isVertical && !isMobile ? 'space-around' : 'center',
          flexDirection: !isVertical && !isMobile ? 'row' : 'column',
          backgroundColor: '#171717',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          boxShadow: 'inset 0 0 2rem 0.5rem rgb(0, 0, 0)',
          padding: '3rem',
        }}
      >
        <div
          style={{
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <DropdownDrawerSkillsList />
        </div>
      </div>
    </section>
  );
}

export default ExtendedSkillsSection;
