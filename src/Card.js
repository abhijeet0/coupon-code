import React from 'react';
import './Card.css';

const Card = ({ title, content, icon }) => {
  return (
    <div className="card">
      <div className="card-content">
        <i className={`bi ${icon}`} /> {/* Display the passed icon */}
        <div className="card-text">
          <p>{content}</p>
        </div>
      </div>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
