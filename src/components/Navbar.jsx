import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className="navbar">
    <div className="banner">
      <h1>Welcome to CustomsByAJ</h1>
      <p>Your one-stop shop for custom shoe designs!</p>
      
    </div>
   
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        {/* <li><Link to="/social">Social Media</Link></li> */}
        <li><Link to="/order">Order Form</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
      </ul>
    </nav>
  );
}

export default Navbar;
