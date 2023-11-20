import React from 'react';
import { Chart } from 'react-google-charts';
import { statisticsChartData, statisticsDataSummary } from './constants';

const Statistics = () => {
  return (
    <div>
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="BarChart" // You can change this to other chart types like 'PieChart', 'ColumnChart', etc.
        loader={<div>Loading Chart</div>}
        data={statisticsChartData}
        options={{
          chart: {
            title: 'User Statistics',
          },
          legend: { position: 'none' }, // Adjust as needed
        }}
      />
      <p>{statisticsDataSummary}</p>
    </div>
  );
};

export default Statistics;
