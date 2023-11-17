// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <input type="text" id="searchBar" placeholder="Search..." />
      <a href="#" id="logoutBtn">
        Logout
      </a>
    </header>
  );
};

export default Header;
