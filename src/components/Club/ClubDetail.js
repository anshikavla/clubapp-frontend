// components/Club/ClubDetail.js

import React, { useState, useEffect } from 'react';
import Sidebar from '../Home/Sidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ClubDetail = () => {
  const [profileData, setProfileData] = useState('');
  const [username, setUsername] = useState('');
  const [wishlist, setWishlist] = useState('');
  const { clubname } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (clubname) {
          const response = await axios.get('http://localhost:5000/club', {
            params: {
              clubname: clubname,
            },
          });
          setProfileData(response.data);

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() =>{
    console.log(profileData)
  },[profileData]);

  const addToWishlist = async () => {
    try {
      setUsername(localStorage.getItem("username"))
      setWishlist(clubname)
      console.log(username)
      console.log(wishlist)
      // alert('Added to wishlist!!');
      let result = await fetch(
        "http://localhost:5000/updatewishlist", {
          method: "post",
          body: JSON.stringify({ username,wishlist}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
        }    
    catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  return (
    <div>
      <h2>Club Details</h2>
      <p></p>
      <p></p>
      <p></p>
      <p>Name : {profileData.Club_name}</p>
      <p>Type : {profileData.Type}</p>
      <p>Details : {profileData.Club_details}</p>
      <p>Links : {profileData.Club_links}</p>
      <p>Owner : {profileData.Club_owner_name}</p>
      <p>Contact no. : {profileData.Club_owner_phone_no}</p>
      <p>Events : {profileData.Club_events}</p>

    <button onClick={addToWishlist}>
      Wishlist
    </button>
    </div>
  );
};

export default ClubDetail;
