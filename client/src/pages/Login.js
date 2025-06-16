import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);
      
      // Debug: check what response.data looks like
      console.log(response.data);
  
      // Safely access user
      const { user } = response.data;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Login failed: user not found');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
       <video className="rbg-video" autoPlay muted loop>
        <source src="https://videos.pexels.com/video-files/3576378/3576378-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form className="form" onSubmit={handleSubmit}>
        <p className="ltitle">Login<span className="dot">.</span></p>
        <p className="message">Welcome back! Please login to continue.</p>
        
        {error && <div className="error-message">{error}</div>}

        <label>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>Password</span>
        </label>

        <button className="submit">Submit</button>

        <p className="signin">
Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;