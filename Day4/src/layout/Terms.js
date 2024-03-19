import React from 'react';
import { Link } from 'react-router-dom';
import "../layout/Terms.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      <h2>Terms and Conditions</h2>
      <p>
        These terms and conditions ("Terms") are an agreement between you and [Your Company Name] ("Company," "we," "our," or "us"). By accessing or using our virtual job fair platform ("Platform"), you agree to comply with and be bound by these Terms.
      </p>
      <h3>1. Account Registration</h3>
      <p>
        To use certain features of the Platform, you may be required to create an account. You agree to provide accurate and complete information during the registration process and to update your information to keep it accurate.
      </p>
      <h3>2. User Conduct</h3>
      <p>
        You agree to use the Platform in accordance with all applicable laws and regulations. You may not:
        <ul>
          <li>Engage in any illegal or unauthorized activities.</li>
          <li>Upload, post, or transmit any content that is harmful, offensive, or violates the rights of others.</li>
          <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
        </ul>
      </p>
      <h3>3. Privacy</h3>
      <p>
        Your use of the Platform is also governed by our Privacy Policy, which can be found [link to Privacy Policy]. By using the Platform, you consent to the collection and use of your personal information as described in the Privacy Policy.
      </p>
      <h3>4. Intellectual Property</h3>
      <p>
        All content and materials on the Platform, including text, graphics, logos, and software, are the property of the Company and are protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Platform without our prior written consent.
      </p>
      <h3>5. Termination</h3>
      <p>
        We reserve the right to suspend or terminate your access to the Platform at our sole discretion, with or without cause and without notice.
      </p>
      <h3>6. Changes to Terms</h3>
      <p>
        We may update these Terms from time to time. Any changes will be posted on the Platform, and it is your responsibility to review the Terms periodically. Your continued use of the Platform after changes are posted constitutes your acceptance of the updated Terms.
      </p>
      <h3>7. Contact Us</h3>
      <p>
        If you have any questions or concerns about these Terms, please contact us at [contact email].
      </p>
      <Link to="/Home" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default TermsAndConditions;
