// components/Auth/Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleRegister = () => {
    // Implement registration functionality
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Additional Information:
          <textarea value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
