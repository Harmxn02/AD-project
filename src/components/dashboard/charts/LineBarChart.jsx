import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PropTypes from "prop-types";

const LineBarChart = (props) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");

		const myChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: props.labels,
				datasets: props.dataObject,
			},
			options: {
				maintainAspectRatio: false,
				scales: {
					y: {
						position: "left",
						beginAtZero: true,
					},
					y1: {
						position: "right",
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
	}, [props.dataObject, props.labels]);

	return <canvas ref={chartRef}></canvas>;
};

LineBarChart.propTypes = {
	labels: PropTypes.arrayOf(PropTypes.string),
	dataObject: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			data: PropTypes.oneOfType([
				PropTypes.arrayOf(PropTypes.number).isRequired,
				PropTypes.object.isRequired,
			]).isRequired,
			backgroundColor: PropTypes.string.isRequired,
			borderColor: PropTypes.string.isRequired,
			borderWidth: PropTypes.number.isRequired,
		}),
	).isRequired,
};

export default LineBarChart;
