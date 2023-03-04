import React from 'react';
import DropdownDrawerItem from './dropdown-drawer-item';
import img from '../../../assets/images/back-end-bg.jpg';

const skillsList = [
  {
    title: 'HTML',
    body: 'I have a good understanding of HTML and can use it to create a basic website.',
  },
];

function DropdownDrawerSkillsList() {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0',
        width: '100%',
      }}
    >
      <li>
        <DropdownDrawerItem
          title={'Test'}
          body={'This is the test item'}
          thumbnail={img}
        />
      </li>
    </ul>
  );
}

export default DropdownDrawerSkillsList;
