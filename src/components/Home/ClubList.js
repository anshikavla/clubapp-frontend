import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import { useNavigate } from 'react-router-dom';

const ClubList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5000/clubs')
      .then(response => {
        setItems(response.data); 
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

  return (
    <div>
    <Filters />
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
  );
};

export default ClubList;
