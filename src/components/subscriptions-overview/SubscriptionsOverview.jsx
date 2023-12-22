"use client";

import Link from "next/link";
import SubscriptionsOverviewCard from "@/components/subscriptions-overview/SubscriptionsOverviewCard";
import { GetAPI } from "@/assets/js/api";
import XplorDroneLogo from "../../../public/icons/xplor_drone.svg";

import ExplorePlansSkeleton from "@/components/utility/skeletons/ExplorePlansSkeleton";
import Image from "next/image";

const SubscriptionsOverview = () => {
	const descriptions = {
		1: "Soar into adventure with 10 flight hours, expert training, and support.",
		2: "Elevate your journey with 24 hours of flight, plus priority access.",
		3: "Unleash boundless exploration with 48 hours, 24/7 support, and unlimited rentals.",
		4: "Dive into discovery at just $3.29 per hour. Start exploring now!",
	};

	const periods = {
		1: "month",
		2: "month",
		3: "month",
		4: "hour",
	};

	const explorePlans = GetAPI("/plans", true);

	if (explorePlans == null) {
		return (
			<div className="bg-brandDarkGreen">
				<ExplorePlansSkeleton />
			</div>
		);
	}

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
					{/* <h3 className="text-brandCyan mb-2">Our plans</h3> */}
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
					{explorePlans.map((plan) => (
						<SubscriptionsOverviewCard
							key={plan.id}
							name={plan.name}
							description={descriptions[plan.id]}
							price={plan.price}
							period={periods[plan.id]}
							features={plan.perks}
						/>
					))}
				</section>
			</main>
		</div>
	);
};

export default SubscriptionsOverview;
