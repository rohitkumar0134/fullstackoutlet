import React, { useState } from 'react';
import axios from 'axios';
import { Link,} from 'react-router-dom';
import './snackbar.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        username,
        password
      });
      const token = response.data.token;
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000); // Expiration date set in seconds
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      window.location.href = '/admin/dashboard';
    } catch (err) {
      console.error(err);
      myFunction();
    }
  };

  function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  return (
<div className="d-flex justify-content-center align-items-center vh-100">
  <div className='px-4 py-4 text-white rounded m-2 min-w-300px' style={{backgroundColor: `#141d2a`}}>
    <h2 className='text-center mb-4'>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          className="form-control shadow-none"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          className="form-control shadow-none"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center'>
      <button type="submit" className="btn w-50 mt-2" >Login</button>
      <Link to="/register" className="btn" style={{width: `40%`}}>Register</Link>
      </div>
    </form>
  </div>
  <span id="snackbar">Invalid credentials. Please try again.</span>
</div>


  );
};

export default Login;
