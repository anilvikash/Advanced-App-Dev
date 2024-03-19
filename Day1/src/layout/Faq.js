import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "../layout/Faq.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>Question 1: What is your project about?</h3>
        <p>Answer: A virtual job fair platform that connects millions of youth to working professionals.</p>
      </div>
      <div className="faq-item">
        <h3>Question 2: How do I get to create a resume?</h3>
        <p>Answer: Explain the steps to get started with your resume builder.</p>
      </div>
      <div className="faq-item">
        <h3>Question 3: Can I customize the application?</h3>
        <p>Answer: Explain the customization options, if any.</p>
      </div>
      
      {/* Back to Home link */}
      <Link to="/Home">Home</Link>
    </div>
  );
};

export default FAQ;
