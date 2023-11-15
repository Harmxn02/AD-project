"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = (props) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		let myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: props.labels,
				datasets: props.dataObject,
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
				},
			},
		});

		return () => {
			myChart.destroy();
		};
	}, []);

	return <canvas ref={chartRef}></canvas>;
};

export default BarChart;
