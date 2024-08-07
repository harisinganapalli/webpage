import { CChart } from "@coreui/react-chartjs";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const OrderChart = () => {
  const plugins = [{
    id: 'textAndCurve',
    beforeDraw: function (chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      ctx.restore();
      
      // percentage text in the center
      const fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em Arial";
      ctx.textBaseline = "middle";
      ctx.fillStyle = 'white'; 
      const text = "70%";
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2 - 10;
      ctx.fillText(text, textX, textY);

      // label below text in the center
      ctx.font = (fontSize / 2) + "em Arial";
      ctx.fillStyle = 'white'; 
      const labelText = "Goal Completed";
      const labelX = Math.round((width - ctx.measureText(labelText).width) / 2);
      const labelY = height / 2 + 10;
      ctx.fillText(labelText, labelX, labelY);

      ctx.save();
    }
  }];

  return (
    <CChart
      type="doughnut"
      style={{
        width: "100px",
        height: "120px",
        
      }}
      data={{
        datasets: [
          {
            backgroundColor: ['#7396FF', '#293567'], 
            data: [70, 30], 
            borderWidth: 0,
            
          },
        ],
      }}
      options={{
        cutout: '70%', 
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      }}
      plugins={plugins}
    />
  );
};

export default OrderChart;
