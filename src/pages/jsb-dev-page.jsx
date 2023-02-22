import React from 'react';
import LogoSection from '../components/1-logo-section/logo-section';
import SkillsSection from '../components/2-skills-section/skills-section';
import {
  NebulaSectionBreaker,
  NeonSectionBreaker,
} from '../components/section-breakers/section-breakers.jsx';

function HomePage() {
  return (
    <>
      <LogoSection />
      <NebulaSectionBreaker />
      <SkillsSection />
      <NeonSectionBreaker />
    </>
  );
}

export default HomePage;
