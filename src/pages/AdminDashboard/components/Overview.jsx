import React from 'react';
import { Chart } from 'react-google-charts';
import { overViewChartData } from './constants';
const OverviewChart = () => {
  return (
    <Chart
      width={'100%'}
      height={'300px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={overViewChartData}
      options={{
        chart: {
          title: 'Overview Chart',
        },
        legend: { position: 'bottom' },
      }}
    />
  );
};

export default OverviewChart;
