
import React from 'react';
import Header from '../Home/Header';

import TodayEvents from './TodayEvents';
import '../Home/styles.css';
import Sidebar from '../Home/Sidebar'; // Adjust the import path
const TodayEvents_main = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <TodayEvents/>
      </main>
      {/* Include your footer here */}
    </div>
  );
};

export default TodayEvents_main;
