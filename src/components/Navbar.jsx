import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


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
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
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
          <NavLink to="/sponsors" onClick={handleNavLinkClick}>
            SPONSORS
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
