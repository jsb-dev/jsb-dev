import React from 'react';
import NeonBg from '../../assets/images/neon-bg.jpg';
import MelbBg from '../../assets/images/melb-bg.jpg';
import ImgSectionBreaker from './section-breakers-components/img-section-breaker.jsx';

export function NebulaSectionBreaker() {
  const contentContainer = {
    color: 'white',
    padding: '1rem',
  };

  const topParagraphStyles = {
    textAlign: 'left',
    fontSize: '1rem',
  };

  const bottomParagraphStyles = {
    textAlign: 'right',
    fontSize: '1rem',
  };

  const headerStyles = {
    fontSize: '1.8rem',
  };

  const topContent = (
    <div style={contentContainer}>
      <h1 style={headerStyles}>A bit about myself</h1>
      <p style={topParagraphStyles}>
        My name is Jacob Booth. I'm a full-stack web developer based in
        Melbourne, Australia. I discovered web development in 2021 as the ideal
        medium for creating meaningful and informal programs.
      </p>
    </div>
  );

  const bottomContent = (
    <div style={contentContainer}>
      <p style={bottomParagraphStyles}>
        I strongly believe that, while not the only option for content delivery,
        this domain possesses the greatest potential for creating a more
        accessible and inclusive social dynamic for the digital age we find
        ourselves in. Hence, I have devoted myself tirelessly, both within and
        outside of academic context, to developing my skills in this field.
      </p>
    </div>
  );

  return (
    <section>
      <ImgSectionBreaker
        background={MelbBg}
        topContent={topContent}
        bottomContent={bottomContent}
      />
    </section>
  );
}

export function NeonSectionBreaker() {
  const midContent = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1 style={{}}>Contemporary solutions for a dynamic industry</h1>
      <p
        style={{
          marginTop: '5%',
        }}
      >
        By continuing my educationn in both official academic and personal
        contexts, I can offer industry best practises, and contemporary
        solutions to your business needs.
      </p>
    </div>
  );

  return (
    <section>
      <ImgSectionBreaker background={NeonBg} midContent={midContent} />
    </section>
  );
}
