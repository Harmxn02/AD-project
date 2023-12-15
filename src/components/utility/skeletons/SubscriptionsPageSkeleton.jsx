import React from "react";
import Title from "@/components/utility/Title";
import SubscriptionsCardSkeleton from "./SubscriptionsCardSkeleton";
import VerticalSubscriptionCard from "@/components/settings/subscription/VerticalSubscriptionCard";

const SubscriptionsPageSkeleton = () => {
	
    const numberOfNormalCards = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
	];
    
    
    return (
		<section className="mb-12">
			<Title content="Subscription Plans" />
			<div className="flex justify-between">
				{numberOfNormalCards.map((cards) => (
					<SubscriptionsCardSkeleton
                    isLast={cards.id === numberOfNormalCards.length}
                    key={numberOfNormalCards.id}
                >
                    {/* {subscription.perks.map((perk) => (
                        <ListItem key={perk} content={perk} />
                    ))} */}
                </SubscriptionsCardSkeleton>
				))}
			</div>
            <VerticalSubscriptionCard/>
		</section>
	);
};

export default SubscriptionsPageSkeleton;
