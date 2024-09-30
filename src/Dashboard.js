import React, { useState, useEffect } from 'react';
import Card from './Card';
import GraphCard from './GraphCard';
import './Dashboard.css';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';

const Dashboard = () => {
  const [selectedDateRange, setSelectedDateRange] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Automatically select "This Month" when the component loads
  useEffect(() => {
    const startMonth = format(startOfMonth(new Date()), 'yyyy-MM-dd');
    const endMonth = format(endOfMonth(new Date()), 'yyyy-MM-dd');
    setSelectedDateRange(`${startMonth} - ${endMonth}`);
  }, []);

  // Functions to handle date range selection
  const handleSelect = (range) => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const startWeek = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'); // Monday start
    const endWeek = format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'); // Sunday end
    const startMonth = format(startOfMonth(new Date()), 'yyyy-MM-dd');
    const endMonth = format(endOfMonth(new Date()), 'yyyy-MM-dd');

    switch (range) {
      case 'Today':
        setSelectedDateRange(`${today}`);
        break;
      case 'This Week':
        setSelectedDateRange(`${startWeek} - ${endWeek}`);
        break;
      case 'This Month':
        setSelectedDateRange(`${startMonth} - ${endMonth}`);
        break;
      default:
        setSelectedDateRange('');
    }
    setShowDropdown(false); // Close dropdown after selection
  };

  // Redemption Success Rates - doughnut chart data
  const doughnutDataSuccessRates = {
    labels: ['Successful', 'Failed', 'Pending'],
    datasets: [
      {
        data: [400, 100, 50], // Example data for redemption success rates
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        hoverBackgroundColor: ['#d9e7d9', '#c82333', '#ffeeba'],
      },
    ],
  };

  // Most Recent Redemptions - line chart data
  const lineDataMostRecentRedemptions = {
    labels: ['Last Week', '2 Weeks Ago', '3 Weeks Ago', '4 Weeks Ago', '5 Weeks Ago'],
    datasets: [
      {
        label: 'Successful Redemptions',
        data: [30, 25, 35, 40, 20],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.1,
      },
      {
        label: 'Failed Redemptions',
        data: [5, 2, 3, 1, 0],
        fill: false,
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        tension: 0.1,
      },
    ],
  };

  // Total Redemptions Over Time - line chart data
  const lineDataRedemptionsOverTime = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Total Redemptions',
        data: [80, 90, 100, 120, 130, 150],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        tension: 0.1,
      },
      {
        label: 'Failed Redemptions',
        data: [10, 15, 5, 20, 10, 5],
        fill: false,
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Campaigns monitoring</h2>

      {/* Input box for selecting the date range */}
      <div className="date-picker-input">
        <i className="bi bi-calendar icon-calendar"></i>
        <input
          type="text"
          className="date-input"
          value={selectedDateRange}
          onClick={() => setShowDropdown(!showDropdown)}
          placeholder="Select Date Range"
          readOnly
        />
       

        {showDropdown && (
          <ul className="date-dropdown">
            <li onClick={() => handleSelect('Today')}>Today</li>
            <li onClick={() => handleSelect('This Week')}>This Week</li>
            <li onClick={() => handleSelect('This Month')}>This Month</li>
          </ul>
        )}
      </div>

      {/* Card Section */}
      <div className="card-container">
        <Card title="3" content="Total number of voucher and gift card codes" icon="bi-gift" />
        <Card title="1" content="Total number of successfully published voucher and gift card codes." icon="bi-check-circle" />
        <Card title="0" content="Total number of successfully delivered messages (all channels)." icon="bi-envelope" />
        <Card title="2" content="Total successful redemptions." icon="bi-cash" />
      </div>

      {/* GraphCards with different titles and data */}
      <div className="graph-section">
        <GraphCard
          title="Total Redemptions"
          doughnutData={doughnutDataSuccessRates}
          lineData={lineDataRedemptionsOverTime}
        />
        <GraphCard
          title="Total Rollback"
          doughnutData={doughnutDataSuccessRates} // You can adjust this if needed
          lineData={lineDataMostRecentRedemptions}
        />
      </div>
    </div>
  );
};

export default Dashboard;

