import React from "react";
import Title from "@/components/utility/Title";
import Subtitle from "@/components/utility/Subtitle";

const StatisticsSkeleton = () => {
	return (
		<section>
			<Title content="Daily Statistics" />
			<div className="flex justify-between">
				<div className="max-w-[600px] h-full">
					<Subtitle content="Minutes flown" />
					<p className="font-light">
						Charting flight durations within a specific time frame, offering a clear overview for analysis.
					</p>
					<div className="w-full mt-4 h-[27rem]">
						<div className="h-[24rem] animate-pulse rounded-xl bg-gray-200 flex justify-center items-center">
							<svg
								className="w-10 h-10 text-gray-200 dark:text-gray-600"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 18"
							>
								<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
							</svg>
						</div>
					</div>
				</div>
				<div className="max-w-[600px] h-full">
					<Subtitle content="Regions" />
					<p className="font-light">
						A visual summary of flight time across regions, highlighting minutes flown in a specified
						period.
					</p>
					<div className="w-full mt-4 h-[27rem]">
						<div className="h-[24rem] animate-pulse rounded-xl bg-gray-200 flex justify-center items-center">
							<svg
								className="w-10 h-10 text-gray-200 dark:text-gray-600"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 18"
							>
								<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatisticsSkeleton;
