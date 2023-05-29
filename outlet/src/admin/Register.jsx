import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordType, setPasswordType] = useState("password");
  const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${baseUrl}/register`, { username, password });
      setUsername('');
      setPassword('');
      setErrorMessage('');
      alert('User registered successfully!');
    } catch (error) {
      console.error(error);
      setErrorMessage('Unable to register user. Please try again later.');
    }
  };

  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
    } else {
     setPasswordType("password")
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='px-4 py-4 text-white rounded min-w-300px' style={{border:`2px #393646 solid`}}>
      <h2 className='text-center fw-bold mb-4'>Register</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} required style={{border:`2px #393646 solid`}} className='form-control shadow-none' />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required style={{border:`2px #393646 solid`}} className='form-control shadow-none' />
        </div>
        <span className='showpassdiv'>
          <i class={passwordType == "password" ? "fa-solid fa-eye-slash showpass" : "fa-solid fa-eye showpass" } onClick={togglePassword}></i>
        </span>
        <div className='d-flex justify-content-center log-btn'>
        <button type="submit" className="btn mt-2 text-center" style={{width: `50%`, border:`2px #393646 solid`}}>Register</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Register;
