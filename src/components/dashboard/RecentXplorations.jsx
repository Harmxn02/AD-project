import React from "react";
import Title from "@/components/utility/Title";

const RecentXplorations = () => {
	const recent_xplorations = [
		{
			id: 1,
			image_url: "#",
			countries_visited: "France",
			duration: "2 hours and 22 minutes",
			date: "08/08/2084",
		},
		{
			id: 2,
			image_url: "#",
			countries_visited: "Egypt - United Kingdom",
			duration: "8 hours and 44 minutes",
			date: "14/07/2084",
		},
		{
			id: 3,
			image_url: "#",
			countries_visited: "China - India - Japan",
			duration: "26 hours and 35 minutes",
			date: "29/06/2084",
		},
	];

	return (
		<section className="mt-12">
			<Title content="Recent finds" />

			<div className="w-full flex flex-col gap-5">
				{recent_xplorations.map((exploration) => (
					<div
						key={exploration.id}
						className="h-16 bg-white shadow flex flex-row items-center justify-between gap-5"
					>
						{/* todo REPLACE: with <Image/> tag */}
						<div className="bg-black w-16 h-full">image</div>

						<div className="w-3/6 flex items-center h-full border-black border-r-4">
							<p className="font-bold text-lg">
								{exploration.countries_visited}
							</p>
						</div>
						<div className="w-3/6 flex flex-row justify-between items-center px-8">
							<p className="text-brandBlack font-semibold">
								{exploration.duration}
							</p>
							<p className="font-bold text-sm">
								{exploration.date}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default RecentXplorations;
