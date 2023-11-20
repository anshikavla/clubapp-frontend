// components/Club/ClubDetail.js

import React, { useState, useEffect } from 'react';
import Sidebar from '../Home/Sidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ClubDetail.css';
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
    <div className='club-container'>
      <h2 class="club-heading">Club Details</h2>
      <p></p>
      <p></p>
      <p></p>
      <div class="profile-info">
      <p><i>Name :</i> {profileData.Club_name}</p>
      <br></br>
      <p><i>Type : </i>{profileData.Type}</p>
      <br></br>
      <p><i>Description :</i><br></br><br></br> {profileData.Club_details}</p>
      <br></br>
      <p><i>Links : </i>{profileData.Club_links}</p>
      <br></br>
      <p><i>Owner : </i>{profileData.Club_owner_name}</p>
      <br></br>
      <p><i>Contact no. : </i>{profileData.Club_owner_phone_no}</p>
      <br></br>
      <p><i>Events : </i>{profileData.Club_events}</p>
      <br></br>
    <button onClick={addToWishlist}>
       Add To Wishlist
    </button>
    </div>
    </div>
  );
};

export default ClubDetail;