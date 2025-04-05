import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JobSearch.css';

const JobSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('query') || '';
  
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  
  // Mock job data - in a real app this would come from an API
  const mockJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechStartup",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for a passionate full stack developer to join our growing team.",
      skills: ["React", "Node.js", "MongoDB"],
      posted: "2 days ago",
      category: "development"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignInnovate",
      location: "San Francisco",
      type: "Full-time",
      description: "Join our creative team to design beautiful and intuitive user interfaces.",
      skills: ["Figma", "Adobe XD", "User Research"],
      posted: "1 week ago",
      category: "design"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "GrowthLabs",
      location: "New York",
      type: "Full-time",
      description: "Lead our product development and strategy for our SaaS platform.",
      skills: ["Product Strategy", "Agile", "Market Research"],
      posted: "3 days ago",
      category: "management"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "BrandBoost",
      location: "Remote",
      type: "Contract",
      description: "Help startups grow their brand with creative marketing strategies.",
      skills: ["Content Marketing", "Social Media", "SEO"],
      posted: "1 day ago",
      category: "marketing"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston",
      type: "Full-time",
      description: "Use data to drive business decisions and develop ML models.",
      skills: ["Python", "Machine Learning", "SQL"],
      posted: "5 days ago",
      category: "data"
    },
    {
      id: 6,
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Remote",
      type: "Part-time",
      description: "Build responsive and accessible web applications.",
      skills: ["React", "JavaScript", "CSS"],
      posted: "Just now",
      category: "development"
    }
  ];

  useEffect(() => {
    // Simulate API call with delay
    setLoading(true);
    setTimeout(() => {
      const results = mockJobs.filter(job => {
        const matchesQuery = initialQuery === '' || 
          job.title.toLowerCase().includes(initialQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(initialQuery.toLowerCase()) ||
          job.skills.some(skill => skill.toLowerCase().includes(initialQuery.toLowerCase()));
        
        const matchesFilter = filter === 'all' || job.category === filter;
        
        return matchesQuery && matchesFilter;
      });
      
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  }, [initialQuery, filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleApply = (jobId) => {
    // In a real app, this would navigate to an application form or job details page
    console.log(`Applying for job with ID: ${jobId}`);
    // Example: navigate(`/job/${jobId}/apply`);
  };

  return (
    <div className="job-search-page">
      <div className="job-search-container">
        <div className="job-search-header">
          <h1>Startup Job Opportunities</h1>
          <p>Find your perfect role at innovative startups</p>
          
          <div className="search-filters">
            <div className="filter-options">
              <button 
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                All Jobs
              </button>
              <button 
                className={`filter-button ${filter === 'development' ? 'active' : ''}`}
                onClick={() => handleFilterChange('development')}
              >
                Development
              </button>
              <button 
                className={`filter-button ${filter === 'design' ? 'active' : ''}`}
                onClick={() => handleFilterChange('design')}
              >
                Design
              </button>
              <button 
                className={`filter-button ${filter === 'marketing' ? 'active' : ''}`}
                onClick={() => handleFilterChange('marketing')}
              >
                Marketing
              </button>
              <button 
                className={`filter-button ${filter === 'management' ? 'active' : ''}`}
                onClick={() => handleFilterChange('management')}
              >
                Management
              </button>
              <button 
                className={`filter-button ${filter === 'data' ? 'active' : ''}`}
                onClick={() => handleFilterChange('data')}
              >
                Data
              </button>
            </div>
          </div>
        </div>

        <div className="job-search-results">
          {loading ? (
            <div className="loading-indicator">
              <p>Searching for the best opportunities...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <ul className="job-list">
              {searchResults.map(job => (
                <li key={job.id} className="job-card">
                  <div className="job-info">
                    <h2 className="job-title">{job.title}</h2>
                    <h3 className="job-company">{job.company}</h3>
                    <div className="job-meta">
                      <span className="job-location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                      <span className="job-posted">{job.posted}</span>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <div className="job-skills">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="job-actions">
                    <button 
                      className="apply-button"
                      onClick={() => handleApply(job.id)}
                    >
                      Apply Now
                    </button>
                    <button className="save-button">Save</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-results">
              <h2>No matching jobs found</h2>
              <p>Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
