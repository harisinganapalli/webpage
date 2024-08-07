import "../src/Index.css"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const ActivityChartex = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band',data: [5,9,11,13,15,17,19,21,23,27] }]}
      series={[{ data: [4000, 4500,7000,5500,4000, 7000,6000, 9000,16000,7000 ],color: '#7195FE'},{data:[9000, 3000,7000, 2000,8000,11000,12000, 11000,4000, 11000],color: '#7195FE' }]}
      height={180}
      borderRadius={20}
    />
  );
}

export default ActivityChartex