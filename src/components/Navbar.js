import React from 'react';
import '../styles/navbar.css'; // Import CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
