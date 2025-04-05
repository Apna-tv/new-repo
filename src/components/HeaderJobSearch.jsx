import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderJobSearch.css';

const HeaderJobSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/job-search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsExpanded(false);
    }
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // When expanding, focus the input after a short delay to allow the animation
      setTimeout(() => {
        document.getElementById('header-search-input')?.focus();
      }, 100);
    }
  };

  return (
    <div className={`header-job-search ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button 
          className="search-toggle-button" 
          onClick={toggleSearch}
          aria-label="Open job search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>Find Startup Jobs</span>
        </button>
      ) : (
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            id="header-search-input"
            type="text"
            placeholder="Search for jobs, skills, or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button 
            type="submit" 
            className="search-submit"
            aria-label="Search for jobs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button 
            type="button" 
            className="search-close"
            onClick={toggleSearch}
            aria-label="Close search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </form>
      )}
    </div>
  );
};

export default HeaderJobSearch;
