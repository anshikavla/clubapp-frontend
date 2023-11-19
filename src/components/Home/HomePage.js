
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Filters from './Filters';
import ClubList from './ClubList';
import './styles.css';
const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <ClubList />
      </main>
      {/* Include your footer here */}
    </div>
  );
};

export default App;
