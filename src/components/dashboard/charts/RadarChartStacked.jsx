"use client"

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChartStacked = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    let myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Europe', 'Asia', 'Africa', 'S-America', 'N-America', 'Antarctica', 'Oceania'],
        datasets: [
          {
            data: [40, 40, 50, 10, 40, 30, 40],
            label: 'Minutes Flown',
            backgroundColor: '#62A0AA73',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 60,
            }
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

export default RadarChartStacked;
