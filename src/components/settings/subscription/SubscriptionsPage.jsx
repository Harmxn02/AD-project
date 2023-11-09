import React from "react";
import Title from "../../utility/Title";
import SubscriptionCard from "./SubscriptionCard";
import ListItem from "./ListItem";
import VerticalSubscriptionCard from "./VerticalSubscriptionCard";

const SubscriptionsPage = () => {
	const subscriptionData = [
		{ price: "21.99" ,  name: "Lewis & Clark", perks: ["10 hours flight time", "Specialized training", "Customer support", "Max 1 rental/week"] },
		{ price: "33.99" ,  name: "Marco Polo", perks: ["Everything included in L&C...", "24 hours flight time", "Priority during peak hours"] },
		{ price: "39.99" ,  name: "Magellan", perks: ["Everything included in MP...", "48 hours flight time", "24/7 customer support", "Unlimited rental opportunities"] },
	];

	return (
		<div>
			<Title content="Subscription Plans" />
			<div className="grid grid-cols-3">
				{subscriptionData.map((subscription, index) => (
					<SubscriptionCard isLast={index === subscriptionData.length - 1}  key={index} price={subscription.price} name={subscription.name}>
						{subscription.perks.map((perk, perkIndex) => (
							<ListItem key={perkIndex} content={perk} />
						))}
					</SubscriptionCard>
				))}
				<VerticalSubscriptionCard/>
			</div>
		</div>
	);
};

export default SubscriptionsPage;
