import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column company-info">
            <div className="footer-logo">
              <img src={logo} alt="Idea Ascend Logo" />
              <span>Idea Ascend</span>
            </div>
            <p className="company-description">
            Ascend is an all-in-one platform that empowers entrepreneurs to turn ideas into successful businesses. 
            It offers AI-driven insights, personalized mentorship, and targeted investor matching,
             guiding founders from concept to growth with flexible, tailored support.
            </p>
            <div className="social-media">
              <p>Follow Us On:</p>
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://youtube.com" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/founders-team">Founder's Team</Link></li>
              <li><Link to="/mentor">Mentor</Link></li>
              <li><Link to="/investor">Investor</Link></li>
              <li><Link to="/chatbot">CHATBOT</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/">Idea validation and refining</Link></li>
              <li><Link to="/">1:1 Mentorship</Link></li>
              <li><Link to="/">Team building support</Link></li>
              <li><Link to="/">Business execution validation</Link></li>
              <li><Link to="/">Funding opportunities</Link></li>
              <li><Link to="/">Networking opportunities</Link></li>
            </ul>
          </div>
          
          <div className="footer-column newsletter">
            <h3>Subscribe Newsletter</h3>
            <p>Explore our news and blog content today and take the first step towards unlocking your full business potential.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email..." />
              <button type="button" className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Idea Ascend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
