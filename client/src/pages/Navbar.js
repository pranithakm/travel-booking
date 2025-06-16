import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload(); // Ensure the UI updates
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          TRAVIGO
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/destinations">Destinations</a></li>
          {!user && <li><a href="/register">Register</a></li>}
          {!user && <li><a href="/login">Login</a></li>}
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        {/* Username and logout */}
        {user ? (
          <div className="user-controls" onClick={handleLogout} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
            <span className="get-started">{user?.firstname?.toUpperCase() || 'USER'}</span>
            <i className="fa fa-sign-out" style={{ fontSize: '20px', color: 'black' }} title="Logout"></i>
          </div>
        ) : (
          <a href="/login" className="get-started">GET STARTED</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;