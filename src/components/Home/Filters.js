import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Filters = ({ setFilteredClubs }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log("In submit");
    console.log(selectedType);
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:5000/filteredclubs', {
        params: {
          type: selectedType,
        },
      });
      setFilteredClubs(response);
    } catch (error) {
      console.error('Error fetching filtered clubs:', error);
    }
  };

  const handleRemoveFilter = async () => {
    setSelectedType(''); // Resetting the selected filter to empty string

    try {
      const response = await axios.get('http://localhost:5000/allclubs');
      // Assuming the response contains data under a key 'clubs'
      setFilteredClubs(response.data.clubs); // Displaying all clubs again
    } catch (error) {
      console.error('Error fetching all clubs:', error);
      // Handle error state or show error to the user
    }
  };

  useEffect(() =>{
    console.log(setFilteredClubs)
  },[setFilteredClubs]);

  return (
    <section id="filters">
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <div className="filter-container">
          <div className="filter-box">
            <label>
              <input
                type="radio"
                name="clubType"
                value="Coding"
                checked={selectedType === 'Coding'}
                onChange={handleTypeChange}
              />
              Coding
            </label>
          </div>
          <div className="filter-box">
            <label>
              <input
                type="radio"
                name="clubType"
                value="Laws"
                checked={selectedType === 'Laws'}
                onChange={handleTypeChange}
              />
              Laws
            </label>
          </div>
          <div className="filter-box">
            <label>
              <input
                type="radio"
                name="clubType"
                value="fashion"
                checked={selectedType === 'fashion'}
                onChange={handleTypeChange}
              />
              Fashion
            </label>
          </div>
          <div className="filter-box">
            <label>
              <input
                type="radio"
                name="clubType"
                value="dance"
                checked={selectedType === 'dance'}
                onChange={handleTypeChange}
              />
              Dance
            </label>
          </div>
          
        </div>
        <button type="submit">Filter Clubs</button>
       
      </form>
    </section>
  );
};

export default Filters;
