// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './Images/DBSlogo2.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="DBS IT Academy Logo" />
      </div>
      
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Courses">Courses</Link></li>
          <li><Link to="/NewBatches">New Batches</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Address:Street, City, Country</p>
        <p>Phone: +91 8340863204</p>
        <p>Email: @gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
