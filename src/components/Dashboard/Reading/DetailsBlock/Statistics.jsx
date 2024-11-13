

import { Line } from 'react-chartjs-2';

export const Statistics = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Reading Progress',
        data: data.map(entry => entry.percentage),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue'
      }
    ]
  };

  return (
    <div>
      <h3>Reading Progress</h3>
      <Line data={chartData} />
    </div>
  );
};

