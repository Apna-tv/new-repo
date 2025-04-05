import React, { useState } from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designation",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    text: "Their strategic insights and personalized approach have been invaluable to our success. I highly recommend their services to any business looking to take their tions."
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Designation",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
    text: "Their strategic insights and personalized approach have been invaluable to our success. I highly recommend their services to any business looking to take their tions."
  },
  {
    id: 3,
    name: "John Doe",
    designation: "Designation",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4.5,
    text: "Their strategic insights and personalized approach have been invaluable to our success. I highly recommend their services to any business looking to take their tions."
  }
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="testimonials-section">
      <h2>What our customers are saying about us?</h2>
      
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className="testimonial-card"
          >
            <div className="testimonial-profile">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p className="designation">{testimonial.designation}</p>
              </div>
            </div>
            
            {/* <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < Math.floor(testimonial.rating) ? 'filled' : ''}`}>★</span>
              ))}
            </div> */}
            
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
      
      <div className="testimonial-dots">
        {testimonialData.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
