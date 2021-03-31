import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <ul class='header__menu'>
        <li style={{ background: 'red' }}>
          <Link to='/'>Home</Link>
        </li>
        <li style={{ background: 'yellow' }}>
          <Link to='/other'>Other</Link>
        </li>
      </ul>
    </header>
  );
};
