import React from 'react';
import DropdownDrawerItem from './dropdown-drawer-items';
import img from '../../../assets/images/back-end-bg.jpg';

const skillsList = [
  {
    title: 'Test Item',
    body: 'This is a test item',
    thumbnail: img,
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
