"use client";
import Header from "@/components/dashboard/Header";
import Statistics from "@/components/dashboard/Statistics";
import RecentXplorations from "@/components/dashboard/RecentXplorations";
import RecentFinds from "@/components/dashboard/RecentFinds";
import Revenue from "@/components/dashboard/Revenue";
import Layout from "@/components/utility/Layout"
import { useState } from "react";

export default function Home() {
	const [activeButton, setActiveButton] = useState("DAY");

	const handleButtonClick = (title) => {
		setActiveButton(title);
	};

	return (
		<Layout>
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<Header
					activeButton={activeButton}
					onButtonClick={handleButtonClick}
				/>
				<Statistics activeButton={activeButton} />
				<RecentFinds />
				<RecentXplorations />
				<Revenue />
			</section>
		</Layout>
	);
}
