import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './ieee_logo3.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavLinkClick = () => {
    toggleSidebar();
    scrollToTop();
  };

  const scrollToTop = () => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  };


  
  return (
    <nav className="navbar">
         <div id="stars"></div>
         <div id="stars2"></div>

  
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
  
        <img src={logo} alt="Logo" />
      
      <ul className={`navbar-links ${isSidebarOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={handleNavLinkClick}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleNavLinkClick}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={handleNavLinkClick}>
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/collab" onClick={handleNavLinkClick}>
            COLLABORATOR
          </NavLink>
        </li>
       
        <li>
          <NavLink to="/contact" onClick={handleNavLinkClick}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
