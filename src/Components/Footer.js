// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './Images/DBSlogo2.png'; 
import { Phone, Email, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="DBS IT Academy Logo" />
      </div>
      
      <div className="footer-links">
        <h4>Quick Links</h4>
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
        <h4>Contact Us</h4>
        <p>Address:<br />Street, City, Country</p>
        <p>
          <Phone style={{ verticalAlign: 'middle' }} /> 
          <a href="tel:+918340863204" style={{textDecoration:'none',color:'white'}}>+91 8340863204</a>
          <a href="tel:+919121067423" style={{textDecoration:'none',color:'white'}}>+91 9121067423</a>
        </p>
        <p>
          <Email style={{ verticalAlign: 'middle' }} />
          <a href="mailto:dbsacademy25@gmail.com" style={{textDecoration:'none',color:'white'}}>dbsacademy25@gmail.com</a>
        </p>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <p>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
            <Instagram />
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
