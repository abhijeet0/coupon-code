import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Close search bar when clicking outside or pressing Esc
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <i className="bi bi-grid"></i> {/* Dashboard icon */}
            <h1 className="sidebar-heading">Voucherify</h1>
          </Link>
        </li>

        {/* Search bar */}
        <li className="search-container">
          <i className="bi bi-search search-icon"></i> {/* Search icon */}
          <input
            type="text"
            className="sidebar-search"
            placeholder="Search..."
            onClick={toggleSearch}
          />
        </li>
        
        <li className="dropdown">
          <div className="sidebar-link">
            <i className="bi bi-house"></i>
            <span className="sidebar-text">Home</span>
            <i className="bi bi-chevron-down dropdown-icon"></i>
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" className="dropdown-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/Whats" className="dropdown-link">What's new</Link>
            </li>
            <li>
              <Link to="/demo-shop" className="dropdown-link">Demo Shop</Link>
            </li>
            <li>
              <Link to="/project-settings" className="dropdown-link">Project Settings</Link>
            </li>
            <li>
              <Link to="/integrations" className="dropdown-link">Integrations</Link>
            </li>
          </ul>
        </li>

      
        <li className="dropdown">
          <div className="sidebar-link">
            <i className="bi bi-bullseye"></i> 
            <span className="sidebar-text">Campaign Hub</span>
            <i className="bi bi-chevron-down dropdown-icon"></i>
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about" className="dropdown-link">Campaign</Link>
            </li>
            <li>
              <Link to="/team" className="dropdown-link">Validation Rules</Link>
            </li>
            <li>
              <Link to="/careers" className="dropdown-link">Redemptions</Link>
            </li>
            <li>
              <Link to="/careers" className="dropdown-link">Orders</Link>
            </li>
            <li>
              <Link to="/careers" className="dropdown-link">Products</Link>
            </li>
            <li>
              <Link to="/careers" className="dropdown-link">Rewards</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <div className="sidebar-link">
            <i className="bi bi-person"></i> 
            <span className="sidebar-text">Engagement</span>
            <i className="bi bi-chevron-down dropdown-icon"></i>
          </div>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about-us" className="dropdown-link">Customers</Link>
            </li>
            <li>
              <Link to="/team" className="dropdown-link">Segments</Link>
            </li>
            <li>
              <Link to="/careers" className="dropdown-link">Distributions</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">
            <i className="bi bi-file-earmark-text"></i> 
            <span className="sidebar-text">Audit log</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">
            <i className="bi bi-trash"></i>
            <span className="sidebar-text">Bin</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
