import React from "react";
import Title from "@/components/utility/Title";
import Image from "next/image";
import RecentsContainer from "@/components/utility/Recents/RecentsContainer";
import { GetAPI } from "@/assets/js/api";
import { findCountry } from "@/assets/js/findCountry";

const RecentXplorations = () => {
	const recent_xplorations = [
		{
			id: 1,
			image_path: "FRANCE",
			countries_visited: "France",
			duration: "2 hours and 22 minutes",
			date: "08/08/2084",
		},
		{
			id: 2,
			image_path: "EGYPT",
			countries_visited: "Egypt - United Kingdom",
			duration: "8 hours and 44 minutes",
			date: "14/07/2084",
		},
		{
			id: 3,
			image_path: "CHINA",
			countries_visited: "China - India - Japan",
			duration: "26 hours and 35 minutes",
			date: "29/06/2084",
		},
	];

	// let test = GetAPI("/sessions");

	// if (test == null) {
	// 	return;
	// }

	// console.log("test: ", test[0]);

	// const end_latitude = test[0].endLatitude;
	// const end_longitude = test[0].endLongitude;
	// console.log("end: ", findCountry(end_longitude, end_latitude));

	// const start_latitude = test[0].startLatitude;
	// const start_longitude = test[0].startLongitude;
	// console.log("start: ", findCountry(start_longitude, start_latitude));

	return (
		<section className="mt-12">
			<Title content="Recent X-Plorations" />
			<p className="font-light pb-4">
				An overview of your recently visited locations, including travel time.
			</p>
			<div className="w-full flex flex-col gap-5">
				{recent_xplorations.map((exploration) => (
					<RecentsContainer
						key={exploration.id}
					>
						<Image
							src={`/icons/flags/${exploration.image_path}.svg`}
							width={256}
							height={256}
							className="w-16 h-16 rounded-xl rounded-tr-none rounded-br-none "
							alt="country flag"
						></Image>

						<div className="w-3/6 flex items-center h-full border-r-4">
							<p className="font-medium text-lg">
								{exploration.countries_visited}
							</p>
						</div>
						<div className="w-3/6 flex flex-row justify-between items-center px-8">
							<p className="text-brandBlack font-semibold">
								{exploration.duration}
							</p>
							<p className="font-medium text-sm">
								{exploration.date}
							</p>
						</div>
					</RecentsContainer>
				))}
			</div>
		</section>
	);
};

export default RecentXplorations;
