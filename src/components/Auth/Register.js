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
          <i>Username :</i>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          <i>Password :</i>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          <i>Phone :</i>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          <i>Email Id :</i>
          <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
        <h3>
        <i>Already have an account ?</i> <Link to="/login">Login</Link>
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
