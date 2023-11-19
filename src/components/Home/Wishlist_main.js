
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Wishlist from './Wishlist';
import './styles.css';
const Wishlist_main = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Wishlist/>
      </main>
      {/* Include your footer here */}
    </div>
  );
};

export default Wishlist_main;
