import React from 'react';
import LogoSection from '../components/1-logo-section/logo-section';
import SkillsSection from '../components/2-skills-section/skills-section';
import FullStackSection from '../components/3-full-stack-section/full-stack-section';
import {
  NebulaSectionBreaker,
  NeonSectionBreaker,
  ProjectsSectionBreaker,
} from '../components/section-breakers/section-breakers.jsx';

function JSBDevPage() {
  return (
    <>
      <LogoSection />
      <NebulaSectionBreaker />
      <SkillsSection />
      <NeonSectionBreaker />
      <FullStackSection />
      <ProjectsSectionBreaker />
    </>
  );
}

export default JSBDevPage;
