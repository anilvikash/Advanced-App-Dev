import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../layout/Resume.css";

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateResume = () => {
    // Create a formatted resume here using formData
    const resume = `
      Full Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Education: ${formData.education}
      Experience: ${formData.experience}
      Skills: ${formData.skills}
    `;

    console.log(resume);
    // You can display or save the resume as needed
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Education</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={generateResume}>
          Generate Resume
        </button>
      </form>
      <Link to="/Dashboard">Back</Link>
    </div>
  );
}

export default ResumeBuilder;
