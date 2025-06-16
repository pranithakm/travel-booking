import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="https://videos.pexels.com/video-files/2772930/2772930-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="contact-container" style={{ marginTop: '100px' }}>
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out for any inquiries, suggestions, or support.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>
              </div>

              <button type="submit" className="send-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> support@tarvigo.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> 123, Nehru Street, Chennai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;