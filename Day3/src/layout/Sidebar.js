import React, { useState } from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';




function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>
          &#9776; {/* Unicode hamburger icon or any icon you prefer */}
        </button>
      </div>
      <ul className="sidebar-menu">
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Jobs'>Post Job</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/FeedbackForm'>Feedback</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
