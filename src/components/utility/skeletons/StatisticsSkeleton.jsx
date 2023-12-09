import React from "react";
import Title from "@/components/utility/Title";
import Subtitle from "@/components/utility/Subtitle";

import Image from "next/image";
import Logo from "../../../../public/icons/logo.svg";

// Kan ook deze icon gebruiken
// import Logo from "../../../public/icons/fullscreen.svg";

const StatisticsSkeleton = () => {
	return (
		<section>
			<Title content="Daily Statistics" />
			<div className="flex justify-between">
				<div className="max-w-[600px] h-full">
					<Subtitle content="Minutes flown" />
					<p className="font-light">
						Charting flight durations within a specific time frame,
						offering a clear overview for analysis.
					</p>
					<div className="w-full mt-4 h-[25rem]">
						<div className="h-[24rem] animate-pulse rounded-xl bg-gray-200 flex justify-center items-center">
                            <Image src={Logo} alt="logo" width={200} />
                        </div>
					</div>
				</div>
				<div className="max-w-[600px] h-full">
					<Subtitle content="Regions" />
					<p className="font-light">
						A visual summary of flight time across regions,
						highlighting minutes flown in a specified period.
					</p>
					<div className="w-full mt-4 h-[28rem]">
						<div className="h-[24rem] animate-pulse rounded-xl bg-gray-200 flex justify-center items-center">
                            <Image src={Logo} alt="logo" width={200} />
                        </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatisticsSkeleton;
