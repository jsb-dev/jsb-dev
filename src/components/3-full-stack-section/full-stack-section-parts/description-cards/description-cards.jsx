import React from 'react';
import ThumbnailDescriptionCard from '../thumbnail-description-card/thumbnail-description-card.jsx';
import FrontEndBg from '../../../../assets/images/front-end-bg.jpg';
import BackEndBg from '../../../../assets/images/back-end-bg.jpg';
import FullStackBg from '../../../../assets/images/full-stack-bg.jpg';

export function FrontEndCard() {
  const title = 'Front-end';
  const brief = `My front-end experience has equipped me with a solid understanding of responsive web design. Click to read further about my development strategies.`;

  const modalTitle = 'Front-end Strategy';
  const modalBody = `I'm a firm believer that extendng and improving upon what's been established will always be the superior method for development. React is my primary choice for developing a front-end, which provides a convenient way to enforce useEffect hooks to adjust the size and position of components based on the orientation and size of the user's screen. Pairing React with CSS frameworks like Bootstrap and Material UI provides the obvious benefit of modern, easily constructed components. This workflow builds upon some established conventions to save time in production, while also allowing for the creation of unique and appealing designs. More importantly, this method allows for the development of reusible, readable, and maintainable code.`;

  return (
    <ThumbnailDescriptionCard
      thumbnail={FrontEndBg}
      title={title}
      brief={brief}
      modalTitle={modalTitle}
      modalBody={modalBody}
    />
  );
}

export function BackEndCard() {
  const title = 'Back-end';
  const brief = `My back-end development skillset is built on the foundation of Node.js and Express.js. Click to see more about my learning experiences.`;

  const modalTitle = 'Back-end Skills';
  const modalBody = `My back-end skills expand upon an academic education of the fundamentals of computer science. It feels the most familiar to me in the sense that it's the closest representation of the concepts I learnt while doing my Diploma of Information Technology, where I first learnt programming in an official capacity. There's a sort of 'zen' I find with creating database queries, designs and models, and using this in conjunction with other backend services. This allows me to create APIs and services that are easy to use and maintain, and that can be easily integrated into other projects.`;

  return (
    <ThumbnailDescriptionCard
      thumbnail={BackEndBg}
      title={title}
      brief={brief}
      modalTitle={modalTitle}
      modalBody={modalBody}
    />
  );
}

export function FullStackCard() {
  const title = 'Full-stack';
  const brief = `My full-stack development skills are my most prized achievements in the domain of web development. Click to read further about my ambitions.`;

  const modalTitle = 'Full-stack Understanding';
  const modalBody = `Full-stack development has always been the endgoal since I began my journey in web-development. The ability to create a complex program from start to finish holds great value in the current era. I am constantly developing my skills by employing different technologies that expand my full stack skills and further my development goals. I'm personally a big fan of the MERN stack, and generally find all the necessary tools for beginning large scale project development by going with this stack. On top of that, it's convenient, performant and flexible. Further stacks that I intend to cover are the MEAN, AMP, and LAMP stacks.`;

  return (
    <ThumbnailDescriptionCard
      thumbnail={FullStackBg}
      title={title}
      brief={brief}
      modalTitle={modalTitle}
      modalBody={modalBody}
    />
  );
}
