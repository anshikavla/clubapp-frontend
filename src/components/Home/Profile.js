import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const storedUsername = localStorage.getItem('username') || ''; // Retrieve value from localStorage
  console.log(storedUsername)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (storedUsername) {
          const response = await axios.get('http://localhost:5000/profile', {
            params: {
              username: storedUsername,
            },
          });
          setProfileData(response);
          console.log(profileData)

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [storedUsername]);

  return (
    
    <div className='profile-container'>
      <h1 class="profile-heading">User Profile</h1>
      {profileData ? (
        <div class="profile-info">
          <br></br>
          <p><i>Username : </i>{profileData.data.username}</p>
          <br></br>
          <p><i>Email Id : </i>{profileData.data.emailId}</p>
          <br></br>
          <p><i>Phone Number : </i>{profileData.data.phone}</p>
          <br></br>
          <p><i>Register Number : </i>{profileData.data.registerNumber}</p>

          {/* Display other profile data attributes here */}
        </div>

      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
};

export default Profile;
