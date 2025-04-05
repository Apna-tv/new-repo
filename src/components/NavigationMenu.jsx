import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.css';
import logo from '../assets/logo.svg';

const NavigationMenu = () => {
  const location = useLocation();
  // Mock authentication status - in a real app, this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Start with not logged in for demo
  // Mock user data - in a real app, this would come from auth context or API
  const [userData, setUserData] = useState({
    name: 'Jane Doe',
    role: 'founder', // Can be 'founder', 'mentor', 'investor', 'user'
    profileImage: null, // Default placeholder will be used
  });
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    console.log('Profile clicked, toggling dropdown', !isProfileDropdownOpen);
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileDropdownOpen && 
          !event.target.closest('#profile-dropdown') && 
          !event.target.closest('#profile-button')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  // For demo purposes, toggle login status
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // For demo, switch between roles
    const roles = ['founder', 'mentor', 'investor', 'user'];
    const currentRoleIndex = roles.indexOf(userData.role);
    const nextRoleIndex = (currentRoleIndex + 1) % roles.length;
    setUserData({
      ...userData,
      role: roles[nextRoleIndex]
    });
  };
  
  // Render the dropdown menu in a fixed position for visibility
  const renderProfileDropdown = () => {
    if (!isProfileDropdownOpen) return null;
    
    return (
      <div 
        id="profile-dropdown-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
          zIndex: 99998,
          pointerEvents: 'none',
        }}
      >
        <div 
          id="profile-dropdown"
          style={{
            position: 'absolute',
            top: '70px', // Adjusted based on header height
            right: '40px',
            width: '280px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 25px rgba(0, 0, 0, 0.3)',
            zIndex: 99999,
            overflow: 'hidden',
            pointerEvents: 'auto',
            border: '1px solid rgba(0, 0, 0, 0.15)',
          }}
        >
          <div className="dropdown-header">
            <p className="user-name">{userData.name}</p>
            <p className="user-role">
              {userData.role === 'founder' && 'Founder'}
              {userData.role === 'mentor' && 'Mentor'}
              {userData.role === 'investor' && 'Investor'}
              {userData.role === 'user' && 'User'}
            </p>
          </div>
          <div className="dropdown-menu">
            <Link to="/dashboard" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
              <i className="icon dashboard-icon"></i>
              Dashboard
            </Link>
            <Link to="/profile" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
              <i className="icon profile-icon"></i>
              Profile Settings
            </Link>
            {userData.role === 'founder' && (
              <Link to="/my-startup" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="icon startup-icon"></i>
                My Startup
              </Link>
            )}
            {userData.role === 'mentor' && (
              <Link to="/mentees" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="icon mentees-icon"></i>
                My Mentees
              </Link>
            )}
            {userData.role === 'investor' && (
              <Link to="/investments" className="dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="icon investment-icon"></i>
                My Investments
              </Link>
            )}
            <button onClick={handleLogout} className="dropdown-item logout">
              <i className="icon logout-icon"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <nav className="navigation-menu">
      <div className="nav-container">
        <div className="brand-logo">
          <Link to="/">
            <img src={logo} alt="Idea Ascend Logo" />
            <span>Idea Ascend</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to="/founders-team" className={`nav-link ${location.pathname === '/founders-team' ? 'active' : ''}`}>Founder's Team</Link>
          <Link to="/mentor" className={`nav-link ${location.pathname === '/mentor' ? 'active' : ''}`}>Mentor</Link>
          <Link to="/investor" className={`nav-link ${location.pathname === '/investor' ? 'active' : ''}`}>Investor</Link>
          <Link to="/jobs" className={`nav-link ${location.pathname.startsWith('/job') ? 'active' : ''}`}>Jobs</Link>
        </div>
        <div className="auth-section">
          {isLoggedIn ? (
            <div className="profile-dropdown-container">
              <div className="logged-in-label">
                <span className="welcome-text">Welcome, <strong>{userData.name.split(' ')[0]}</strong></span>
                <span className="role-badge">
                  {userData.role === 'founder' && 'Founder'}
                  {userData.role === 'mentor' && 'Mentor'}
                  {userData.role === 'investor' && 'Investor'}
                  {userData.role === 'user' && 'User'}
                </span>
              </div>
              
              <button 
                id="profile-button"
                className="profile-button" 
                onClick={toggleProfileDropdown}
                aria-label="Open profile menu"
                aria-expanded={isProfileDropdownOpen}
                aria-haspopup="true"
              >
                <div className="profile-icon">
                  {userData.profileImage ? (
                    <img src={userData.profileImage} alt="Profile" />
                  ) : (
                    <div className="profile-initials">
                      {userData.name.split(' ').map(name => name[0]).join('')}
                    </div>
                  )}
                  {userData.role === 'founder' && <div className="role-indicator founder"></div>}
                  {userData.role === 'mentor' && <div className="role-indicator mentor"></div>}
                  {userData.role === 'investor' && <div className="role-indicator investor"></div>}
                  {userData.role === 'user' && <div className="role-indicator user"></div>}
                </div>
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-button">Login</Link>
              <Link to="/signup" className="signup-button">Sign Up</Link>
              {/* For demo purposes */}
              <button onClick={handleLogin} className="demo-login">Demo Login</button>
            </div>
          )}
        </div>
      </div>
      {/* Render dropdown outside of normal document flow */}
      {renderProfileDropdown()}
    </nav>
  );
};

export default NavigationMenu;
