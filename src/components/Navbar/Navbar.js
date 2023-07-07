import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  const [activeLink, setActiveLink] = useState('/');


  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-links ${activeLink === '/' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/skills"
            className={`nav-links ${activeLink === '/skills' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/skills')}
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/projects"
            className={`nav-links ${activeLink === '/projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/projects')}
          >
            Portfolio
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contact"
            className={`nav-links ${activeLink === '/contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
