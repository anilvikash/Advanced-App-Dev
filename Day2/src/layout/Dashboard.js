// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Dashboard.css';
import Footer from './Footer';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome to Job Fair Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Job Listings</h3>
          <p>View and apply for job listings.</p>
          <Link to="/Joblisting">Explore</Link>
        </div>
        <div className="dashboard-card">
          <h3>Your Resume</h3>
          <p>Edit your Resume and preferences.</p>
          <Link to="/Resume">Explore</Link>
        </div>
      </div>
      <Link to='/Home'>
        <div className="continue-btn center">Back</div>
      </Link>
    </div>
  );
}

export default Dashboard;
