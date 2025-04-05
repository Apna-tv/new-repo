import React from 'react';
import Footer from '../components/Footer';
import './FoundersTeam.css';
import logo from '../assets/logo.svg';

const FoundersTeam = () => {
  return (
    <div className="founders-team-page">
      <div className="founders-header-section">
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="🔍" 
          />
        </div>
        
        <div className="filter-categories">
          <div className="filter-section">
            <button className="filter-category main-category">Categories</button>
            <div className="stage-filters">
              <button className="filter-button">Early Stage</button>
              <button className="filter-button">Growth Stage</button>
              <button className="filter-button">Expansion Stage</button>
            </div>
          </div>
          
          <div className="filter-section">
            <button className="filter-category main-category">Working Experience</button>
            <div className="experience-filters">
              <button className="filter-button">Freshers</button>
              <button className="filter-button">1-2 year</button>
              <button className="filter-button">3-4 year</button>
              <button className="filter-button">5 year+</button>
              <button className="filter-button">work on startup</button>
            </div>
          </div>
          
          <div className="filter-section">
            <button className="filter-category main-category">Team roles</button>
            <div className="role-filters">
              <button className="filter-button">SDE</button>
              <button className="filter-button">Design and UI/UX</button>
              <button className="filter-button">Product Manager</button>
              <button className="filter-button">Operation & Finance</button>
              <button className="filter-button">Sales and Marketing</button>
              <button className="filter-button">Others</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dream-team-section">
        <div className="team-label">TEAM</div>
        <h1 className="dream-team-title">Build your Dream Team</h1>
        
        <div className="team-members-grid">
          {/* Team member card 1 */}
          <div className="team-member-card">
            <div className="card-content">
              <div className="member-photo">
                {/* Placeholder for team member photo */}
                <div className="photo-placeholder"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Jonathan Andrew</h3>
                <div className="member-role">
                  <span className="role-title">SDE</span>
                  <span className="company-handle"> @XYZ</span>
                </div>
                <p className="member-experience">5yr+ Experience</p>
                <p className="member-position">Co-founder at XYZ, Indore</p>
                <div className="member-buttons">
                  <button className="resume-btn">RESUME</button>
                  <button className="chat-btn">CHAT</button>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team member card 2 */}
          <div className="team-member-card">
            <div className="card-content">
              <div className="member-photo">
                {/* Placeholder for team member photo */}
                <div className="photo-placeholder"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Jonathan Andrew</h3>
                <div className="member-role">
                  <span className="role-title">SDE</span>
                  <span className="company-handle"> @XYZ</span>
                </div>
                <p className="member-experience">5yr+ Experience</p>
                <p className="member-position">Co-founder at XYZ, Indore</p>
                <div className="member-buttons">
                  <button className="resume-btn">RESUME</button>
                  <button className="chat-btn">CHAT</button>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team member card 3 */}
          <div className="team-member-card">
            <div className="card-content">
              <div className="member-photo">
                {/* Placeholder for team member photo */}
                <div className="photo-placeholder"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Jonathan Andrew</h3>
                <div className="member-role">
                  <span className="role-title">SDE</span>
                  <span className="company-handle"> @XYZ</span>
                </div>
                <p className="member-experience">5yr+ Experience</p>
                <p className="member-position">Co-founder at XYZ, Indore</p>
                <div className="member-buttons">
                  <button className="resume-btn">RESUME</button>
                  <button className="chat-btn">CHAT</button>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team member card 4 */}
          <div className="team-member-card">
            <div className="card-content">
              <div className="member-photo">
                {/* Placeholder for team member photo */}
                <div className="photo-placeholder"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Jonathan Andrew</h3>
                <div className="member-role">
                  <span className="role-title">SDE</span>
                  <span className="company-handle"> @XYZ</span>
                </div>
                <p className="member-experience">5yr+ Experience</p>
                <p className="member-position">Co-founder at XYZ, Indore</p>
                <div className="member-buttons">
                  <button className="resume-btn">RESUME</button>
                  <button className="chat-btn">CHAT</button>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Collaboration Opportunities Section */}
      <div className="collaboration-section">
        <div className="collaboration-container">
          <div className="collaboration-label">Founders Team Features</div>
          
          {/* <div className="collaboration-header"> */}
            {/* <div className="header-content">
              <h2 className="collaboration-title">Enhanced Collaboration Opportunities</h2>
              <p className="collaboration-subtitle">
                Help businesses improve their operations, achieve their goals, and stay competitive in today's.
              </p>
              <button className="view-all-btn">VIEW ALL</button>
            </div> */}
          {/* </div> */}
          
          
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <div className="opportunity-icon skill-icon"></div>
              <h3 className="opportunity-title">Enhanced Collaboration Opportunities</h3>
              <p className="opportunity-description">
              Help businesses improve their operations, achieve their goals, and stay competitive in today's.
              </p>
              <a href="#" className="learn-more-link">
                Learn More <span className="arrow-icon">→</span>
              </a>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-icon skill-icon"></div>
              <h3 className="opportunity-title">Complementary Skill Matching & Improved Success Rates</h3>
              <p className="opportunity-description">
                Business consultants can assist clients in developing long-term strategic plans to achieve their goals.
              </p>
              <a href="#" className="learn-more-link">
                Learn More <span className="arrow-icon">→</span>
              </a>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon efficiency-icon"></div>
              <h3 className="opportunity-title">Personalized Matching & increase Time efficiency</h3>
              <p className="opportunity-description">
                Conduct thorough market research to provide insights into market trends, customer behaviors, and others.
              </p>
              <a href="#" className="learn-more-link">
                Learn More <span className="arrow-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="testimonials-section">
       <h2 className="testimonials-title">What our Job seekers are saying about us?</h2>
        <p className="testimonials-subtitle">Discover how Idea Ascend has helped businesses across industries achieve their goals and transform their operations.</p> 
          
        <div className="testimonials-container">
          {/* <h2 className="testimonials-title">What our customers are saying about us?</h2>
          <p className="testimonials-subtitle">Discover how Idea Ascend has helped businesses across industries achieve their goals and transform their operations.</p>  */}
          
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
      <Footer />
    </div>
  );
};

export default FoundersTeam;
