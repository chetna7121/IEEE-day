import React, { useState } from 'react';
import './Navbar.css';
import './animation.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
       <div id="stars"></div>
      <div className="navbar-toggle" onClick={toggleSidebar}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
      <ul className={`navbar-links ${isSidebarOpen ? 'open' : ''}`}>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/services">EVENTS</a></li>
        <li><a href="/contact">SPONSERS</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </nav>
   
  );
};

export default Navbar;
