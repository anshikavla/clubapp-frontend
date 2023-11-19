// Filters.js
import React from 'react';
import './Filters.css'; // Import the CSS file

const Filters = () => {
  return (
    <section id="filters">
      <h2>Filters</h2>
      <div className="filter-container">
        <div className="filter-box">
          <label htmlFor="academicFilter">Coding</label>
          <input type="checkbox" id="Coding" />
        </div>
        <div className="filter-box">
          <label htmlFor="sportsFilter">Laws</label>
          <input type="checkbox" id="Laws" />
        </div>
        <div className="filter-box">
          <label htmlFor="artsFilter">Dance</label>
          <input type="checkbox" id="Dance" />
        </div>
          <div className="filter-box">
          <label htmlFor="artsFilter">Fashion</label>
          <input type="checkbox" id="Fashion" />
        </div>
      </div>
    
      
    </section>
  );
};

export default Filters;
