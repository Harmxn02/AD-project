"use client";

import React from "react";
import Title from "@/components/utility/Title";
import SubscriptionCard from "./SubscriptionCard";
import ListItem from "./ListItem";
import VerticalSubscriptionCard from "./VerticalSubscriptionCard";

import SubscriptionsPageSkeleton from "@/components/utility/skeletons/SubscriptionsPageSkeleton";

import { GetAPI } from "../../../assets/js/api";

const SubscriptionsPage = () => {
	// normally `const endpoint`, but I need to splice the first 3 elements
	let plans = GetAPI("/plans");

	if (!plans) {
		return <SubscriptionsPageSkeleton />;
	}

	plans = plans.slice(0, 3);

	return (
		<section className="mb-12 ">
			<Title content="Subscription Plans" />
			<div className="flex justify-between">
				{plans.map((subscription) => (
					<SubscriptionCard
						isLast={subscription.id === plans.length}
						key={subscription.id}
						price={subscription.price}
						name={subscription.name}
					>
						{subscription.perks.map((perk) => (
							<ListItem key={perk} content={perk} />
						))}
					</SubscriptionCard>
				))}
			</div>
			<VerticalSubscriptionCard />
		</section>
	);
};

export default SubscriptionsPage;
