import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register';
import HomePage from './components/Home/HomePage';
import Wishlist_main from './components/Home/Wishlist_main.js';
import Profile_main from './components/Home/Profile_main';
import ClubDetail from './components/Club/ClubDetail';
import ClubList from './components/Home/ClubList.js';
import TodayEvents_main from './components/Events/TodayEvents_main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/wishlist" element={<Wishlist_main/>} />
          <Route path="/profile" element={<Profile_main/>} />
          <Route path="/club" element={<ClubList/>} />
          <Route path="/club/:clubname" element={<ClubDetail/>} />
          <Route path="/events" element={<TodayEvents_main/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
