import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const About = () => {
  const navigate = useNavigate(); 

  const handleCreateCampaign = () => {
    navigate('/create-campaign'); 
  };

  return (
    <div className="about">
     
   
      <div className="campaign-box">
        <div className="campaign-header">
         
          <h1>Create a New Campaign</h1>
        </div>
        <p>Set up and manage your marketing campaigns from here.</p>

       
        <div className="campaign-footer">
          <button className="create-campaign-btn" onClick={handleCreateCampaign}>
            <i className="bi bi-plus-circle"></i> {/* Plus icon */}
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
