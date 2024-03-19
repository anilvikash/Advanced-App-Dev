// About.js

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Footer from './Footer';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to Job Fair! We are dedicated to connecting job seekers with
          opportunities and helping companies find the right talent.
        </p>
        <p>
          Our mission is to simplify the job search process and make it easier
          for individuals to find their dream careers. We believe in the
          following core values and ethics:
        </p>
        <ul>
          <li>
            <strong>Integrity:</strong> We operate with the highest level of
            integrity, ensuring fairness and transparency in all our
            interactions.
          </li>
          <li>
            <strong>Equality:</strong> We are committed to promoting equal
            opportunities for job seekers of all backgrounds and experiences.
          </li>
          <li>
            <strong>Respect:</strong> We treat every individual with respect
            and dignity, valuing their unique skills and contributions.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously strive to innovate and
            improve our platform to better serve our users and partners.
          </li>
        </ul>
        <p>
          At Job Fair, we believe that by upholding these values, we can
          facilitate meaningful connections between job seekers and employers,
          leading to successful and fulfilling careers.
        </p>
        <p>
          Contact us at <a href="mailto:info@jobfair.com">info@jobfair.com</a> for
          any inquiries or assistance.
        </p>

        
        
        <Link to='/Home'>
            <div className="continue-btn">Back</div>
          </Link>
      </div>
      
      <div>
      </div>
    </div>
    
  );
}

export default About;
