import React from 'react';
import './ConceptToCreation.css';

const ConceptToCreation = () => {
  return (
    <div className="concept-to-creation">
      <div className="concept-container">
        <div className="concept-text">
          <div className="strategy-badge">Vision</div>
          
          <h1 className="concept-title">
            From Concept to Creation - Accelerate Your Venture
          </h1>
          
          <p className="concept-description">
            "To empower every aspiring entrepreneur to turn innovative ideas into successful, growing businesses by providing a 
            complete, integrated platform that guides them from concept to funding"
          </p>
        </div>
        
        <div className="concept-image-container">
          <div className="concept-image">
            <div className="rating-card">
              {/* <div className="stars">
                ★★★★<span className="empty-star">★</span>
              </div> */}
              <div className="rating-number">4/5 <span className="rating-text">Rating</span></div>
              <div className="rating-reviews">From over 1500 reviews</div>
            </div>
            
            <div className="customers-badge">
              <div className="customer-text">Statisified Customers</div>
              <div className="customer-avatars">
                <div className="avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)' }}></div>
                <div className="avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)' }}></div>
                <div className="avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/67.jpg)' }}></div>
                <div className="avatar more">50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptToCreation;
