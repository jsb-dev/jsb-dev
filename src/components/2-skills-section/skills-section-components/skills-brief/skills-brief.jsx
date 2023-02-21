import React from 'react';
import { Figure } from 'react-bootstrap';
import SoundEngineeringBg from '../../../../assets/images/sound-engineering-bg.jpg';

function SkillsBrief() {
  return (
    <Figure
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        minWidth: '200px',
        minHeight: '550px',
      }}
    >
      <Figure>
        <Figure.Image
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '85%',
            height: '80%',
            borderRadius: '1rem',
            objectFit: 'cover',
            boxShadow: 'rgba(255,255,255, 0.3) 0px 7px 15px 12px',
          }}
          src={SoundEngineeringBg}
          alt="The mixboard interface for a desktop DAW"
        />
        <Figure.Caption
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '85%',
            height: '80%',
            borderRadius: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '5% 3%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            boxShadow: 'rgba(255,255,255, 0.3) 0px 7px 15px 12px',
          }}
        >
          <h2
            style={{
              color: 'white',
              fontSize: '1.3rem',
              letterSpacing: '0.1rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            My learning background
          </h2>
          <p
            style={{
              color: 'white',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
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
