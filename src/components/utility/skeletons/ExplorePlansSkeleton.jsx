import React from "react";
import SubscriptionOverviewCardSkeleton from "./SubscriptionOverviewCardSkeleton";
import Link from "next/link";
import Image from "next/image";
import XplorDroneLogo from "../../../../public/icons/xplor_drone.svg";

const ExplorePlansSkeleton = () => {
	return (
		<div className="selection:bg-[#62a0aa71] min-h-screen px-8 bg-brandDarkGreen">
			<header className="flex items-center gap-2 mb-3">
				<Link href="/" className="h-[10vh] z-10 flex items-center gap-2">
					<h1 className="text-brandLightGreen text-2xl font-bold">X-Plor</h1>
					<Image src={XplorDroneLogo} height={24} width={24} alt="cyan x-plor drone logo" />
				</Link>
			</header>
			<main className="flex flex-col justify-center items-center">
				<div className="text-center">
					<h3 className="text-5xl bg-gradient-to-r from-brandLightGreen to-white bg-clip-text text-transparent font-semibold mb-4">
						Simple and
						<br />
						<span className="bg-gradient-to-r from-brandLightGreen to-white bg-clip-text text-transparent">
							Transparant pricing
						</span>
					</h3>
					<p className="text-white">
						Prices that follow the growth of the business, so you will never be paying more than you need.
					</p>
				</div>
				<section className="flex w-full gap-12 mt-12 pb-8 justify-between">
					<SubscriptionOverviewCardSkeleton />
					<SubscriptionOverviewCardSkeleton />
					<SubscriptionOverviewCardSkeleton />
					<SubscriptionOverviewCardSkeleton />
				</section>
			</main>
		</div>
	);
};

export default ExplorePlansSkeleton;
