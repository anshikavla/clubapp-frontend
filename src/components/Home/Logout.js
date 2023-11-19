import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.clear(); 
    alert('You have been logged out!');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout} id="logoutBtn">
      Logout
    </button>
  );
};

export default LogoutButton;
