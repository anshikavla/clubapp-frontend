import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import { useNavigate } from 'react-router-dom';

const ClubList = () => {
  const [items, setItems] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5000/clubs')
      .then(response => {
        setItems(response.data); 
       //setFilteredClubs(response.data);
        //setIsFiltered(true); // Set isFiltered to true when clubs are filtered
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleClick = (itemName) => {
    alert(`You clicked on ${itemName}`);
    navigate(`/club/${itemName}`);
    // Add your click event logic here
  };

  const handleDataFromFilter = (data) => {
    setFilteredClubs(data.data);
    console.log('Received data in parent:', data);
    setIsFiltered(true)
  };

  const handleRemoveFilter = () => {
    setIsFiltered(false); // Reset isFiltered to false when filter is removed
    setFilteredClubs([]); // Clear filtered clubs
  };

  return (
    <div>
      <Filters setFilteredClubs={handleDataFromFilter} />
      {isFiltered && filteredClubs? (
        <div>
          <h2>Filtered Clubs</h2>
          <br></br>
          <button onClick={handleRemoveFilter}>Remove Filter</button>
          {/* <ul>
            {filteredClubs.map((club, index) => (
              <li>{club.Club_name}</li>
              // Modify this to display club details as needed
            ))}
          </ul> */}
          <ul>
              {filteredClubs.map((club, index) => (
                <article className="club" onClick={() => handleClick(club.Club_name)}>
                 
                  <h3>{club.Club_name}</h3>
                  <br></br>
                  {club.Club_image && (
                <img src={`http://localhost:5000/uploads/${club.Club_image}`} alt={club.Club_name} />
              )}
                </article>
              ))}
            </ul>



        </div>
      ) : (
        <div>
          <article>
            <h1>List of Items</h1>
            <ul>
              {items.map((item, index) => (
                <article className="club" onClick={() => handleClick(item.Club_name)}>
                  <h3>{item.Club_name}</h3>
                  <br></br>
                  {item.Club_image && (
                <img src={`http://localhost:5000/uploads/${item.Club_image}`} alt={item.Club_name} />
              )}
                </article>
              ))}
            </ul>
          </article>
        </div>
      )}
    </div>
  );
  
              }
export default ClubList;