import React from 'react';
import './BusinessHeader.css';

const BusinessHeader = () => {
  return (
    <div className="header">
      <div className="strategic-planning">Funding Opportunities</div>
      <div className="header-content">
        <h1>Submit your Business implementation and get validation for funding oportunities</h1>
        <button className="submit-button">Business Form</button>
      </div>
    </div>
  );
};

export default BusinessHeader;
