import React, { useState, useEffect } from 'react';
import './Jobs.css';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [stageFilter, setStageFilter] = useState('all');
  const [jobListings, setJobListings] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for job listings
  const mockJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "TechInnovate",
      location: "Remote",
      salary: "$90,000 - $120,000",
      domain: "development",
      stage: "early",
      description: "Join our early-stage startup revolutionizing the tech space. We're looking for a passionate full stack developer to build innovative solutions.",
      requirements: ["React", "Node.js", "MongoDB", "3+ years experience", "Startup experience preferred"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignFusion",
      location: "San Francisco",
      salary: "$85,000 - $110,000",
      domain: "design",
      stage: "growth",
      description: "Growth-stage design studio seeking a creative UI/UX designer to join our expanding team and work on cutting-edge projects.",
      requirements: ["Figma", "Adobe Creative Suite", "User Research", "Portfolio required", "2+ years experience"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "VisionaryLabs",
      location: "New York",
      salary: "$100,000 - $130,000",
      domain: "product",
      stage: "established",
      description: "Well-established startup looking for a strategic product manager to drive our product roadmap and work closely with cross-functional teams.",
      requirements: ["Product strategy", "Agile methodology", "Data analysis", "5+ years experience", "MBA preferred"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "GrowthHackers",
      location: "Remote",
      salary: "$70,000 - $95,000",
      domain: "marketing",
      stage: "early",
      description: "Early-stage startup disrupting the marketing industry seeks a creative marketing specialist with a growth hacking mindset.",
      requirements: ["Digital marketing", "SEO/SEM", "Content creation", "Social media strategy", "2+ years experience"],
      posted: "Just now"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataDriven",
      location: "Boston",
      salary: "$110,000 - $140,000",
      domain: "data",
      stage: "growth",
      description: "Fast-growing AI startup seeking a talented data scientist to develop machine learning models and extract valuable insights from data.",
      requirements: ["Python", "Machine Learning", "SQL", "PhD preferred", "3+ years experience"],
      posted: "5 days ago"
    },
    {
      id: 6,
      title: "Sales Executive",
      company: "RevenuePro",
      location: "Chicago",
      salary: "$80,000 - $120,000 + Commission",
      domain: "sales",
      stage: "established",
      description: "Join our established sales team to drive revenue growth and build relationships with enterprise clients.",
      requirements: ["B2B sales experience", "CRM knowledge", "Negotiation skills", "5+ years experience", "Track record of exceeding targets"],
      posted: "1 week ago"
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "CloudScale",
      location: "Remote",
      salary: "$95,000 - $125,000",
      domain: "development",
      stage: "growth",
      description: "Growing cloud infrastructure startup looking for a skilled DevOps engineer to build and maintain scalable systems.",
      requirements: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD pipelines", "4+ years experience"],
      posted: "3 days ago"
    },
    {
      id: 8,
      title: "Content Strategist",
      company: "StoryBrand",
      location: "Remote",
      salary: "$75,000 - $95,000",
      domain: "marketing",
      stage: "early",
      description: "Early-stage content marketing startup seeking a strategic thinker to develop compelling content that drives user engagement.",
      requirements: ["Content creation", "SEO knowledge", "Editorial planning", "2+ years experience", "Portfolio required"],
      posted: "2 days ago"
    }
  ];

  // Load job listings on component mount
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setJobListings(mockJobs);
      setFilteredJobs(mockJobs);
      setLoading(false);
    }, 800);
  }, []);

  // Filter jobs whenever activeTab or stageFilter changes
  useEffect(() => {
    if (jobListings.length) {
      let filtered = [...jobListings];
      
      // Filter by domain
      if (activeTab !== 'all') {
        filtered = filtered.filter(job => job.domain === activeTab);
      }
      
      // Filter by startup stage
      if (stageFilter !== 'all') {
        filtered = filtered.filter(job => job.stage === stageFilter);
      }
      
      setFilteredJobs(filtered);
    }
  }, [activeTab, stageFilter, jobListings]);

  return (
    <div className="jobs-page">
      <div className="jobs-hero">
        <div className="hero-content">
          <h1>Find Your Perfect Role in Innovative Startups</h1>
          <p>Discover opportunities that match your skills and passion at companies changing the world</p>
        </div>
      </div>
      
      <div className="jobs-container">
        <div className="jobs-header">
          <div className="domain-tabs">
            <button 
              className={`domain-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Domains
            </button>
            <button 
              className={`domain-tab ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => setActiveTab('development')}
            >
              Development
            </button>
            <button 
              className={`domain-tab ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              Design
            </button>
            <button 
              className={`domain-tab ${activeTab === 'product' ? 'active' : ''}`}
              onClick={() => setActiveTab('product')}
            >
              Product
            </button>
            <button 
              className={`domain-tab ${activeTab === 'marketing' ? 'active' : ''}`}
              onClick={() => setActiveTab('marketing')}
            >
              Marketing
            </button>
            <button 
              className={`domain-tab ${activeTab === 'data' ? 'active' : ''}`}
              onClick={() => setActiveTab('data')}
            >
              Data
            </button>
            <button 
              className={`domain-tab ${activeTab === 'sales' ? 'active' : ''}`}
              onClick={() => setActiveTab('sales')}
            >
              Sales
            </button>
          </div>
          
          <div className="stage-filter">
            <label htmlFor="stage-select">Startup Stage:</label>
            <select 
              id="stage-select" 
              value={stageFilter} 
              onChange={(e) => setStageFilter(e.target.value)}
            >
              <option value="all">All Stages</option>
              <option value="early">Early Stage</option>
              <option value="growth">Growth Stage</option>
              <option value="established">Established</option>
            </select>
          </div>
        </div>

        <div className="jobs-results">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Discovering opportunities for you...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="job-listings">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h2 className="job-title">{job.title}</h2>
                    <div className="job-company-info">
                      <h3 className="job-company">{job.company}</h3>
                      <div className="stage-badge" data-stage={job.stage}>
                        {job.stage === 'early' && 'Early Stage'}
                        {job.stage === 'growth' && 'Growth Stage'}
                        {job.stage === 'established' && 'Established'}
                      </div>
                    </div>
                    <div className="job-details">
                      <span className="job-location">📍 {job.location}</span>
                      <span className="job-salary">💰 {job.salary}</span>
                      <span className="job-posted">🕒 Posted: {job.posted}</span>
                    </div>
                  </div>
                  
                  <div className="job-body">
                    <p className="job-description">{job.description}</p>
                    <div className="job-requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="job-footer">
                    <button className="apply-button">Apply Now</button>
                    <button className="save-button">Save Job</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h2>No jobs found matching your criteria</h2>
              <p>Try changing your filters or check back later for new opportunities</p>
              <button 
                className="reset-button" 
                onClick={() => {
                  setActiveTab('all');
                  setStageFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="jobs-cta">
        <div className="cta-content">
          <h2>Are you a startup looking to hire top talent?</h2>
          <p>Post your job listing and reach thousands of passionate professionals</p>
          <button className="post-job-button">Post a Job</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
