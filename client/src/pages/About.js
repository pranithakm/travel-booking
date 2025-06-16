import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="https://videos.pexels.com/video-files/2772930/2772930-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-container">
        <h1>About TRAVIGO</h1>
        <p>
          Welcome to TRAVIGO — your trusted travel companion! Our mission is to help you explore the world with ease and confidence by providing comprehensive travel information, curated destinations, and personalized trip planning.
        </p>
        <p>
          Founded by passionate travelers and tech enthusiasts, TRAVIGO combines cutting-edge technology with expert travel knowledge to bring you the best travel experience. Whether you're seeking adventure, relaxation, or cultural immersion, we make planning your journey effortless.
        </p>
        <h2 style={{ marginBottom: '10px' }}>Our Values</h2>
        <ul>
          <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority.</li>
          <li><strong>Reliability:</strong> Accurate and up-to-date travel information you can count on.</li>
          <li><strong>Innovation:</strong> Using technology to simplify your travel planning.</li>
          <li><strong>Community:</strong> Connecting travelers around the globe.</li>
        </ul>
        <h2 style={{ marginBottom: '10px' }}>Meet the Team</h2>
        <p>
          Our diverse team of travel experts, developers, and customer service professionals is dedicated to making your experience with TRAVIGO seamless and enjoyable.
        </p>
        <p>
          Join us on this journey to explore the world, one destination at a time!
        </p>
      </div>
    </div>
  );
};

export default About;