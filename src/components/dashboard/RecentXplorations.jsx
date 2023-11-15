import React from "react";
import Title from "@/components/utility/Title";

const RecentXplorations = () => {
	const recent_xplorations = [
		{
			countries_visited: "France",
			duration: "2 hours and 22 minutes",
			date: "08/08/2084",
		},
		{
			countries_visited: "Egypt - United Kingdom",
			duration: "8 hours and 44 minutes",
			date: "14/07/2084",
		},
		{
			countries_visited: "China - India - Japan",
			duration: "26 hours and 35 minutes",
			date: "29/06/2084",
		},
	];

	return (
		<>
			<Title content="Recent X-Plorations" />

			<div className="w-full flex flex-col gap-5 shadow">
				<div className="h-16 flex flex-row items-center justify-between gap-5">
					<div className="bg-black w-16 h-full">image</div>
					<div className="w-3/6 flex items-center h-full border-black border-r-4">
						<p className="font-bold text-lg">France</p>
					</div>
					<div className="w-3/6 flex flex-row justify-between items-center px-8">
						<p className="text-brandBlack font-semibold">2 hours and 22 minutes</p>
						<p className="font-bold text-sm">29/06/2084</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentXplorations;
