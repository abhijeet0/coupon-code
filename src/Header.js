import React from 'react';
import './Header.css';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <h1 className="header-title">
        <i className="bi bi-grid-fill"></i> {/* Dashboard Icon */}
        Dashboard
      </h1>
      <div className="user-info">
        <span className="username">
          <i className="bi bi-gear"></i> {/* Project Settings Icon */}
          Project Setting
        </span>
        <span className="username">
          <i className="bi bi-plug"></i> {/* Integrations Icon */}
          Integrations
        </span>
        <span className="username">
          <i className="bi bi-question-circle"></i> {/* Get Help Icon */}
          Get Help
        </span>
      
      </div>
    </header>
  );
};

export default DashboardHeader;
