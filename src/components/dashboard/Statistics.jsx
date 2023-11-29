import React from "react";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
import BarChart from "@/components/dashboard/charts/BarChart";
import RadarChartStacked from "@/components/dashboard/charts/RadarChartStacked";

const Statistics = ({ activeButton }) => {
    let prefixTitle;

    const flownTime = {
        dataToRender: [],
        labels: [],
    };

    const regionTime = {
        dataToRender: [],
    };

    const flownTimeData = {
        dailyData: [
            {
                data: [10, 20, 30, 15, 25, 35, 45],
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
            },
        ],
        weeklyData: [
            {
                data: [
                    512, 478, 68, 15, 425, 135, 196, 147, 187, 177, 872, 342,
                    146,
                ],
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                labels: [
                    "W1",
                    "W2",
                    "W3",
                    "W4",
                    "W5",
                    "W6",
                    "W7",
                    "W8",
                    "W9",
                    "W10",
                    "W11",
                    "W12",
                    "W13",
                ],
            },
        ],
        monthlyData: [
            {
                data: [512, 478, 68, 15, 425, 135, 196, 752, 358, 125, 36, 887],
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                labels: [
                    "JAN",
                    "FEB",
                    "MARCH",
                    "APRIL",
                    "MAY",
                    "JUNE",
                    "JULY",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                ],
            },
        ],
    };

    const regionTimeData = {
        labels: [
            "Europe",
            "Asia",
            "Africa",
            "S-America",
            "N-America",
            "Antarctica",
            "Oceania",
        ],
        dailyData: [
            {
                data: [40, 40, 50, 10, 40, 30, 40],
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
        weeklyData: [
            {
                data: [40, 78, 65, 54, 18, 57, 26],
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
        monthlyData: [
            {
                data: [40, 40, 50, 10, 40, 30, 40],
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    switch (activeButton) {
        case "DAY":
            flownTime.dataToRender = flownTimeData.dailyData;
            flownTime.labels = flownTimeData.dailyData[0].labels;
            regionTime.dataToRender = regionTimeData.dailyData;
            prefixTitle = "Daily";
            break;
        case "WEEK":
            flownTime.dataToRender = flownTimeData.weeklyData;
            flownTime.labels = flownTimeData.weeklyData[0].labels;
            regionTime.dataToRender = regionTimeData.weeklyData;
            prefixTitle = "Weekly";
            break;
        case "MONTH":
            flownTime.dataToRender = flownTimeData.monthlyData;
            flownTime.labels = flownTimeData.monthlyData[0].labels;
            regionTime.dataToRender = regionTimeData.monthlyData;
            prefixTitle = "Monthly";
            break;
        default:
            flownTime.dataToRender = flownTimeData.dailyData;
            flownTime.labels = flownTimeData.dailyData[0].labels;
            regionTime.dataToRender = regionTimeData.dailyData[0].data;
            prefixTitle = "Daily";
    }

    return (
        <section>
            <Title content={`${prefixTitle} Statistics`} />
            <div className="flex justify-between">
                <div className="max-w-[600px] h-full">
                    <h3 className="text-[1.125rem] font-semibold">
                        Minutes flown
                    </h3>
                    <p className="font-light">
                        Charting flight durations within a specific time frame,
                        offering a clear overview for analysis.
                    </p>
                    <div className="w-full mt-4 h-[25rem]">
                        <BarChart
                            labels={flownTime.labels}
                            dataObject={flownTime.dataToRender}
                        />
                    </div>
                </div>
                <div className="max-w-[600px] h-full">
                    <h3 className="text-[1.125rem] font-semibold">Regions</h3>
                    <p className="font-light">
                        A visual summary of flight time across regions,
                        highlighting minutes flown in a specified period.
                    </p>
                    <div className="w-full h-[28rem] flex justify-center items-center">
                        <RadarChartStacked
                            labels={regionTimeData.labels}
                            dataObject={regionTime.dataToRender}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

Statistics.propTypes = {
    activeButton: PropTypes.string.isRequired,
};

export default Statistics;
