import React from "react";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
import BarChart from "@/components/dashboard/charts/BarChart";
import RadarChartStacked from "@/components/dashboard/charts/RadarChartStacked";

const Statistics = ({ activeButton }) => {
    let dataToRender;
    let prefixTitle;
    let labels;

    const data = {
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
                data: [512, 478, 68, 15, 425, 135, 196],
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
                data: [512, 478, 68, 15, 425, 135, 196],
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

    switch (activeButton) {
        case "DAY":
            dataToRender = data.dailyData; //later we add daily data to this
            labels = data.dailyData[0].labels;
            prefixTitle = "Daily";
            break;
        case "WEEK":
            dataToRender = data.weeklyData; //later we add weekly data to this
            labels = data.weeklyData[0].labels;
            prefixTitle = "Weekly";
            break;
        case "MONTH":
            dataToRender = data.monthlyData; //later we add monthly data to this
            labels = data.monthlyData[0].labels;
            prefixTitle = "Monthly";
            break;
        default:
            dataToRender = data.dailyData;
            labels = data.dailyData[0].labels;
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
                        <BarChart labels={labels} dataObject={dataToRender} />
                    </div>
                </div>
                <div className="max-w-[600px] h-full">
                    <h3 className="text-[1.125rem] font-semibold">Regions</h3>
                    <p className="font-light">
                        A visual summary of flight time across regions,
                        highlighting minutes flown in a specified period.
                    </p>
                    <div className="w-full h-[28rem] flex justify-center items-center">
                        <RadarChartStacked />
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
