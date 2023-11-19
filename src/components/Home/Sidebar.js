// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
        <Link to="/home">Home</Link>   
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>
        <li>
          <a href="#">Wishlist</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
