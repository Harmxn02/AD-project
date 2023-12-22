"use client";

import React from "react";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
import Subtitle from "@/components/utility/Subtitle";

import BarChart from "@/components/dashboard/charts/BarChart";
import RadarChartStacked from "@/components/dashboard/charts/RadarChartStacked";

import { GetAPI } from "../../assets/js/api";
import { GetUser } from "../../assets/js/user";

import StatisticsSkeleton from "@/components/utility/skeletons/StatisticsSkeleton";

const Statistics = ({ activeButton }) => {
	const adriaId = GetUser();
	const regionTimeDataAPI = GetAPI(`/flytimepercoordinate/${adriaId}`);
	const flownTimeDataAPI = GetAPI(`/flytime/${adriaId}`);

	const flownTime = {
		dataToRender: [],
	};

	const regionTime = {
		dataToRender: [],
	};

	let prefixTitle;

	if (!(regionTimeDataAPI && flownTimeDataAPI)) {
		return <StatisticsSkeleton />;
	}

	function getContinentValuesPerPeriod(data, period) {
		const resultArray = [];

		const continentOrder = ["europe", "asia", "africa", "southAmerica", "northAmerica", "antarctica", "australia"];

		for (const continent of continentOrder) {
			if (data.hasOwnProperty(continent)) {
				const day = data[continent][period];

				resultArray.push(day);
			}
		}

		return resultArray;
	}

	const dataContext = {
		barBackgroundColor: "rgba(98, 160, 170, 0.45)",
		barBorderColor: "rgba(75, 192, 192, 1)",
		barBorderWidth: 1,
	};

	const flownTimeData = {
		dailyData: [
			{
				data: flownTimeDataAPI.daily,
				label: "Minutes Flown",
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
		weeklyData: [
			{
				data: flownTimeDataAPI.weekly,
				label: "Minutes Flown",
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
		monthlyData: [
			{
				data: flownTimeDataAPI.monthly,
				label: "Minutes Flown",
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
	};

	const regionTimeData = {
		labels: ["Europe", "Asia", "Africa", "S-America", "N-America", "Antarctica", "Australia"],
		dailyData: [
			{
				data: getContinentValuesPerPeriod(regionTimeDataAPI, "day"),
				label: "Minutes Flown",
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
		weeklyData: [
			{
				data: getContinentValuesPerPeriod(regionTimeDataAPI, "week"),
				label: "Minutes Flown",
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
		monthlyData: [
			{
				data: getContinentValuesPerPeriod(regionTimeDataAPI, "month"),
				label: "Minutes Flown",
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
	};

	switch (activeButton) {
		case "DAY":
			flownTime.dataToRender = flownTimeData.dailyData;
			regionTime.dataToRender = regionTimeData.dailyData;
			prefixTitle = "Daily";
			break;
		case "WEEK":
			flownTime.dataToRender = flownTimeData.weeklyData;
			regionTime.dataToRender = regionTimeData.weeklyData;
			prefixTitle = "Weekly";
			break;
		case "MONTH":
			flownTime.dataToRender = flownTimeData.monthlyData;
			regionTime.dataToRender = regionTimeData.monthlyData;
			prefixTitle = "Monthly";
			break;
		default:
			flownTime.dataToRender = flownTimeData.dailyData;
			regionTime.dataToRender = regionTimeData.dailyData[0].data;
			prefixTitle = "Daily";
	}

	return (
		<section>
			<Title content={`${prefixTitle} Statistics`} />
			<div className="flex justify-between">
				<div className="max-w-[600px] h-full">
					<Subtitle content="Minutes flown" />
					<p className="font-light">
						Charting flight durations within a specific time frame, offering a clear overview for analysis.
					</p>
					<div className="w-full mt-4 h-[25rem]">
						<BarChart dataObject={flownTime.dataToRender} />
					</div>
				</div>
				<div className="max-w-[600px] h-full">
					<Subtitle content="Regions" />
					<p className="font-light">
						A visual summary of flight time across regions, highlighting minutes flown in a specified
						period.
					</p>
					<div className="w-full h-[28rem] flex justify-center items-center">
						<RadarChartStacked labels={regionTimeData.labels} dataObject={regionTime.dataToRender} />
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
