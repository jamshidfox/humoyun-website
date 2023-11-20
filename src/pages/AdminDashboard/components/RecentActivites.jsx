import React from 'react';
import { Chart } from 'react-google-charts';
import { recentActivityChartData } from './constants';

const RecentActivityChart = () => {
  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType="PieChart" // You can choose other chart types like 'BarChart', 'ColumnChart', etc.
      loader={<div>Loading Chart</div>}
      data={recentActivityChartData}
      options={{
        chartArea: { width: '100%', height: '80%' },
        title: 'Recent User Activity',
      }}
    />
  );
};

export default RecentActivityChart;
