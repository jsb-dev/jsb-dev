import React from 'react';
import LogoSection from '../components/1-logo-section/logo-section';
import SkillsSection from '../components/2-skills-section/skills-section';
import FullStackSection from '../components/3-full-stack-section/full-stack-section';
import ProjectsSection from '../components/4-projects-section/projects-section';
import ExtendedSkillsSection from '../components/5-extended-skills-section/extended-skills-section';
import {
  MelbSectionBreaker,
  NeonSectionBreaker,
  ProjectsSectionBreaker,
} from '../components/section-breakers/section-breakers.jsx';

function JSBDevPage() {
  return (
    <>
      <LogoSection />
      <MelbSectionBreaker />
      <SkillsSection />
      <NeonSectionBreaker />
      <FullStackSection />
      <ProjectsSectionBreaker />
      <ProjectsSection />
      <ExtendedSkillsSection />
    </>
  );
}

export default JSBDevPage;
