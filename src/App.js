import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import CreateCampaign from './CreateCampaign';
import CampaignSuccess from './CampaignSuccess'; 
import About from './About';
import './App.css';
import Timeframe from './Timeframe';
import DiscountValue from './DiscountValue';
import Summary from './Summary';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/create-campaign" element={<CreateCampaign />} /> 
             <Route path="/campaign-success" element={<CampaignSuccess />} />
             <Route path="/timeframe" element={<Timeframe />} />
             <Route path="/discount-value" element={<DiscountValue />} />
             <Route path="/summary" element={<Summary />} />
         
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
