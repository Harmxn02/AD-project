"use client";

import Header from "@/components/dashboard/Header";
import Statistics from "@/components/dashboard/Statistics";
import RecentXplorations from "@/components/dashboard/RecentXplorations";
import RecentFinds from "@/components/dashboard/RecentFinds";
import Revenue from "@/components/dashboard/Revenue";
import Layout from "@/components/utility/Layout";
import React, { useState } from "react";

const MemoizedStatistics = React.memo(Statistics);
const MemoizedRecentFinds = React.memo(RecentFinds);
const MemoizedRecentXplorations = React.memo(RecentXplorations);
const MemoizedRevenue = React.memo(Revenue);

export default function Home() {
	const [activeButton, setActiveButton] = useState("DAY");

	const handleButtonClick = (title) => {
		setActiveButton(title);
	};

	return (
		<Layout>
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<Header activeButton={activeButton} onButtonClick={handleButtonClick} />
				<MemoizedStatistics activeButton={activeButton} />
				<MemoizedRecentFinds />
				<MemoizedRecentXplorations />
				<MemoizedRevenue activeButton={activeButton} />
			</section>
		</Layout>
	);
}
