// Footer.js

import React from 'react';
import '../layout/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'; // Import Link for routing

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Main Street<br />City, State<br />Postal Code</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/Terms">Terms and Conditions</Link>
          <br /> 
          <Link to="/Faq">FAQ</Link>
          <br /> 
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: example@example.com<br />Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
