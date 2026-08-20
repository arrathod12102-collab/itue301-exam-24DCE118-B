import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Navbar Component (Task 2)
// Uses React Router Link for instant SPA navigation without full page reload
const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        {/* Brand Identity */}
        <Link to="/" className="navbar-brand">
          <div className="brand-logo-icon">
            <span className="plus-symbol">✚</span>
          </div>
          <div className="brand-text">
            <span className="brand-title">MedCare<span className="brand-plus">Plus</span></span>
            <span className="brand-tagline">Advanced Health Network</span>
          </div>
        </Link>

        {/* Navigation Links with Active Glow */}
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <span className="nav-icon">🏥</span>
            <span>Home</span>
          </Link>
          <Link
            to="/doctors"
            className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}
          >
            <span className="nav-icon">👨‍⚕️</span>
            <span>Doctors</span>
          </Link>
          <Link
            to="/booking"
            className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}
          >
            <span className="nav-icon">📅</span>
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Right Action Hotline Badge */}
        <div className="navbar-actions">
          <Link to="/booking" className="nav-action-btn">
            <span className="btn-shine"></span>
            <span className="btn-text">Instant Booking</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
