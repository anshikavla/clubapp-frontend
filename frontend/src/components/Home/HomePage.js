// components/Home/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add your homepage content, buttons, and functionality here */}
      <p>
        Testing Profile Page! <Link to="/profile">Profile Test</Link>
      </p>
    </div>

    
  );
};

export default HomePage;
