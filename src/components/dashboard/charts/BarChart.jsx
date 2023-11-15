"use client"

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            data: [10, 20, 30, 15, 25, 35, 45],
            label: 'Minutes Flown',
            backgroundColor: '#62A0AA73',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                stepSize: 5,
            },
          },
        },
        plugins: {
            legend: false,
        }
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <canvas ref={chartRef}></canvas>
  );
};

export default BarChart;
