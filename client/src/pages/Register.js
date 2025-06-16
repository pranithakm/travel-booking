import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate, Link } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      await axios.post('http://localhost:4000/api/register', formData);
      alert('User registered successfully!');
      navigate('/login');
    } catch (error) {
      alert('Error registering user');
      console.error(error);
    }
  };

  return (
    <div className="rform-container"> {/* Background wrapper */}
    <video className="rbg-video" autoPlay muted loop>
        <source src="https://videos.pexels.com/video-files/3576378/3576378-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form className="rform" onSubmit={handleSubmit}>
        <p className="rtitle">Register</p>
        <p className="rmessage">Signup now and enjoy travelling</p>
        <div className="rflex">
          <label>
            <input
              name="firstname"
              required
              type="text"
              className="rinput"
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              name="lastname"
              required
              type="text"
              className="rinput"
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input
            name="email"
            required
            type="email"
            className="rinput"
            onChange={handleChange}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            name="password"
            required
            type="password"
            className="rinput"
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            name="confirmPassword"
            required
            type="password"
            className="rinput"
            onChange={handleChange}
          />
          <span>Confirm password</span>
        </label>
        <button className="rsubmit" type="submit">Submit</button>
        <p className="rsignin">
          Already have an account? <a href="/login">Signin</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
