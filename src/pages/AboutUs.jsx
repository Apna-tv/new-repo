import React from 'react';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-header">
        <div className="about-us-container">
          <h1 className="about-us-title">What work is done at idea ascend?</h1>
          
          <p className="about-us-description">
            We understand the challenges and complexities that businesses
            face in today's dynamic marketplace. That's why we offer a
            comprehensive suite of consulting services.
          </p>
          
          <p className="about-us-values">
            Founded on the principles of innovation, integrity, and excellence,
            we are a team of seasoned professionals.
          </p>
          
          <button className="read-more-btn">READ MORE</button>
        </div>
      </div>
      
      <div className="why-idea-ascend">
        <div className="why-container">
          <h2 className="why-title">Why idea Ascend?</h2>
          
          <p className="why-description">
            we understand the challenges and complexities that businesses
            face in today's dynamic marketplace. That's why we offer a
            comprehensive suite of consulting services.
          </p>
          
          <p className="why-values">
            Founded on the principles of innovation, integrity, and excellence,
            we are a team of seasoned professionals.
          </p>
          
          <button className="why-read-more-btn">READ MORE</button>
          
          <div className="separator-line"></div>
        </div>
      </div>
      
      <div className="vision-mission">
        <div className="vision-container">
          <h2 className="vision-title">Vision and Mission.</h2>
          
          <p className="vision-description">
            we understand the challenges and complexities that businesses
            face in today's dynamic marketplace. That's why we offer a
            comprehensive suite of consulting services.
          </p>
          
          <p className="vision-values">
            Founded on the principles of innovation, integrity, and excellence,
            we are a team of seasoned professionals.
          </p>
          
          <button className="vision-read-more-btn">READ MORE</button>
        </div>
      </div>
      
      <div className="recent-articles">
        <div className="articles-container">
          <p className="blogs-label">Blogs</p>
          <h2 className="articles-title">Recent Articles & News</h2>
          
          <p className="articles-description">
            Our blog is your go-to resource for staying updated on the key insights, practical tips, and
            industry trends to fuel your startup's growth.
          </p>
          
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://picsum.photos/id/42/400/300" alt="Interactive content" />
                <span className="blog-category">Interactive content</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">All services in the website are open now</h3>
                <div className="blog-footer">
                  <span className="blog-date">April 26, 2024</span>
                  <a href="#" className="read-more-link">Read More →</a>
                </div>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://picsum.photos/id/26/400/300" alt="Digital Marketing" />
                <span className="blog-category">Digital Marketing</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">Onboards 50+ industry experts which help in mentorship</h3>
                <div className="blog-footer">
                  <span className="blog-date">April 26, 2024</span>
                  <a href="#" className="read-more-link">Read More →</a>
                </div>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://picsum.photos/id/96/400/300" alt="Marketing Tools" />
                <span className="blog-category">Marketing Tools</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">Founder's can build team by hiring skilled and aspiring peoples</h3>
                <div className="blog-footer">
                  <span className="blog-date">April 26, 2024</span>
                  <a href="#" className="read-more-link">Read More →</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="view-all-container">
            <button className="view-all-btn">VIEW ALL POSTS</button>
          </div>
        </div>
      </div>
      
      <div className="testimonials-section">
       <h2 className="testimonials-title">What our team is saying about us?</h2>
        <p className="testimonials-subtitle">Discover how Idea Ascend has helped businesses across industries achieve their goals and transform their operations.</p> 
          
        <div className="testimonials-container">
          {/* <h2 className="testimonials-title">What our customers are saying about us?</h2>
          <p className="testimonials-subtitle">Discover how Idea Ascend has helped businesses across industries achieve their goals and transform their operations.</p> */}
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="profile-image" />
                <div className="profile-info">
                  <h3 className="profile-name">John Doe</h3>
                  <p className="profile-designation">CEO at TechFirm</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Their strategic insights and personalized approach have been invaluable to our success. I highly recommend their services to any business looking to take their operations to the next level."
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" className="profile-image" />
                <div className="profile-info">
                  <h3 className="profile-name">Jane Smith</h3>
                  <p className="profile-designation">Marketing Director</p>
                </div>
              </div>
              <p className="testimonial-text">
                "The team at Idea Ascend delivered beyond our expectations. Their market analysis transformed our approach and helped us identify new opportunities we hadn't considered before."
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="James Wilson" className="profile-image" />
                <div className="profile-info">
                  <h3 className="profile-name">James Wilson</h3>
                  <p className="profile-designation">Startup Founder</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Working with Idea Ascend was a game-changer for our startup. Their guidance on business strategy and funding options helped us secure our first major investment round."
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
      </div>
      
      <div className="about-us-content">
        <div className="content-container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Business Strategy</h3>
              <p>Comprehensive strategic planning to align your business goals with market opportunities and organizational capabilities.</p>
            </div>
            
            <div className="service-card">
              <h3>Market Research</h3>
              <p>In-depth analysis of market trends, consumer behavior, and competitive landscapes to inform decision-making.</p>
            </div>
            
            <div className="service-card">
              <h3>Digital Transformation</h3>
              <p>Guidance on leveraging digital technologies to optimize operations, enhance customer experiences, and drive innovation.</p>
            </div>
            
            <div className="service-card">
              <h3>Startup Mentoring</h3>
              <p>Personalized mentorship for early-stage startups, covering everything from ideation to funding acquisition.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
