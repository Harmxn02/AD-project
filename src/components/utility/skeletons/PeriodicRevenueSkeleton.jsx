import React from "react";
import Title from "@/components/utility/Title";

const PeriodicRevenueSkeleton = () => {
	return (
		<section className="mt-12">
			<Title content="Daily Revenue" />
			<p className="font-light">
				An overview of revenue changes within a specific timeframe for
				quick analysis.
			</p>
			<div className="w-full mt-4 h-[25rem]">
				
			</div>
		</section>
	);
};

export default PeriodicRevenueSkeleton;
