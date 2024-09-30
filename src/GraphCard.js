import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import './GraphCard.css';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const GraphCard = ({ title, doughnutData, lineData }) => {
  return (
    <div className="graph-card">
      <h3>{title}</h3>
      <div className="graphs-container">
        {/* Doughnut chart first */}
        <div className="doughnut-chart">
          <Doughnut data={doughnutData} />
        </div>
        {/* Line chart second */}
        <div className="line-graph">
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default GraphCard;


