import React from "react";
import PropTypes from "prop-types";
import Title from "@/components/utility/Title";
import LineBarChart from "@/components/dashboard/charts/LineBarChart";
import PeriodicRevenueSkeleton from "@/components/utility/skeletons/PeriodicRevenueSkeleton";

import { GetAPI } from "../../assets/js/api";

const Revenue = ({ activeButton }) => {
	let adriaId;

	if (typeof window !== "undefined") {
		if (localStorage.getItem("AdriaUser")) {
			adriaId = JSON.parse(localStorage.getItem("AdriaUser")).id;
		}
	}
	const revenueDataAPI = GetAPI(`/revenue/${adriaId}`);

	const revenue = {
		dataToRender: [],
	};

	let prefixTitle;

	if (!revenueDataAPI) {
		return <PeriodicRevenueSkeleton />;
	}

	const revenueData = {
		dailyData: [
			{
				type: "line",
				label: "ADCO earned",
				data: revenueDataAPI.daily,
				backgroundColor: "rgba(49, 94, 101, 1)",
				borderColor: "rgba(49, 94, 101, 1)",
				borderWidth: 1,
			},
			{
				type: "bar",
				label: "ADCO earned",
				data: revenueDataAPI.daily,
				backgroundColor: "rgba(98, 160, 170, 0.45)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
		weeklyData: [
			{
				type: "line",
				label: "ADCO earned",
				data: revenueDataAPI.weekly,
				backgroundColor: "rgba(49, 94, 101, 1)",
				borderColor: "rgba(49, 94, 101, 1)",
				borderWidth: 1,
			},
			{
				type: "bar",
				label: "ADCO earned",
				data: revenueDataAPI.weekly,
				backgroundColor: "rgba(98, 160, 170, 0.45)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
		monthlyData: [
			{
				type: "line",
				label: "ADCO earned",
				data: revenueDataAPI.monthly,
				backgroundColor: "rgba(49, 94, 101, 1)",
				borderColor: "rgba(49, 94, 101, 1)",
				borderWidth: 1,
			},
			{
				type: "bar",
				label: "ADCO earned",
				data: revenueDataAPI.monthly,
				backgroundColor: "rgba(98, 160, 170, 0.45)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
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
			revenue.dataToRender = revenueData.dailyData;
			prefixTitle = "Daily";
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
