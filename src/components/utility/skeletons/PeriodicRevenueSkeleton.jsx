import React from "react";
import Title from "@/components/utility/Title";
import Image from "next/image";
import Logo from "../../../../public/icons/logo.svg";

const PeriodicRevenueSkeleton = () => {
	return (
		<section className="mt-12">
			<Title content="Daily Revenue" />
			<p className="font-light">
				An overview of revenue changes within a specific timeframe for
				quick analysis.
			</p>
			<div className="w-full mt-4 h-[25rem] animate-pulse rounded-xl bg-gray-200 flex justify-center items-center">
                <Image src={Logo} alt="logo" width={450} />
            </div>
		</section>
	);
};

export default PeriodicRevenueSkeleton;
