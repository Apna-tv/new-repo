import React, { useState } from 'react';
import './AscendBotInterface.css';

const AscendBotInterface = () => {
  const [email, setEmail] = useState('');
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : 
                  currentHour < 18 ? 'Good afternoon' : 'Good evening';
  
  return (
    <div className="ascend-bot-container">
      <div className="ascend-bot-content">
        <div className="bot-left-section">
          <div className="bot-badge">• ASCEND BOT</div>
          
          <h2 className="bot-heading">
            Your ideas,<br />amplified
          </h2>
          
          <p className="bot-description">
            Privacy-first AI that helps you create in confidence.
          </p>
          
          <div className="login-container">
            <button className="google-login">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
              Continue with Google
            </button>
            
            <div className="or-divider">OR</div>
            
            <div className="email-login">
              <input 
                type="email" 
                placeholder="Enter your personal or work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="email-button">Continue with email</button>
            </div>
            
            <p className="terms-text">
              By continuing, you agree to Anthropic's <a href="#" className="terms-link">Consumer Terms and Usage Policy</a>, and acknowledge their <a href="#" className="terms-link">Privacy Policy</a>.
            </p>
          </div>
          
          <button className="learn-more-button">Learn more ↓</button>
        </div>
        
        <div className="bot-right-section">
          <div className="bot-header">
            <div className="light-bulb">💡</div>
            <h3 className="greeting">{greeting}, Priyanshu</h3>
          </div>
          
          <div className="chat-container">
            <input type="text" placeholder="How can I help you today?" className="chat-input" />
            <div className="chat-options">
              <div className="option-row">
                <div className="option-selector">
                  <span className="option-label">Soch - V1</span>
                </div>
                <div className="style-selector">
                  <span className="style-selector-text">Choose style</span>
                </div>
              </div>
              
              <div className="collaboration-text">
                Collaborate with Claude using documents, images, and more
              </div>
              
              <div className="suggestion-grid">
                <div className="suggestion-item">
                  Generate interview questions
                </div>
                <div className="suggestion-item">
                  Write a memo
                </div>
                <div className="suggestion-item">
                  Summarize meeting notes
                </div>
              </div>
            </div>
          </div>
          
          <div className="recent-chats">
            <div className="recent-header">
              <div className="recent-title">
                <span className="recent-icon">🔍</span>
                Your recent chats
              </div>
              <a href="#" className="view-all">View all →</a>
            </div>
            
            <div className="chat-grid">
              <div className="chat-item">
                <span className="chat-icon">💡</span>
                <div className="chat-title">Enabling Light Mode in Claude</div>
                <div className="chat-time">3 minutes ago</div>
              </div>
              
              <div className="chat-item">
                <span className="chat-icon">💬</span>
                <div className="chat-title">(New chat)</div>
                <div className="chat-time">10 days ago</div>
              </div>
              
              <div className="chat-item">
                <span className="chat-icon">🌡️</span>
                <div className="chat-title">Integrated Multi-Sensor Air Quality Monitoring</div>
                <div className="chat-time">1 month ago</div>
              </div>
              
              <div className="chat-item">
                <span className="chat-icon">📊</span>
                <div className="chat-title">Arduino MQ-135 Air Quality Monitoring</div>
                <div className="chat-time">1 month ago</div>
              </div>
              
              <div className="chat-item">
                <span className="chat-icon">📚</span>
                <div className="chat-title">Implement Stack using Queues</div>
                <div className="chat-time">1 month ago</div>
              </div>
              
              <div className="chat-item">
                <span className="chat-icon">🌲</span>
                <div className="chat-title">Maximum Depth of Binary Tree</div>
                <div className="chat-time">1 month ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AscendBotInterface;
