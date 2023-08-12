import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToTop = () => {
    console.log("Scrolling to top");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
      <ul className={`navbar-links ${isSidebarOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={scrollToTop}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={scrollToTop}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={scrollToTop}>
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsors" onClick={scrollToTop}>
            SPONSORS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={scrollToTop}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
