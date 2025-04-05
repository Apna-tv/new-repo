import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Mentor.css';
import logo from '../assets/logo.svg';

const Mentor = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMentee, setSelectedMentee] = useState(null);
  const [newMeeting, setNewMeeting] = useState({ 
    date: '', 
    time: '', 
    type: 'Video Call',
    category: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [showVideoChat, setShowVideoChat] = useState(false);
  
  // Mock data for demonstration
  const mentees = [
    { 
      id: 1, 
      name: 'Emily Johnson', 
      position: 'Software Developer', 
      company: 'TechStart Inc.', 
      skills: ['JavaScript', 'React', 'Node.js'], 
      experience: '3 years',
      education: 'B.S. Computer Science',
      interests: 'AI/ML, Web Development',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastActive: '2 hours ago',
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Michael Chen', 
      position: 'Product Manager', 
      company: 'InnovateCorp', 
      skills: ['Product Strategy', 'Market Research', 'UX/UI'], 
      experience: '5 years',
      education: 'MBA, Marketing',
      interests: 'SaaS, Mobile Apps',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastActive: '1 day ago',
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Sarah Wilson', 
      position: 'UX Designer', 
      company: 'DesignHub', 
      skills: ['Figma', 'User Research', 'Prototyping'], 
      experience: '4 years',
      education: 'B.A. Design',
      interests: 'Mobile UX, Design Systems',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      lastActive: '3 days ago',
      status: 'Away'
    },
    { 
      id: 4, 
      name: 'James Rodriguez', 
      position: 'Data Scientist', 
      company: 'DataSolutions LLC', 
      skills: ['Python', 'Machine Learning', 'Data Visualization'], 
      experience: '6 years',
      education: 'M.S. Data Science',
      interests: 'Big Data, Predictive Analytics',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      lastActive: '5 hours ago',
      status: 'Busy'
    }
  ];
  
  const appointments = [
    { id: 1, name: 'Emily Johnson', date: '2025-04-02', time: '10:00 AM', type: 'Video Call', category: 'Career Guidance' },
    { id: 2, name: 'Michael Chen', date: '2025-04-03', time: '2:30 PM', type: 'Video Call', category: 'Technical Review' },
    { id: 3, name: 'Sarah Wilson', date: '2025-04-05', time: '11:00 AM', type: 'Chat', category: 'Project Feedback' }
  ];
  
  // Filter mentees based on search term
  const filteredMentees = mentees.filter(mentee => 
    mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentee.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Helper functions for dashboard functionality
  const sendMessage = () => {
    if (!messageInput.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      text: messageInput,
      sender: 'mentor',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setMessageInput('');
    
    // Simulate response after 1 second
    setTimeout(() => {
      const response = {
        id: chatMessages.length + 2,
        text: `Thanks for your message. This is an automated response from ${selectedMentee.name}.`,
        sender: 'mentee',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prevMessages => [...prevMessages, response]);
    }, 1000);
  };

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    if (!selectedMentee || !newMeeting.date || !newMeeting.time || !newMeeting.category) {
      alert('Please fill in all fields');
      return;
    }

    alert('Meeting scheduled successfully!');
    setNewMeeting({ date: '', time: '', type: 'Video Call', category: '' });
  };

  const startChat = (mentee) => {
    setSelectedMentee(mentee);
    setChatMessages([
      {
        id: 1,
        text: `Hello! I'm your mentor. How can I help you today?`,
        sender: 'mentor',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setShowChat(true);
    setActiveTab('messages');
  };

  const startVideoChat = (mentee) => {
    setSelectedMentee(mentee);
    setShowVideoChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
    setShowVideoChat(false);
  };

  // Toggle between main mentor page and dashboard
  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="mentor-page">
      {/* Dashboard Toggle Button */}
      <div className="dashboard-toggle-container">
        <button className="dashboard-toggle-btn" onClick={toggleDashboard}>
          {showDashboard ? 'Exit Dashboard' : 'Mentor Dashboard'}
        </button>
      </div>
      
      {showDashboard ? (
        /* Mentor Dashboard */
        <div className="mentor-dashboard">
          {/* Dashboard Header */}
          <header className="dashboard-header">
            <div className="logo-container">
              <img src={logo} alt="Idea Ascend Logo" className="dashboard-logo" />
            </div>
            <div className="header-right">
              <div className="mentor-profile">
                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Mentor" className="mentor-avatar" />
                <span className="mentor-name">Dr. David Miller</span>
              </div>
            </div>
          </header>

          {/* Main Dashboard Content */}
          <div className="dashboard-container">
            {/* Sidebar Navigation */}
            <div className="dashboard-sidebar">
              <nav className="dashboard-nav">
                <ul>
                  <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                    <i className="fas fa-tachometer-alt"></i> Overview
                  </li>
                  <li className={activeTab === 'mentees' ? 'active' : ''} onClick={() => setActiveTab('mentees')}>
                    <i className="fas fa-users"></i> My Mentees
                  </li>
                  <li className={activeTab === 'schedule' ? 'active' : ''} onClick={() => setActiveTab('schedule')}>
                    <i className="fas fa-calendar-alt"></i> Schedule
                  </li>
                  <li className={activeTab === 'messages' ? 'active' : ''} onClick={() => setActiveTab('messages')}>
                    <i className="fas fa-comments"></i> Messages
                  </li>
                  <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
                    <i className="fas fa-cog"></i> Settings
                  </li>
                </ul>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="dashboard-content">
              {/* Dashboard Overview */}
              {activeTab === 'overview' && (
                <div className="dashboard-overview">
                  <h1>Mentor Dashboard</h1>
                  <p className="welcome-message">Welcome back, Dr. Miller! Here's your overview for today.</p>
                  
                  <div className="stats-container">
                    <div className="stat-card">
                      <div className="stat-value">4</div>
                      <div className="stat-label">Active Mentees</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">3</div>
                      <div className="stat-label">Upcoming Meetings</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">12</div>
                      <div className="stat-label">Hours this Month</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-value">4.8</div>
                      <div className="stat-label">Rating</div>
                    </div>
                  </div>
                  
                  <div className="upcoming-meetings">
                    <h2>Upcoming Meetings</h2>
                    {appointments.length > 0 ? (
                      <div className="meetings-list">
                        {appointments.map(meeting => (
                          <div key={meeting.id} className="meeting-card">
                            <div className="meeting-detail">
                              <span className="detail-label">Mentee:</span>
                              <span className="detail-value">{meeting.name}</span>
                            </div>
                            <div className="meeting-detail">
                              <span className="detail-label">Date:</span>
                              <span className="detail-value">{new Date(meeting.date).toLocaleDateString()}</span>
                            </div>
                            <div className="meeting-detail">
                              <span className="detail-label">Time:</span>
                              <span className="detail-value">{meeting.time}</span>
                            </div>
                            <div className="meeting-detail">
                              <span className="detail-label">Type:</span>
                              <span className="detail-value">{meeting.type}</span>
                            </div>
                            <div className="meeting-detail">
                              <span className="detail-label">Category:</span>
                              <span className="detail-value">{meeting.category}</span>
                            </div>
                            <div className="meeting-actions">
                              <button className="action-btn join-btn">Join</button>
                              <button className="action-btn reschedule-btn">Reschedule</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="no-meetings">No upcoming meetings scheduled.</p>
                    )}
                  </div>
                </div>
              )}
              
              {/* Mentees Section */}
              {activeTab === 'mentees' && (
                <div className="mentees-section">
                  <h1>My Mentees</h1>
                  
                  <div className="search-container">
                    <input 
                      type="text" 
                      placeholder="Search by name, position, or skills..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>
                  
                  <div className="mentees-grid">
                    {filteredMentees.length > 0 ? (
                      filteredMentees.map(mentee => (
                        <div key={mentee.id} className="mentee-card">
                          <div className="mentee-header">
                            <img src={mentee.image} alt={mentee.name} className="mentee-avatar" />
                            <div className={`status-indicator ${mentee.status.toLowerCase()}`} title={mentee.status}></div>
                          </div>
                          <h3 className="mentee-name">{mentee.name}</h3>
                          <p className="mentee-position">{mentee.position}</p>
                          <p className="mentee-company">{mentee.company}</p>
                          
                          <div className="mentee-detail">
                            <span className="detail-label">Experience:</span>
                            <span className="detail-value">{mentee.experience}</span>
                          </div>
                          <div className="mentee-detail">
                            <span className="detail-label">Education:</span>
                            <span className="detail-value">{mentee.education}</span>
                          </div>
                          
                          <div className="mentee-skills">
                            {mentee.skills.map((skill, index) => (
                              <span key={index} className="skill-tag">{skill}</span>
                            ))}
                          </div>
                          
                          <div className="mentee-actions">
                            <button onClick={() => { setSelectedMentee(mentee); setActiveTab('schedule'); }} className="action-btn schedule-btn">Schedule</button>
                            <button onClick={() => startChat(mentee)} className="action-btn chat-btn">Chat</button>
                            <button onClick={() => startVideoChat(mentee)} className="action-btn video-btn">Video Call</button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="no-mentees">No mentees found matching your search criteria.</p>
                    )}
                  </div>
                </div>
              )}

              {/* Schedule Section */}
              {activeTab === 'schedule' && (
                <div className="schedule-section">
                  <h1>Schedule Meetings</h1>
                  
                  {!selectedMentee ? (
                    <div className="select-mentee">
                      <p>Please select a mentee to schedule a meeting with:</p>
                      <div className="mentee-selection">
                        {mentees.map(mentee => (
                          <div 
                            key={mentee.id} 
                            className="mentee-option"
                            onClick={() => setSelectedMentee(mentee)}
                          >
                            <img src={mentee.image} alt={mentee.name} className="option-avatar" />
                            <div className="option-details">
                              <h4>{mentee.name}</h4>
                              <p>{mentee.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="schedule-form-container">
                      <div className="selected-mentee">
                        <img src={selectedMentee.image} alt={selectedMentee.name} className="mentee-avatar" />
                        <div className="mentee-info">
                          <h3>{selectedMentee.name}</h3>
                          <p>{selectedMentee.position} at {selectedMentee.company}</p>
                        </div>
                        <button onClick={() => setSelectedMentee(null)} className="change-mentee">Change</button>
                      </div>
                      
                      <form className="schedule-form" onSubmit={handleScheduleMeeting}>
                        <div className="form-group">
                          <label htmlFor="meeting-date">Date</label>
                          <input 
                            type="date" 
                            id="meeting-date" 
                            value={newMeeting.date}
                            onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="meeting-time">Time</label>
                          <input 
                            type="time" 
                            id="meeting-time" 
                            value={newMeeting.time}
                            onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
                            required
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="meeting-type">Meeting Type</label>
                          <select 
                            id="meeting-type"
                            value={newMeeting.type}
                            onChange={(e) => setNewMeeting({...newMeeting, type: e.target.value})}
                          >
                            <option value="Video Call">Video Call</option>
                            <option value="Chat">Chat</option>
                            <option value="Phone Call">Phone Call</option>
                          </select>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="meeting-category">Category</label>
                          <input 
                            type="text" 
                            id="meeting-category" 
                            placeholder="e.g., Career Guidance, Technical Review" 
                            value={newMeeting.category}
                            onChange={(e) => setNewMeeting({...newMeeting, category: e.target.value})}
                            required
                          />
                        </div>
                        
                        <button type="submit" className="schedule-button">Schedule Meeting</button>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* Messages Section */}
              {activeTab === 'messages' && (
                <div className="messages-section">
                  <h1>Messages</h1>
                  
                  {showChat && selectedMentee ? (
                    <div className="chat-container">
                      <div className="chat-header">
                        <div className="chat-user-info">
                          <img src={selectedMentee.image} alt={selectedMentee.name} className="chat-avatar" />
                          <div className="chat-user-details">
                            <h3>{selectedMentee.name}</h3>
                            <p>{selectedMentee.position}</p>
                          </div>
                        </div>
                        <div className="chat-actions">
                          <button onClick={() => startVideoChat(selectedMentee)} className="video-call-btn">
                            <i className="fas fa-video"></i>
                          </button>
                          <button onClick={closeChat} className="close-chat-btn">
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      
                      <div className="chat-messages">
                        {chatMessages.map(message => (
                          <div 
                            key={message.id} 
                            className={`message ${message.sender === 'mentor' ? 'sent' : 'received'}`}
                          >
                            <div className="message-content">{message.text}</div>
                            <div className="message-timestamp">{message.timestamp}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="chat-input-container">
                        <input 
                          type="text" 
                          placeholder="Type your message..." 
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                          className="chat-input"
                        />
                        <button onClick={sendMessage} className="send-btn">
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mentee-chat-list">
                      <p className="chat-instructions">Select a mentee to start chatting:</p>
                      {mentees.map(mentee => (
                        <div 
                          key={mentee.id} 
                          className="mentee-chat-option"
                          onClick={() => startChat(mentee)}
                        >
                          <img src={mentee.image} alt={mentee.name} className="chat-option-avatar" />
                          <div className="chat-option-details">
                            <h4>{mentee.name}</h4>
                            <p className="last-active">Last active: {mentee.lastActive}</p>
                          </div>
                          <div className={`chat-status ${mentee.status.toLowerCase()}`}></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Settings Section */}
              {activeTab === 'settings' && (
                <div className="settings-section">
                  <h1>Settings</h1>
                  <p>Configure your mentor profile and preferences.</p>
                  
                  <div className="settings-form">
                    <div className="settings-group">
                      <h3>Profile Settings</h3>
                      <div className="form-group">
                        <label htmlFor="mentor-name">Your Name</label>
                        <input type="text" id="mentor-name" defaultValue="Dr. David Miller" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mentor-title">Professional Title</label>
                        <input type="text" id="mentor-title" defaultValue="Senior Technical Mentor" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mentor-bio">Biography</label>
                        <textarea id="mentor-bio" rows="4" defaultValue="Experienced technology leader with 15+ years in software development and leadership roles."></textarea>
                      </div>
                    </div>
                    
                    <div className="settings-group">
                      <h3>Notification Preferences</h3>
                      <div className="form-check">
                        <input type="checkbox" id="email-notifications" defaultChecked />
                        <label htmlFor="email-notifications">Email Notifications</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" id="meeting-reminders" defaultChecked />
                        <label htmlFor="meeting-reminders">Meeting Reminders</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" id="new-mentee-alerts" defaultChecked />
                        <label htmlFor="new-mentee-alerts">New Mentee Requests</label>
                      </div>
                    </div>
                    
                    <div className="settings-group">
                      <h3>Availability</h3>
                      <div className="form-group">
                        <label htmlFor="workdays">Available Days</label>
                        <select id="workdays" multiple>
                          <option value="monday" selected>Monday</option>
                          <option value="tuesday" selected>Tuesday</option>
                          <option value="wednesday" selected>Wednesday</option>
                          <option value="thursday" selected>Thursday</option>
                          <option value="friday" selected>Friday</option>
                          <option value="saturday">Saturday</option>
                          <option value="sunday">Sunday</option>
                        </select>
                      </div>
                      <div className="time-range">
                        <div className="form-group">
                          <label htmlFor="start-time">Start Time</label>
                          <input type="time" id="start-time" defaultValue="09:00" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="end-time">End Time</label>
                          <input type="time" id="end-time" defaultValue="17:00" />
                        </div>
                      </div>
                    </div>
                    
                    <button className="save-settings">Save Settings</button>
                  </div>
                </div>
              )}
              
              {/* Video Chat Modal */}
              {showVideoChat && selectedMentee && (
                <div className="video-chat-modal">
                  <div className="video-chat-container">
                    <div className="video-chat-header">
                      <h3>Video Call with {selectedMentee.name}</h3>
                      <button onClick={closeChat} className="close-video-btn">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    
                    <div className="video-area">
                      <div className="main-video">
                        <div className="placeholder-video">
                          <i className="fas fa-user"></i>
                          <p>Waiting to connect...</p>
                        </div>
                      </div>
                      
                      <div className="self-video">
                        <div className="placeholder-video self">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div className="video-controls">
                      <button className="control-btn mute-btn">
                        <i className="fas fa-microphone"></i>
                      </button>
                      <button className="control-btn video-toggle-btn">
                        <i className="fas fa-video"></i>
                      </button>
                      <button className="control-btn share-screen-btn">
                        <i className="fas fa-desktop"></i>
                      </button>
                      <button className="control-btn end-call-btn">
                        <i className="fas fa-phone-slash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Other tabs will be added in subsequent edits */}
              {!['overview', 'mentees', 'schedule', 'messages', 'settings'].includes(activeTab) && (
                <div className="tab-placeholder">
                  <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                  <p>This section will be implemented in the next update.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Regular Mentor page content */
        <>
          <div className="mentor-header-section">
            <div className="filter-container">
              <div className="filter-row">
                <div className="filter-label">Categories</div>
                <div className="filter-options">
                  <button className="filter-option">ALL</button>
                  <button className="filter-option">IT,Software</button>
                  <button className="filter-option">Management and Business</button>
                  <button className="filter-option">Electronics and Hardware</button>
                  <button className="filter-option">BIO tech and Pharma</button>
                  <button className="filter-option">Others</button>
                </div>
              </div>
              
              <div className="filter-row">
                <div className="filter-label">Role/designation</div>
                <div className="filter-options">
                  <button className="filter-option">ALL</button>
                  <button className="filter-option">SDE</button>
                  <button className="filter-option">Product Manager</button>
                  <button className="filter-option">Sales and Marketing</button>
                  <button className="filter-option">Design and UI/UX</button>
                  <button className="filter-option">Operation & Finance</button>
                  <button className="filter-option">Others</button>
                </div>
              </div>
              
              <div className="filter-row">
                <div className="filter-label">Rating</div>
                <div className="filter-options">
                  <button className="filter-option">ALL</button>
                  <button className="filter-option">&#62;3.5/5.0 ★</button>
                  <button className="filter-option">&#62;4.0/5.0 ★</button>
                  <button className="filter-option">&#62;4.5/5.0 ★</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Meet Our Smart People Section */}
          <div className="team-section">
            <div className="team-container">
              <div className="section-subtitle">Our Team</div>
              <h2 className="section-title">Meet Our <span className="highlight">Smart People.</span></h2>
              
              <div className="team-grid">
                {/* Team Member 1 */}
                <div className="team-member">
                  <div className="member-image"></div>
                  <h3 className="member-name">Jonathan Andrew</h3>
                  <p className="member-expertise">Expertise in finance and tech</p>
                  <p className="member-experience">10+ year experience</p>
                  <p className="member-position">Product Manager</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                
                {/* Team Member 2 */}
                <div className="team-member">
                  <div className="member-image"></div>
                  <h3 className="member-name">Jonathan Andrew</h3>
                  <p className="member-expertise">Expertise in finance and tech</p>
                  <p className="member-experience">10+ year experience</p>
                  <p className="member-position">Product Manager</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                
                {/* Team Member 3 */}
                <div className="team-member">
                  <div className="member-image"></div>
                  <h3 className="member-name">Jonathan Andrew</h3>
                  <p className="member-expertise">Expertise in finance and tech</p>
                  <p className="member-experience">10+ year experience</p>
                  <p className="member-position">Product Manager</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                
                {/* Team Member 4 */}
                <div className="team-member">
                  <div className="member-image"></div>
                  <h3 className="member-name">Jonathan Andrew</h3>
                  <p className="member-expertise">Expertise in finance and tech</p>
                  <p className="member-experience">10+ year experience</p>
                  <p className="member-position">Product Manager</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                
                {/* Team Member 5 */}
                <div className="team-member">
                  <div className="member-image"></div>
                  <h3 className="member-name">Jonathan Andrew</h3>
                  <p className="member-expertise">Expertise in finance and tech</p>
                  <p className="member-experience">10+ year experience</p>
                  <p className="member-position">Product Manager</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                
                {/* Team Member 6 */}
                <div className="team-member">
                  <div className="member-image"></div>
                  <h3 className="member-name">Jonathan Andrew</h3>
                  <p className="member-expertise">Expertise in finance and tech</p>
                  <p className="member-experience">10+ year experience</p>
                  <p className="member-position">Product Manager</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Mentor's Review Section */}
          <div className="mentor-review-section">
            <div className="review-content">
              <h2>Join us as a Mentor</h2>
              <button className="feedback-btn">Register here</button>
            </div>
          </div>
          
          {/* Mentorship Services Section */}
          <div className="mentorship-services">
            <div className="services-container">
              <div className="service-category">Mentorship Services</div>
              
              <div className="service-heading-container">
                {/* <div className="service-heading">
                  <h2>Providing 1:1 Mentorship and build confidence</h2>
                  <p>Help businesses improve their operations, achieve their goals, and stay competitive in today's.</p>
                  <button className="view-all-btn">VIEW ALL</button>
                </div> */}
              
                <div className="services-grid">
                <div className="service-item">
                    <div className="service-icon strategic-icon"></div>
                    <h3>Providing 1:1 Mentorship and build confidence</h3>
                    <p>Help businesses improve their operations, achieve their goals, and stay competitive in today's.</p>
                    <a href="#" className="learn-more">Learn More <span className="arrow">→</span></a>
                  </div>

                  <div className="service-item">
                    <div className="service-icon strategic-icon"></div>
                    <h3>Tailored Guidance and In-Depth Problem Solving</h3>
                    <p>Business consultants can assist clients in developing long-term strategic plans to achieve their goals.</p>
                    <a href="#" className="learn-more">Learn More <span className="arrow">→</span></a>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-icon feedback-icon"></div>
                    <h3>Accelerated Learning & Actionable Feedback</h3>
                    <p>Conduct thorough market research to provide insights into market trends, customer behaviors, and others.</p>
                    <a href="#" className="learn-more">Learn More <span className="arrow">→</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content section for mentor profiles would go here */}
          <div className="mentor-content">
            {/* Will add mentor profiles and content here */}
          </div>

          <div className="testimonials-section">
           <h2 className="testimonials-title">What our Industry experts are saying about us?</h2>
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
        </>
      )}
    </div>
  );
};

export default Mentor;
