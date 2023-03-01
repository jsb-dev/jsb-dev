import React from 'react';
import { CheckOrientation } from '../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../utils/CheckDevice.jsx';
import ApplicateVideo from './projects-section-components/applicate-video.jsx';
import Button from 'react-bootstrap/Button';

function ProjectsSection() {
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
          padding: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isVertical
              ? '50vh'
              : !isVertical && isMobile
              ? '90vh'
              : '50vh',
            height: !isVertical && !isMobile ? '50vh' : '',
            padding: !isVertical && isMobile ? '2rem 0' : '',
          }}
        >
          <ApplicateVideo />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isVertical
              ? '50vh'
              : !isVertical && isMobile
              ? '90vh'
              : '50vh',
            height: !isVertical && !isMobile ? '50vh' : '',
            padding: !isVertical && isMobile ? '2rem 0' : '',
          }}
        >
          <article
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: !isVertical && !isMobile ? '1rem' : '',
              width: isVertical
                ? '100vw'
                : !isVertical && isMobile
                ? '100vw'
                : '45vw',
              height: !isVertical && !isMobile ? '22.5vw' : '',
              maxHeight: !isVertical && !isMobile ? '95vh' : '',
            }}
          >
            <h1 style={{ color: 'white', width: '100%', margin: '5%' }}>
              Applicate
            </h1>
            <code>
              <p style={{ color: 'white' }}>
                Applicate is a cloud-based, MERN stack application. It's
                collaborative note-taking and documenting platform that's
                designed for easy, simplified planning/note-taking
                documentation. Applicate is completely responsive and will
                adjust the document view to the device screen. Click to find out
                more about Applicate.
              </p>
            </code>
            <Button
              variant="primary"
              href="https://example.com"
              target="_blank"
              style={{
                margin: '1rem',
              }}
            >
              Visit Website
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
