import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🏥</span>
        <span className="navbar-title">MedCare Plus</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/doctors" className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}>
          Doctors
        </Link>
        <Link to="/booking" className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}>
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
