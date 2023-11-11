import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register';
import HomePage from './components/Home/HomePage';
import Wishlist from './components/Home/Wishlist';
import Profile from './components/Home/Profile';
import ClubDetail from './components/Club/ClubDetail';
import TodayEvents from './components/Events/TodayEvents';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/club/:id" element={<ClubDetail/>} />
          <Route path="/today-events" element={<TodayEvents/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
