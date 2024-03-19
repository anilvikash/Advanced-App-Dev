import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Register.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signup = { firstName, email, password };

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup)
      });

      if (response.ok) {
        console.log("New Register added");

        // Navigate to the login page if the signup was successful
        nav('/loginbtn'); // Add this line to navigate to the login page
      } else {
        console.error("Error during registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name<h6>{errors.firstName && <span>{errors.firstName}</span>}</h6></label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<h6>{errors.email && <span>{errors.email}</span>}</h6></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<h6>{errors.password && <span>{errors.password}</span>}</h6></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="back-to-login">
        <Link to="/loginbtn">Back to Login</Link>
      </div>
    </div>
  );
}

export default Register;
