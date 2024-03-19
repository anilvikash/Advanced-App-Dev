import React, { useState } from 'react';
import axios from 'axios';
import "../layout/JobPostForm.css";
import Sidebar from './Sidebar';
import NavBar from './NavBar';

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    title: '',
    description: '',
    location: '',
    salary: '', // Adding salary field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/auth/jobs/post', formData);
      setFormData({
        companyName: '',
        title: '',
        description: '',
        location: '',
        salary: '', // Resetting salary field
      });
      alert('Job posted successfully');
    } catch (error) {
      console.error('Error posting job: ', error);
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <Sidebar/>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Job Description:</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="text"
            value={formData.salary}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostJobForm;
