import React from 'react';
import './WhyChooseUs.css';
import checkIcon from '../assets/check-icon.svg';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="why-choose-content">
        <div className="why-choose-text">
          <p className="why-choose-label">Why Choose Us</p>
          <h2>Provide all resources and insights for building and growing your business</h2>
          <p className="why-choose-description">
            When you choose Idea Ascend, you're not just getting a business support but a unified platform that helps you with end to end support
            during your entrepreneurial journey and in business knowledge.
          </p>
          
          <div className="features-container">
            <div className="features-column">
              <div className="feature-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                <span>Unified platform</span>
              </div>
              <div className="feature-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                <span>Mentorship from industry experts</span>
              </div>
              <div className="feature-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                <span>Mock pitch</span>
              </div>
            </div>
            
            <div className="features-column">
              <div className="feature-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                <span>Chatbot for Business Insights</span>
              </div>
              <div className="feature-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                <span>Co-founder and team Matching</span>
              </div>
              <div className="feature-item">
                <img src={checkIcon} alt="Check" className="check-icon" />
                <span>Investor Matching</span>
              </div>
            </div>
          </div>
          
          <button className="read-more-button">READ MORE</button>
        </div>
        
        <div className="meeting-image-container">
          <div className="meeting-image-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
