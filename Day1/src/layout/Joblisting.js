import React, { useState, useEffect } from "react";
import "../layout/Joblisting.css";
import { Link } from "react-router-dom";

function Joblisting() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [savedJobs, setSavedJobs] = useState([]); // State to store saved jobs

  // Load saved jobs from localStorage on component mount
  useEffect(() => {
    const savedJobsData = localStorage.getItem("savedJobs");
    if (savedJobsData) {
      setSavedJobs(JSON.parse(savedJobsData));
    }
  }, []);

  // Function to save jobs to localStorage
  const saveJobsToLocalStorage = (jobs) => {
    localStorage.setItem("savedJobs", JSON.stringify(jobs));
  };

  const jobs = [
    {
      title: "Network Administrator",
      description: "National average salary: ₹4,73,876 per year",
      location: "Location: Chennai",
    },
    {
      title: "User Experience Designer",
      description: "National average salary: ₹5,65,848 per year",
      location: "Location: Bangalore",
    },
   
    {
      title: "Systems analyst ",
      description: "National average salary: ₹8,65,848 per year",
      location: "Location: madurai",
    },
    {
      title: " Database administrator",
      description: "National average salary: ₹3,50,848 per year",
      location: "Location: coimbatore",
    },
    {
      title: "Full-stack developer ",
      description: "National average salary: ₹7,65,848 per year",
      location: "Location: trichy",
    },
    {
      title: "Senior software engineer",
      description: "National average salary: ₹10,65,848 per year",
      location: "Location: salem",
    },
    {
      title: "Software application packager",
      description: "National average salary: ₹7,65,463 per year",
      location: "Location: madurai",
    },
    {
      title: "technical support",
      description: "National average salary: ₹2,75,300 per year",
      location: "Location: hyderabad",
    },
  ];

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter jobs based on the search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle adding a job to saved jobs
  const handleAddJobClick = (job) => {
    setSavedJobs((prevSavedJobs) => {
      const updatedSavedJobs = [...prevSavedJobs, job];
      saveJobsToLocalStorage(updatedSavedJobs);
      return updatedSavedJobs;
    });
  };

  // Function to handle removing a job from saved jobs
  const handleRemoveJobClick = (index) => {
    setSavedJobs((prevSavedJobs) => {
      const updatedSavedJobs = [...prevSavedJobs];
      updatedSavedJobs.splice(index, 1);
      saveJobsToLocalStorage(updatedSavedJobs);
      return updatedSavedJobs;
    });
  };

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearchChange}>
          <input
            type="text"
            placeholder="job title, salary, location..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
         
        </form>

        <Link to="/Dashboard">
          <div className="continue-btn">Back</div>
        </Link>
      </div>

      {/* Display filtered jobs */}
      <div className="job-container">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <button onClick={() => handleAddJobClick(job)}>Add</button>
          </div>
        ))}
      </div>

      <div className="saved-jobs-container">
        <h2>Saved Jobs</h2>
        {savedJobs.map((savedJob, index) => (
          <div key={index} className="saved-job-item">
            <h3>{savedJob.title}</h3>
            <p>{savedJob.description}</p>
            <p>{savedJob.location}</p>
            <button onClick={() => handleRemoveJobClick(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Joblisting;
