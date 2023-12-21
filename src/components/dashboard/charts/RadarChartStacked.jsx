"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PropTypes from "prop-types";

const RadarChartStacked = (props) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const myChart = new Chart(ctx, {
			type: "radar",
			data: {
				labels: props.labels,
				datasets: props.dataObject,
			},
			options: {
				scales: {
					r: {
						suggestedMin: 0,
						suggestedMax: 60,
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
	}, [props.dataObject, props.labels]);

	return <canvas ref={chartRef}></canvas>;
};

RadarChartStacked.propTypes = {
	labels: PropTypes.arrayOf(PropTypes.string).isRequired,
	dataObject: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			data: PropTypes.arrayOf(PropTypes.number).isRequired,
			backgroundColor: PropTypes.string.isRequired,
			borderColor: PropTypes.string.isRequired,
			borderWidth: PropTypes.number.isRequired,
		}),
	).isRequired,
};

export default RadarChartStacked;
