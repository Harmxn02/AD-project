import React from "react";
import Title from "@/components/utility/Title";
import SubscriptionsCardSkeleton from "./SubscriptionsCardSkeleton";
import VerticalSubscriptionCard from "@/components/settings/subscription/VerticalSubscriptionCard";

const SubscriptionsPageSkeleton = () => {
	const numberOfNormalCards = [{ id: 1 }, { id: 2 }, { id: 3 }];

	return (
		<section className="mb-12">
			<Title content="Subscription Plans" />
			<div className="flex justify-between">
				{numberOfNormalCards.map((card) => (
					<SubscriptionsCardSkeleton
						key={card.id}
						isLast={card.id === numberOfNormalCards.length}
					></SubscriptionsCardSkeleton>
				))}
			</div>
			<VerticalSubscriptionCard />
		</section>
	);
};

export default SubscriptionsPageSkeleton;
