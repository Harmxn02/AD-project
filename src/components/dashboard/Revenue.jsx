"use client";

import React from "react";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
import LineBarChart from "@/components/dashboard/charts/LineBarChart";
import PeriodicRevenueSkeleton from "@/components/utility/skeletons/PeriodicRevenueSkeleton";

import { GetAPI } from "../../assets/js/api";
import { GetUser } from "../../assets/js/user";

const Revenue = ({ activeButton }) => {
	const adriaId = GetUser();
	const revenueDataAPI = GetAPI(`/revenue/${adriaId}`);

	const revenue = {
		dataToRender: [],
	};

	let prefixTitle;

	if (!revenueDataAPI) {
		return <PeriodicRevenueSkeleton />;
	}

	const dataContext = {
		lineBackgroundColor: "rgba(49, 94, 101, 1)",
		lineBorderColor: "rgba(49, 94, 101, 1)",
		lineBorderWidth: 1,

		barBackgroundColor: "rgba(98, 160, 170, 0.45)",
		barBorderColor: "rgba(75, 192, 192, 1)",
		barBorderWidth: 1,

		defaultLabel: "ADCO earned",
	};

	const revenueData = {
		dailyData: [
			{
				type: "line",
				label: dataContext.defaultLabel,
				data: revenueDataAPI.daily,
				backgroundColor: dataContext.lineBackgroundColor,
				borderColor: dataContext.lineBorderColor,
				borderWidth: dataContext.lineBorderWidth,
			},
			{
				type: "bar",
				label: dataContext.defaultLabel,
				data: revenueDataAPI.daily,
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
		weeklyData: [
			{
				type: "line",
				label: dataContext.defaultLabel,
				data: revenueDataAPI.weekly,
				backgroundColor: dataContext.lineBackgroundColor,
				borderColor: dataContext.lineBorderColor,
				borderWidth: dataContext.lineBorderWidth,
			},
			{
				type: "bar",
				label: dataContext.defaultLabel,
				data: revenueDataAPI.weekly,
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
		monthlyData: [
			{
				type: "line",
				label: dataContext.defaultLabel,
				data: revenueDataAPI.monthly,
				backgroundColor: dataContext.lineBackgroundColor,
				borderColor: dataContext.lineBorderColor,
				borderWidth: dataContext.lineBorderWidth,
			},
			{
				type: "bar",
				label: dataContext.defaultLabel,
				data: revenueDataAPI.monthly,
				backgroundColor: dataContext.barBackgroundColor,
				borderColor: dataContext.barBorderColor,
				borderWidth: dataContext.barBorderWidth,
			},
		],
	};

	switch (activeButton) {
		case "DAY":
			revenue.dataToRender = revenueData.dailyData;
			prefixTitle = "Daily";
			break;
		case "WEEK":
			revenue.dataToRender = revenueData.weeklyData;
			prefixTitle = "Weekly";
			break;
		case "MONTH":
			revenue.dataToRender = revenueData.monthlyData;
			prefixTitle = "Monthly";
			break;
		default:
			break;
	}

	return (
		<section className="mt-12">
			<Title content={`${prefixTitle} Revenue`} />
			<p className="font-light">
				An overview of revenue changes within a specific timeframe for
				quick analysis.
			</p>
			<div className="w-full mt-4 h-[25rem]">
				<LineBarChart
					labels={revenue.labels}
					dataObject={revenue.dataToRender}
				/>
			</div>
		</section>
	);
};

Revenue.propTypes = {
	activeButton: PropTypes.string.isRequired,
};

export default Revenue;
