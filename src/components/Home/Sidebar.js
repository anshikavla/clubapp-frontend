// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
        <Link to="/home">Home</Link> 
        <br></br><br></br>  
        </li>
        <li>
          <Link to="/events">Calendar</Link>
          <br></br><br></br> 
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        <br></br><br></br> 
        </li>
        <li>
        <Link to="/wishlist">Wishlist</Link>
        <br></br><br></br> 
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
