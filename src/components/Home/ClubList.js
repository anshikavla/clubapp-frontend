import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import { useNavigate } from 'react-router-dom';

const ClubList = ({ searchQuery }) => {
  const [items, setItems] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [noMatches, setNoMatches] = useState(false); // New state for no matches
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/clubs')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredItems = items.filter((item) =>
        item.Club_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredClubs(filteredItems);
      setIsFiltered(true);
      setNoMatches(filteredItems.length === 0); // Update noMatches state
    } else {
      setIsFiltered(false);
      setFilteredClubs([]);
      setNoMatches(false); // Reset noMatches state
    }
  }, [searchQuery, items]);

  const handleClick = (itemName) => {
    alert(`You clicked on ${itemName}`);
    navigate(`/club/${itemName}`);
  };

  const handleDataFromFilter = (data) => {
    setFilteredClubs(data.data);
    setIsFiltered(true);
    setNoMatches(data.data.length === 0); // Update noMatches state
  };

  const handleRemoveFilter = () => {
    setIsFiltered(false);
    setFilteredClubs([]);
    setNoMatches(false); // Reset noMatches state
  };

  return (
    <div>
      <Filters setFilteredClubs={handleDataFromFilter} />
      {isFiltered && filteredClubs.length > 0 ? (
        <div>
          <h2>Filtered Clubs</h2>
          <br></br>
          <button onClick={handleRemoveFilter}>Remove Filter</button>
          <ul>
            {filteredClubs.map((club, index) => (
              <article className="club" onClick={() => handleClick(club.Club_name)} key={index}>
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
          <br></br>
          {noMatches ? (
            <p  style={{ fontSize: '1.5em', fontWeight: 'bold' }}><i>No matches found.</i></p>
          ) : (
            <article>
              <h1>List of Items</h1>
              <ul>
                {items.map((item, index) => (
                  <article className="club" onClick={() => handleClick(item.Club_name)} key={index}>
                    <h3>{item.Club_name}</h3>
                    <br></br>
                    {item.Club_image && (
                      <img src={`http://localhost:5000/uploads/${item.Club_image}`} alt={item.Club_name} />
                    )}
                  </article>
                ))}
              </ul>
            </article>
          )}
        </div>
      )}
    </div>
  );
};

export default ClubList;
