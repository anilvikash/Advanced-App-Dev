import React from 'react';
import "../layout/Privacy.css";
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div>
      
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. It is Virtual Job Expo's policy to respect your privacy regarding any information we may collect from you across our website.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
        </p>
        <p>
          We may collect information such as your name, email address, and other contact details when you register for an account or contact us.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We may use the information we collect to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our website.</li>
          <li>Improve, personalize, and expand our website.</li>
          <li>Understand and analyze how you use our website.</li>
          <li>Develop new products, services, features, and functionality.</li>
        </ul>
        <h2>Security</h2>
        <p>
          We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          This policy is effective as of September 1, 2023.
        </p>
      </div>
      <Link to="/Home">Back to Home</Link>
    </div>
  );
}

export default PrivacyPolicy;