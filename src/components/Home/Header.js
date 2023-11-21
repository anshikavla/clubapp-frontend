import React, { useState } from 'react';
import LogoutButton from './Logout';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header>
      <input
        type="text"
        id="searchBar"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      {/* Remove the Search button */}
      <LogoutButton />
    </header>
  );
};

export default Header;
