// components/Auth/Login.js

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin= async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/login', {
        method: "post",
        body: JSON.stringify({ username,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result.value) {
        localStorage.setItem("username",username)
        setUsername("");
        setPassword("");
        localStorage.setItem("authenticated", true);
        navigate("/home");
    }
    else{
      alert("Wrong Password!")
      setUsername("");
      setPassword("");
    }
};
  return (
    <div className="container">
      <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
