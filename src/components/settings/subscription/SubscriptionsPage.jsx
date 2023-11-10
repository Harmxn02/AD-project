import React, { useEffect } from "react";
import Title from "../../utility/Title";
import SubscriptionCard from "./SubscriptionCard";
import ListItem from "./ListItem";
import VerticalSubscriptionCard from "./VerticalSubscriptionCard";

import fetch from 'isomorphic-fetch'
import { useState } from 'react';

const SubscriptionsPage = ()=> {


	const [apiData, setApiData] = useState(null);

	const URL = `https://project-2.ti.howest.be/2023-2024/group-17/api`
  
	const fetchData = async () => {
	  try {
		const response = await fetch(URL + '/plans');
		const data = await response.json();
		const firstKey = Object.keys(data)[0];
		setApiData(data[firstKey].slice(0, 3));
	  } catch (error) {
		console.error("Error", error);
	  } 
	};
  
	// async function waitBefore() {
	// 	await fetchData();
	// 	console.log(apiData)
	// }

	useEffect(()  => {
		fetchData();
		console.log("test")
	}, []);

	// waitBefore();




	const subscriptionData = [
		{ price: "21.99" ,  name: "Lewis & Clark", perks: ["10 hours flight time", "Specialized training", "Customer support", "Max 1 rental/week"] },
		{ price: "33.99" ,  name: "Marco Polo", perks: ["Everything included in L&C...", "24 hours flight time", "Priority during peak hours"] },
		{ price: "39.99" ,  name: "Magellan", perks: ["Everything included in MP...", "48 hours flight time", "24/7 customer support", "Unlimited rental opportunities"] },
	];

	return (
		<div>

{/* {		apiData ? (
          <p>{JSON.stringify(apiData, null, 2)}</p>
        ): (
          <p>Loading ...</p>
        )}	 */}

			<Title content="Subscription Plans" />
			<div className="flex justify-between">
				{apiData ? ( apiData.map((subscription, index) => (
					<SubscriptionCard isLast={index === subscriptionData.length - 1}  key={index} price={subscription.price} name={subscription.name}>
						{subscription.perks.map((perk, perkIndex) => (
							<ListItem key={perkIndex} content={perk} />
						))}
					</SubscriptionCard>
				))
				) : (
					<p>Loading ...</p>
				)}
			</div>
				<VerticalSubscriptionCard/>
		</div>
	);
};

export default SubscriptionsPage;
