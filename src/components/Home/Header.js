// Header.js
import React from 'react';
import LogoutButton from './Logout';
const Header = () => {
  return (
    <header>
      <input type="text" id="searchBar" placeholder="Search..." />
      <LogoutButton/>
    </header>
  );
};

export default Header;