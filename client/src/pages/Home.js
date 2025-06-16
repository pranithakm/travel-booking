import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // your navbar
import './Home.css';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/2547258/2547258-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="overlay">
        <p className='user-name'>
  Welcome, {user?.firstname || "User"}!
</p>
          <h1>
          Say hello to unforgettable journeys with  <span className="hh">Travigo</span>
          </h1>
          <button
            className="explore-btn"
            onClick={() => navigate('/destinations')}
          >
            Explore
          </button>
        </div>
      </div>

      {/* Stylish Content Section */}
      <section className="features-section">
        <h2>Why Choose Travigo?</h2>
        <div className="features-container">
          <div className="feature-card">
            <i className="fas fa-map-marked-alt feature-icon"></i>
            <h3>Explore Destinations</h3>
            <p>Discover handpicked travel spots curated by experts just for you.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-wallet feature-icon"></i>
            <h3>Affordable Plans</h3>
            <p>Choose from budget-friendly to premium travel packages that suit your style.</p>
          </div>

          <div className="feature-card">
            <i className="fas fa-headset feature-icon"></i>
            <h3>24/7 Support</h3>
            <p>Our travel experts are available around the clock to help you plan your perfect trip.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;