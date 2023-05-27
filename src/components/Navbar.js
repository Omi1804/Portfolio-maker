import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-links">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;