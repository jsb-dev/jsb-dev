import React from 'react';
import DropdownDrawerItem from './dropdown-drawer-items';
import designImg from '../../../assets/images/back-end-bg.jpg';
import structureImg from '../../../assets/images/front-end-bg.jpg';
import communicationImg from '../../../assets/images/full-stack-bg.jpg';

const skillsList = [
  {
    title: 'Design',
    body: 'My design skills have developed through observation and practice. With roots in basic graphic design, I am proficient in the process of developing a visually appealing interface, while being able to add multiple layers of abstraction. I have experience with graphic design tools such as Adobe Illustrator and InkScape to enhance my UI designs when needed. Each of my designs are created as mobile-first, and are then adapted to fit desktop screens. This is an essential aspect of compressing usability into a small space, while giving each element enough room to breathe.',
    thumbnail: designImg,
  },
  {
    title: 'Organisation',
    body: 'Organisation is key and lies at the core of my development process. My method involves breaking down the project into smaller components, and then building each component individually. This allows me to focus on one aspect of the project at a time, and to identify any potential issues early on. Furthermore, I distinguish all aspects with meaningful names, ensuring that any unnecessary layers of abstraction are avoided. These standards allow for a more intuitive and efficient development process.',
    thumbnail: structureImg,
  },
  {
    title: 'Communication',
    body: 'Being one of my highest priorities, the quality and clarity of my communication is paramount. Manner and detail are just the beginning. The nature of websites and web apps is such that they are built to deliver information in some form. Communication quality extends beyond the bounds of the development team, it pours into the hands of the end user. The communication aspect of my work is not limited to the development process, but extends to the entire life cycle of the project. This is why it requires no less than perfection. Luckily, I am up to the task!',
    thumbnail: communicationImg,
  },
];

const itemStyles = {
  width: '100%',
  padding: 0,
};

function DropdownDrawerSkillsList() {
  return (
    <ul
      style={{
        margin: '3rem 0',
        listStyle: 'none',
        padding: '0',
        width: '100%',
      }}
    >
      {skillsList.map((skill) => (
        <li style={itemStyles}>
          <DropdownDrawerItem
            key={skill.title}
            title={skill.title}
            body={skill.body}
            thumbnail={skill.thumbnail}
          />
        </li>
      ))}
    </ul>
  );
}

export default DropdownDrawerSkillsList;
