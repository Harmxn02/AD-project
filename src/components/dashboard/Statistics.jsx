"use client";

import React from "react";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
import Subtitle from "@/components/utility/Subtitle";


import BarChart from "@/components/dashboard/charts/BarChart";
import RadarChartStacked from "@/components/dashboard/charts/RadarChartStacked";
import Loading from "@/components/utility/Loading";
import { GetAPI } from "../../assets/js/api";

const Statistics = ({ activeButton }) => {
    const AdriaID = 1;
    const regionTimeDataAPI = GetAPI(`/flytimepercoordinate/${AdriaID}`);

    const flownTime = {
        dataToRender: [],
        labels: [],
    };

    const regionTime = {
        dataToRender: [],
    };

    let prefixTitle;

    if (regionTimeDataAPI === null) {
        return <Loading />;
    }

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

    function getContinentValuesPerPeriod(data, period) {
        const resultArray = [];

        const continentOrder = [
            "europe",
            "asia",
            "africa",
            "southAmerica",
            "northAmerica",
            "antarctica",
            "australia",
        ];

        for (const continent of continentOrder) {
            if (data.hasOwnProperty(continent)) {
                const day = data[continent][period];

                resultArray.push(day);
            }
        }

        return resultArray;
    }

    const regionTimeData = {
        labels: [
            "Europe",
            "Asia",
            "Africa",
            "S-America",
            "N-America",
            "Antarctica",
            "Australia",
        ],
        dailyData: [
            {
                data: getContinentValuesPerPeriod(regionTimeDataAPI, "day"),
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
        weeklyData: [
            {
                data: getContinentValuesPerPeriod(regionTimeDataAPI, "week"),
                label: "Minutes Flown",
                backgroundColor: "#62A0AA73",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
        monthlyData: [
            {
                data: getContinentValuesPerPeriod(regionTimeDataAPI, "month"),
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
                    <Subtitle content="Minutes flown"/>
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
                    <Subtitle content="Regions"/>
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
