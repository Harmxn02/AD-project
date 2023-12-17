import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PropTypes from "prop-types";

const BarChart = (props) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const myChart = new Chart(ctx, {
            type: "bar",
            data: {
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
    }, [props.dataObject]);

    return <canvas ref={chartRef}></canvas>;
};

BarChart.propTypes = {
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
        })
    ).isRequired,
};

export default BarChart;
