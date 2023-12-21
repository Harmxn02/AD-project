"use client";

import React, { useState, useEffect } from "react";
import Title from "@/components/utility/Title";
import SubscriptionCard from "./SubscriptionCard";
import ListItem from "./ListItem";
import VerticalSubscriptionCard from "./VerticalSubscriptionCard";

import SubscriptionsPageSkeleton from "@/components/utility/skeletons/SubscriptionsPageSkeleton";

import { GetAPI } from "../../../assets/js/api";

import toast, { Toaster } from "react-hot-toast";

const fetchPlanId = async (adriaId) => {
	try {
		const response = await fetch(
			`https://project-2.ti.howest.be/2023-2024/group-17/api/members/${adriaId}`,
		);

		if (response.ok) {
			const { member } = await response.json();
			return member.subscription.plan.id;
		} else {
			console.error("Failed to fetch plan");
			return null;
		}
	} catch (error) {
		console.error("Error fetching plan data:", error);
		return null;
	}
};

const switchPlan = async (adriaId, subscriptionId) => {
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

		if (!response.ok) {
			console.error("Failed to switch plan");
		}
	} catch (error) {
		console.error("Error while fetching the PUT endpoint", error);
	}
};

const SubscriptionsPage = () => {
	const adriaId = 1;
	const [activePlanId, setActivePlanId] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const fetchedPlanId = await fetchPlanId(adriaId);
			setActivePlanId(fetchedPlanId);
		};

		fetchData();
	}, [adriaId]);

	const handleSwitchPlan = async (subscriptionId) => {
		switchPlan(adriaId, subscriptionId);
		setActivePlanId(subscriptionId); // Update the active plan ID
		toast.success(`Subscription succesfully changed.`);
	};

	let plans = GetAPI("/plans");

	if (!plans) {
		return <SubscriptionsPageSkeleton />;
	}

	plans = plans.slice(0, 3);

	return (
		<section className="mb-12 ">
			<Toaster />
			<Title content="Subscription Plans" />
			<div className="flex justify-between">
				{plans.map((subscription) => (
					<SubscriptionCard
						key={subscription.id}
						isLast={subscription.id === plans.length}
						initialIsActive={subscription.id === activePlanId}
						onActivate={() => handleSwitchPlan(subscription.id)}
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
