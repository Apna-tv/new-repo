import React from 'react';
import './BusinessModels.css';
import modelIcon from '../assets/model-icon.svg';
import teamIcon from '../assets/team-icon.svg';

const BusinessModels = ({ icon, title, description }) => {
  return (
    <div className="business-model">
      <div className="icon-container">
        <img 
          src={icon === 'model-icon' ? modelIcon : teamIcon} 
          alt={icon === 'model-icon' ? "Business model icon" : "Team icon"} 
          className="model-icon"
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="learn-more">
        Learn More <span className="arrow">➔</span>
      </a>
    </div>
  );
};

export default BusinessModels;
