"use client";

import React, { useState } from "react";
import Title from "@/components/utility/Title";
import SubscriptionCard from "./SubscriptionCard";
import ListItem from "./ListItem";
import VerticalSubscriptionCard from "./VerticalSubscriptionCard";

import SubscriptionsPageSkeleton from "@/components/utility/skeletons/SubscriptionsPageSkeleton";

import { GetAPI } from "../../../assets/js/api";

const SubscriptionsPage = () => {
	const adriaId = 1;
	const memberData = GetAPI(`/members/${adriaId}`);
	const subscriptionIdOfMember = memberData
		? memberData.subscriptionId
		: null;
	const plan = GetAPI(`/subscribe/${subscriptionIdOfMember}`);
	const planId = plan ? plan.id : null;

	const handleSwitchPlan = async (subscriptionId) => {
		try {
			const response = await fetch(
				`https://project-2.ti.howest.be/2023-2024/group-17/api/members/${adriaId}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ subscriptionId }),
				},
			);

			if (response.ok) {
				console.log("Plan switched successfully");
			} else {
				console.error("Failed to switch plan");
			}
		} catch (error) {
			console.error("Error while switching plan", error);
		}
	};

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
						isActive={subscription.id === planId} // Compare subscription.id with planId
						onActivate={() => {
							handleSwitchPlan(subscription.id);
						}}
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
