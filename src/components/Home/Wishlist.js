// components/Home/Wishlist.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wishlist = () => {

  const [wishlistData, setwishlistData] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const storedUsername = localStorage.getItem('username') || '';
  console.log(storedUsername)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (storedUsername) {
          const response = await axios.get('http://localhost:5000/wishlist', {
            params: {
              username: storedUsername,
            },
          });
          setwishlistData(response.data);
          console.log(wishlistData.data)

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [storedUsername]);
  useEffect(() =>{
    console.log(wishlistData)
    setWishlist(wishlistData.wishlist)
  },[wishlistData]);

  // useEffect(() =>{
  //   console.log(wishlistData.wishlist)
  // },[wishlist]);

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist ? (
      <div>
      <br></br>
      <h2>Hey {wishlistData.username}!!</h2>
      <br></br>
      <br></br>
      <h3> Your interested clubs are : </h3>
      <ul>
        {wishlist.map((item, index) => (
          // Use 'index' as the 'key' if each item has a unique identifier
          <li key={index}>{item}</li>
        ))}
      </ul>
</div>
      ) : (
        <p>No wishlist data available</p>
      )}

      {/* Display the user's wishlist content here */}
    </div>
  );
};

export default Wishlist;
