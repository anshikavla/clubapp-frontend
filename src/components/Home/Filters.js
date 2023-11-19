// Filters.js
import React from 'react';
import './Filters.css'; // Import the CSS file

const Filters = () => {
  return (
    <section id="filters">
      <h2>Filters</h2>
      <div className="filter-container">
        {/* Example: */}
        <div className="filter-box">
          <label htmlFor="allFilter">All</label>
          <input type="checkbox" id="allFilter" />
        </div>
        <div className="filter-box">
          <label htmlFor="academicFilter">Academic</label>
          <input type="checkbox" id="academicFilter" />
        </div>
        <div className="filter-box">
          <label htmlFor="sportsFilter">Sports</label>
          <input type="checkbox" id="sportsFilter" />
        </div>
        <div className="filter-box">
          <label htmlFor="artsFilter">Arts</label>
          <input type="checkbox" id="artsFilter" />
        </div>
        {/* Add more filter boxes as needed */}
      </div>
    
      
    </section>
  );
};

export default Filters;
