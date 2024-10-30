import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCampaign.css'; 

const CreateCampaign = () => {
  const navigate = useNavigate(); 

  // Function to handle the creation of a campaign and navigation
  const handleCreateCampaign = () => {
    // Here, you can implement your logic for creating a campaign/account
    console.log('Creating a new campaign...');

    // Simulating an API call or campaign creation logic
    setTimeout(() => {
      // After the operation, navigate to the desired page
      navigate('/campaign-success'); // Change to the desired route
    }, 2000);
  };

  return (
    <div className="create-campaign-page">
      <h1 className="main-heading">Create a New Campaign</h1> {/* Heading outside the container */}
      <h2>Campaign Types</h2>
      
      <div className="campaign-progress">
        <h3>Campaign creation in progress</h3>
        <p>Continue to work on a campaign just where you left off</p>
      </div>
        
      <div className="action-buttons">
        <button className="discard-btn">Discard</button>
        <button className="continue-btn">Continue Work</button>
      </div>

      <div className="card-container1">
        {/* Campaign 1 Card */}
        <div className="card1">
          <span className="dollar-icon">$</span> {/* Dollar icon */}
          <p>Personal use or public channels</p>
          <h4>Discount coupons</h4>
          <p>
            Issue one-off, personalised discount codes for personal use (e.g. HELLO4543) or publish a public fixed-code voucher across your messaging channels (e.g. BlackFriday19)
          </p>
          <button className="create-btn" onClick={handleCreateCampaign}>
            Create
          </button>
        </div>

        {/* Campaign 2 Card */}
        <div className="card1">
          <i className="material-icons gift-icon">card_giftcard</i>
          <p>Personal use or public channels</p>
          <h4>Gift vouchers</h4>
          <p>
            Publish digital gift cards as unique one-off codes aimed at particular customers or launch public, reusable gift card certificates that act as digital wallets.
          </p>
          <button className="create-btn" onClick={handleCreateCampaign}>
            Create
          </button>
        </div>

        {/* Campaign 3 Card */}
        <div className="card1">
          <i className="material-icons">local_offer</i>
          <p>Friends refer friends</p>
          <h4>Referral codes</h4>
          <p>
            Multi-tiered referral program with rewards for referrers and invited customers (e.g., $20 for you and every invited friend, $50 if you get more than five).
          </p>
          <button className="create-btn" onClick={handleCreateCampaign}>
            Create
          </button>
        </div>

        {/* Campaign 4 Card */}
        <div className="card1">
          <i className="material-icons">star</i>
          <p>Discounts without code</p>
          <h4>Promotion</h4>
          <p>
            Automatically applied discount based on shopping cart structure and customer attributes (e.g., 5% off if total order amount exceeds $200).
          </p>
          <button className="create-btn" onClick={handleCreateCampaign}>
            Create
          </button>
        </div>

        {/* Campaign 5 Card */}
        <div className="card1">
          <i className="material-icons">verified</i>
          <p>Rewards for points</p>
          <h4>Loyalty program</h4>
          <p>
            Use points to motivate action at every stage of your customer journey.
          </p>
          
          <button className="create-btn" onClick={handleCreateCampaign}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
