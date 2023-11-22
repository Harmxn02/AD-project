"use client";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import Statistics from "@/components/dashboard/Statistics";
import RecentXplorations from "@/components/dashboard/RecentXplorations";
import RecentFinds from "@/components/dashboard/RecentFinds";
import Revenue from "@/components/dashboard/Revenue";
import { useState } from "react";

export default function Home() {
	const [activeButton, setActiveButton] = useState("DAY");

	const handleButtonClick = (title) => {
		setActiveButton(title);
	};

	return (
		<div className="flex">
			<Sidebar />
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Header
					activeButton={activeButton}
					onButtonClick={handleButtonClick}
				/>
				<Statistics activeButton={activeButton} />
				<RecentFinds />
				<RecentXplorations />
				<Revenue />
			</section>
		</div>
	);
}
