import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ClubList from './ClubList';
import './styles.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Sidebar />
      <main>
        <ClubList searchQuery={searchQuery} />
      </main>
      {/* Include your footer here */}
    </div>
  );
};

export default App;
