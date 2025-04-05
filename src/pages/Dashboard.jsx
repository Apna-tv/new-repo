import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // This would come from authentication context in a real app
  const [userData, setUserData] = useState({
    name: 'Jane Doe',
    role: 'founder', // 'founder', 'mentor', 'investor', 'user'
    email: 'jane.doe@example.com',
    profileImage: null,
    joined: new Date(2024, 2, 15).toLocaleDateString(),
    lastActive: new Date().toLocaleDateString()
  });

  // Mock data for different user roles
  const [dashboardData, setDashboardData] = useState({
    founder: {
      startupName: 'InnoTech Solutions',
      stage: 'Early Stage',
      domain: 'Technology',
      funding: '$150,000',
      mentorApplications: 4,
      investorInterests: 2,
      completedTasks: 7,
      pendingTasks: 3,
      teamMembers: 5,
      announcements: [
        {
          id: 1,
          title: 'New Investor Interest',
          content: 'An investor has shown interest in your startup. Check your messages.',
          date: '2025-04-02'
        },
        {
          id: 2,
          title: 'Pitch Competition',
          content: 'Upcoming pitch competition on April 15. Register by April 10.',
          date: '2025-04-01'
        }
      ]
    },
    mentor: {
      expertise: ['Business Strategy', 'Marketing', 'Product Development'],
      totalMentees: 8,
      activeMentees: 5,
      pendingRequests: 3,
      sessionsThisMonth: 12,
      totalHours: 24,
      upcomingSessions: [
        {
          id: 1,
          startupsName: 'GreenTech',
          date: '2025-04-05',
          time: '10:00 AM'
        },
        {
          id: 2,
          startupsName: 'FinSmart',
          date: '2025-04-07',
          time: '3:30 PM'
        }
      ]
    },
    investor: {
      totalInvestments: 5,
      portfolioValue: '$750,000',
      averageReturn: '8.5%',
      investmentDomains: ['FinTech', 'HealthTech', 'EdTech'],
      potentialStartups: 7,
      upcomingPitches: [
        {
          id: 1,
          startupsName: 'AI Solutions',
          date: '2025-04-10',
          time: '2:00 PM'
        },
        {
          id: 2,
          startupsName: 'EcoFriendly',
          date: '2025-04-12',
          time: '11:00 AM'
        }
      ]
    },
    user: {
      savedJobs: 6,
      appliedJobs: 3,
      interests: ['Development', 'Design', 'Product Management'],
      savedStartups: 4,
      networkConnections: 12,
      recommendedEvents: [
        {
          id: 1,
          title: 'Tech Networking Mixer',
          date: '2025-04-15',
          location: 'Virtual'
        },
        {
          id: 2,
          title: 'Job Fair for Startups',
          date: '2025-04-20',
          location: 'Innovation Hub'
        }
      ]
    }
  });

  const handleRoleChange = (e) => {
    // For demo purposes - allows switching between roles
    setUserData({
      ...userData,
      role: e.target.value
    });
  };

  return (
    <div className="dashboard-page">
      {/* Role Switcher (for demo only) */}
      <div className="role-switcher">
        <label>
          Demo: View as
          <select value={userData.role} onChange={handleRoleChange}>
            <option value="founder">Founder</option>
            <option value="mentor">Mentor</option>
            <option value="investor">Investor</option>
            <option value="user">User</option>
          </select>
        </label>
      </div>

      <div className="dashboard-header">
        <div className="user-welcome">
          <h1>Welcome, {userData.name}</h1>
          <p className="role-label">
            {userData.role === 'founder' && 'Founder Dashboard'}
            {userData.role === 'mentor' && 'Mentor Dashboard'}
            {userData.role === 'investor' && 'Investor Dashboard'}
            {userData.role === 'user' && 'User Dashboard'}
          </p>
        </div>
        <div className="quick-actions">
          <Link to="/profile" className="action-button">
            <i className="icon profile-icon"></i>
            Edit Profile
          </Link>
          {userData.role === 'founder' && (
            <Link to="/my-startup" className="action-button">
              <i className="icon startup-icon"></i>
              Manage Startup
            </Link>
          )}
          {userData.role === 'mentor' && (
            <Link to="/mentees" className="action-button">
              <i className="icon mentees-icon"></i>
              View Mentees
            </Link>
          )}
          {userData.role === 'investor' && (
            <Link to="/investments" className="action-button">
              <i className="icon investment-icon"></i>
              My Investments
            </Link>
          )}
          {userData.role === 'user' && (
            <Link to="/saved-jobs" className="action-button">
              <i className="icon jobs-icon"></i>
              Saved Jobs
            </Link>
          )}
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-image">
                {userData.profileImage ? (
                  <img src={userData.profileImage} alt="Profile" />
                ) : (
                  <div className="profile-initials">
                    {userData.name.split(' ').map(name => name[0]).join('')}
                  </div>
                )}
              </div>
              <div className="profile-info">
                <h3>{userData.name}</h3>
                <p className="user-role">
                  {userData.role === 'founder' && 'Founder'}
                  {userData.role === 'mentor' && 'Mentor'}
                  {userData.role === 'investor' && 'Investor'}
                  {userData.role === 'user' && 'User'}
                </p>
              </div>
            </div>
            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{userData.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Joined</span>
                <span className="detail-value">{userData.joined}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Active</span>
                <span className="detail-value">{userData.lastActive}</span>
              </div>
            </div>
            <Link to="/profile" className="edit-profile-link">
              Edit Profile
            </Link>
          </div>

          <div className="navigation-menu">
            <h3>Quick Navigation</h3>
            <ul>
              <li><Link to="/dashboard" className="active">Dashboard</Link></li>
              <li><Link to="/profile">Profile Settings</Link></li>
              {userData.role === 'founder' && (
                <>
                  <li><Link to="/my-startup">My Startup</Link></li>
                  <li><Link to="/find-mentors">Find Mentors</Link></li>
                  <li><Link to="/find-investors">Find Investors</Link></li>
                </>
              )}
              {userData.role === 'mentor' && (
                <>
                  <li><Link to="/mentees">My Mentees</Link></li>
                  <li><Link to="/session-history">Session History</Link></li>
                  <li><Link to="/mentor-requests">Mentorship Requests</Link></li>
                </>
              )}
              {userData.role === 'investor' && (
                <>
                  <li><Link to="/investments">My Investments</Link></li>
                  <li><Link to="/potential-startups">Potential Startups</Link></li>
                  <li><Link to="/investment-analytics">Investment Analytics</Link></li>
                </>
              )}
              {userData.role === 'user' && (
                <>
                  <li><Link to="/saved-jobs">Saved Jobs</Link></li>
                  <li><Link to="/job-applications">Job Applications</Link></li>
                  <li><Link to="/saved-startups">Saved Startups</Link></li>
                </>
              )}
              <li><Link to="/messages">Messages</Link></li>
              <li><Link to="/notifications">Notifications</Link></li>
            </ul>
          </div>
        </div>

        <div className="dashboard-main">
          {/* Founder Dashboard */}
          {userData.role === 'founder' && (
            <>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Startup Stage</h3>
                  <p className="stat-value">{dashboardData.founder.stage}</p>
                </div>
                <div className="stat-card">
                  <h3>Domain</h3>
                  <p className="stat-value">{dashboardData.founder.domain}</p>
                </div>
                <div className="stat-card">
                  <h3>Current Funding</h3>
                  <p className="stat-value">{dashboardData.founder.funding}</p>
                </div>
                <div className="stat-card">
                  <h3>Team Size</h3>
                  <p className="stat-value">{dashboardData.founder.teamMembers}</p>
                </div>
              </div>

              <div className="dashboard-widgets">
                <div className="widget">
                  <div className="widget-header">
                    <h3>Mentor Applications</h3>
                    <Link to="/mentor-applications" className="view-all">View All</Link>
                  </div>
                  <div className="widget-content">
                    <div className="metric">
                      <span className="metric-value">{dashboardData.founder.mentorApplications}</span>
                      <span className="metric-label">Applications</span>
                    </div>
                    <button className="widget-action-btn">Review Applications</button>
                  </div>
                </div>

                <div className="widget">
                  <div className="widget-header">
                    <h3>Investor Interest</h3>
                    <Link to="/investor-interests" className="view-all">View All</Link>
                  </div>
                  <div className="widget-content">
                    <div className="metric">
                      <span className="metric-value">{dashboardData.founder.investorInterests}</span>
                      <span className="metric-label">Interested Investors</span>
                    </div>
                    <button className="widget-action-btn">View Details</button>
                  </div>
                </div>

                <div className="widget">
                  <div className="widget-header">
                    <h3>Tasks</h3>
                    <Link to="/tasks" className="view-all">View All</Link>
                  </div>
                  <div className="widget-content">
                    <div className="metric">
                      <span className="metric-value">{dashboardData.founder.completedTasks}/{dashboardData.founder.completedTasks + dashboardData.founder.pendingTasks}</span>
                      <span className="metric-label">Completed</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${(dashboardData.founder.completedTasks / (dashboardData.founder.completedTasks + dashboardData.founder.pendingTasks)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="announcements-section">
                <h3>Recent Announcements</h3>
                <div className="announcements-list">
                  {dashboardData.founder.announcements.map(announcement => (
                    <div className="announcement-card" key={announcement.id}>
                      <h4>{announcement.title}</h4>
                      <p>{announcement.content}</p>
                      <span className="announcement-date">{new Date(announcement.date).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Mentor Dashboard */}
          {userData.role === 'mentor' && (
            <>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Active Mentees</h3>
                  <p className="stat-value">{dashboardData.mentor.activeMentees}</p>
                </div>
                <div className="stat-card">
                  <h3>Pending Requests</h3>
                  <p className="stat-value">{dashboardData.mentor.pendingRequests}</p>
                </div>
                <div className="stat-card">
                  <h3>Sessions This Month</h3>
                  <p className="stat-value">{dashboardData.mentor.sessionsThisMonth}</p>
                </div>
                <div className="stat-card">
                  <h3>Total Hours</h3>
                  <p className="stat-value">{dashboardData.mentor.totalHours}</p>
                </div>
              </div>

              <div className="expertise-section">
                <h3>Your Expertise</h3>
                <div className="expertise-tags">
                  {dashboardData.mentor.expertise.map((skill, index) => (
                    <span className="expertise-tag" key={index}>{skill}</span>
                  ))}
                  <button className="add-expertise">+ Add</button>
                </div>
              </div>

              <div className="upcoming-sessions">
                <div className="section-header">
                  <h3>Upcoming Mentoring Sessions</h3>
                  <Link to="/sessions" className="view-all">View All</Link>
                </div>
                <div className="sessions-list">
                  {dashboardData.mentor.upcomingSessions.map(session => (
                    <div className="session-card" key={session.id}>
                      <div className="session-info">
                        <h4>{session.startupsName}</h4>
                        <div className="session-meta">
                          <span className="session-date">{new Date(session.date).toLocaleDateString()}</span>
                          <span className="session-time">{session.time}</span>
                        </div>
                      </div>
                      <div className="session-actions">
                        <button className="session-btn primary">Join</button>
                        <button className="session-btn secondary">Reschedule</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="widget mentorship-stats">
                <div className="widget-header">
                  <h3>Mentorship Overview</h3>
                </div>
                <div className="widget-content">
                  <div className="mentorship-stat">
                    <span className="stat-label">Total Mentees</span>
                    <span className="stat-value">{dashboardData.mentor.totalMentees}</span>
                  </div>
                  <div className="mentorship-stat">
                    <span className="stat-label">Active Mentorships</span>
                    <span className="stat-value">{dashboardData.mentor.activeMentees}</span>
                  </div>
                  <div className="mentorship-stat">
                    <span className="stat-label">Completion Rate</span>
                    <span className="stat-value">92%</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Investor Dashboard */}
          {userData.role === 'investor' && (
            <>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Investments</h3>
                  <p className="stat-value">{dashboardData.investor.totalInvestments}</p>
                </div>
                <div className="stat-card">
                  <h3>Portfolio Value</h3>
                  <p className="stat-value">{dashboardData.investor.portfolioValue}</p>
                </div>
                <div className="stat-card">
                  <h3>Average Return</h3>
                  <p className="stat-value">{dashboardData.investor.averageReturn}</p>
                </div>
                <div className="stat-card">
                  <h3>Potential Startups</h3>
                  <p className="stat-value">{dashboardData.investor.potentialStartups}</p>
                </div>
              </div>

              <div className="investment-domains">
                <h3>Investment Domains</h3>
                <div className="domain-tags">
                  {dashboardData.investor.investmentDomains.map((domain, index) => (
                    <span className="domain-tag" key={index}>{domain}</span>
                  ))}
                  <button className="add-domain">+ Add</button>
                </div>
              </div>

              <div className="upcoming-pitches">
                <div className="section-header">
                  <h3>Upcoming Pitch Sessions</h3>
                  <Link to="/pitches" className="view-all">View All</Link>
                </div>
                <div className="pitches-list">
                  {dashboardData.investor.upcomingPitches.map(pitch => (
                    <div className="pitch-card" key={pitch.id}>
                      <div className="pitch-info">
                        <h4>{pitch.startupsName}</h4>
                        <div className="pitch-meta">
                          <span className="pitch-date">{new Date(pitch.date).toLocaleDateString()}</span>
                          <span className="pitch-time">{pitch.time}</span>
                        </div>
                      </div>
                      <div className="pitch-actions">
                        <button className="pitch-btn primary">Join</button>
                        <button className="pitch-btn secondary">Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="widget portfolio-performance">
                <div className="widget-header">
                  <h3>Portfolio Performance</h3>
                </div>
                <div className="widget-content">
                  <div className="chart-placeholder">
                    <p>Portfolio performance chart</p>
                    <p className="chart-info">(Up 12% this quarter)</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* User Dashboard */}
          {userData.role === 'user' && (
            <>
              <div className="stats-container">
                <div className="stat-card">
                  <h3>Saved Jobs</h3>
                  <p className="stat-value">{dashboardData.user.savedJobs}</p>
                </div>
                <div className="stat-card">
                  <h3>Applied Jobs</h3>
                  <p className="stat-value">{dashboardData.user.appliedJobs}</p>
                </div>
                <div className="stat-card">
                  <h3>Saved Startups</h3>
                  <p className="stat-value">{dashboardData.user.savedStartups}</p>
                </div>
                <div className="stat-card">
                  <h3>Network</h3>
                  <p className="stat-value">{dashboardData.user.networkConnections}</p>
                </div>
              </div>

              <div className="interests-section">
                <h3>Your Interests</h3>
                <div className="interest-tags">
                  {dashboardData.user.interests.map((interest, index) => (
                    <span className="interest-tag" key={index}>{interest}</span>
                  ))}
                  <button className="add-interest">+ Add</button>
                </div>
              </div>

              <div className="job-applications">
                <div className="section-header">
                  <h3>Recent Job Applications</h3>
                  <Link to="/job-applications" className="view-all">View All</Link>
                </div>
                <div className="applications-status">
                  <div className="status-card">
                    <h4>Applied</h4>
                    <span className="status-count">{dashboardData.user.appliedJobs}</span>
                  </div>
                  <div className="status-card">
                    <h4>In Review</h4>
                    <span className="status-count">2</span>
                  </div>
                  <div className="status-card">
                    <h4>Interview</h4>
                    <span className="status-count">1</span>
                  </div>
                  <div className="status-card">
                    <h4>Offers</h4>
                    <span className="status-count">0</span>
                  </div>
                </div>
              </div>

              <div className="upcoming-events">
                <div className="section-header">
                  <h3>Recommended Events</h3>
                  <Link to="/events" className="view-all">View All</Link>
                </div>
                <div className="events-list">
                  {dashboardData.user.recommendedEvents.map(event => (
                    <div className="event-card" key={event.id}>
                      <div className="event-info">
                        <h4>{event.title}</h4>
                        <div className="event-meta">
                          <span className="event-date">{new Date(event.date).toLocaleDateString()}</span>
                          <span className="event-location">{event.location}</span>
                        </div>
                      </div>
                      <button className="event-register-btn">Register</button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
