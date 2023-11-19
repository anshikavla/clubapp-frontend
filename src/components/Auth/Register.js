// components/Auth/Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'http://localhost:5000/register', {
        method: "post",
        body: JSON.stringify({ username,password,phone,emailId }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        setUsername("");
        setPassword("");
        setPhone("");
        setEmailId("");
    }
}

  return (
    <div className='profile-container'>
      <form>
      <h2>Register</h2>
        <label>
          Username :
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password :
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Phone :
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email Id :
          <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
        <h3>
        Already have an account ? <Link to="/login">Login</Link>
      </h3>
      </form>

    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
};
export default Register;
