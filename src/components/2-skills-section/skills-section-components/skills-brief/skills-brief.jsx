import React from 'react';
import { Figure } from 'react-bootstrap';
import SoundEngineeringBg from '../../../../assets/images/sound-engineering-bg.jpg';
import './skills-brief-styles.css';

function SkillsBrief() {
  return (
    <Figure className="skills-brief-container">
      <Figure>
        <Figure.Image
          className="skills-brief-image"
          src={SoundEngineeringBg}
          alt="The mixboard interface for a desktop DAW"
        />
        <Figure.Caption className="skills-brief-caption">
          <h2 className="skills-brief-heading">My learning background</h2>
          <p className="skills-brief-text">
            My problem-solving methodology is constructed from practises I've
            acquired through my Computer Science education, and my experience as
            a Sound Engineer. I strongly believe the combination of these two
            fields of study has given me a focused perspective on
            problem-solving, with a robust understanding of control flow and
            order-of-effect.
          </p>
        </Figure.Caption>
      </Figure>
    </Figure>
  );
}

export default SkillsBrief;
