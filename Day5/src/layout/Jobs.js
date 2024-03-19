import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../layout/Jobs.css";

import Sidebar from './Sidebar';
import NavBar from './NavBar';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/jobs/get');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs: ', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-list">
    <Sidebar/>
    <NavBar/>
      <h2>Job List</h2>
      {jobs.map((job) => (
        <div className="job-item" key={job.id}>
          <h3 className="job-title">Title: {job.title}</h3>
          <p className="job-description">Description: {job.description}</p>
          <p className="job-location">Location: {job.location}</p>
          <hr />
        </div>
      ))}
      <Link to="/postjobform">
        <button type='submit' className='search'> Post Job </button>
      </Link>
      
    </div>
  );
};

export default JobList;
