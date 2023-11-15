"use client"

import React from "react";
import Title from "@/components/utility/Title";

import { GetAPI } from "../utility/api";

const Transactions = () => {
	let transactions = GetAPI("/transactions");

	if (transactions === null) {
		// this prevents map from not working, because the data is empty
		console.log("When this component was rendered, transactions == ", transactions)
		return;
	}

	console.log("TR: ", transactions)

	const auction_proceeds = [
		{
			id: "INV001",
			date: "08.05.2084",
			subscription: "Not auctioned yet",
			amount: "250.00 ADRA",
		},
		{
			id: "INV002",
			date: "08.06.2084",
			subscription: "Processing",
			amount: "150.00 ADRA",
		},
		{
			id: "INV003",
			date: "08.07.2084",
			subscription: "Sent",
			amount: "350.00 ADRA",
		},
		{
			id: "INV004",
			date: "08.05.2084",
			subscription: "Sent",
			amount: "350.00 ADRA",
		},
		{
			id: "INV005",
			date: "08.09.2084",
			subscription: "Sent",
			amount: "150.00 ADRA",
		},
		{
			id: "INV006",
			date: "08.10.2084",
			subscription: "Sent",
			amount: "50.00 ADRA",
		},
	];

	return (
		<section>
			<Title content="Transactions" />
			<div className="bg-white w-full px-8 pb-6 mb-12 max-h-[400px] overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent shadow">
				<table>
					<thead className="sticky top-0 bg-white w-full">
						<tr className="text-left">
							<th className="w-[12.5%] h-12 pl-10">Transaction ID</th>
							<th className="w-[12.5%] h-12">Date</th>
							<th className="w-[12.5%] h-12">Subscription</th>
							<th className="w-[12.5%] h-12">Amount</th>
						</tr>
					</thead>
					<tbody>
						{/* {transactions.map((transaction, index) => (
							<tr
								key={transaction.id}
								className={`${
									index % 2 === 0
										? "bg-[#DFE5EB]"
										: "bg-white"
								}`}
							>
								<td className="h-12 text-sm font-bold  pl-10">
									{transaction.id}
								</td>
								<td className="h-12 text-sm">
									{transaction.date}
								</td>
								<td className="h-12 text-sm">
									{transaction.subscriptionId}
								</td>
								<td className="h-12 text-sm">
									{transaction.amount}
								</td>
							</tr>
						))} */}

						{transactions.map((transaction, index) => (
							<tr
								key={transaction.id}
								className={`${
								index % 2 === 0
									? "bg-[#DFE5EB]"
									: "bg-white"
								}`}
							>
								<td className="h-12 text-sm font-bold pl-10">
									{transaction.id}
								</td>
								<td className="h-12 text-sm">
									{new Date(transaction.date).toLocaleDateString()} {/* Convert timestamp to date */}
								</td>
								<td className="h-12 text-sm">
									{transaction.subscriptionId}
								</td>
								<td className="h-12 text-sm">
									{transaction.amount} ADCO
								</td>
							</tr>
						))}

					</tbody>
				</table>
			</div>

			<Title content="Auction Proceeds"/>
			<div className="bg-white w-full px-8 pb-6 max-h-[260px] overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent shadow">
				<table>
					<thead className="sticky top-0 bg-white w-full">
						<tr className="text-left">
							<th className="w-[12.5%] h-12 pl-10">
								Transaction ID
							</th>
							<th className="w-[12.5%] h-12">Date</th>
							<th className="w-[12.5%] h-12">Status</th>
							<th className="w-[12.5%] h-12">Amount</th>
						</tr>
					</thead>
					<tbody>
						{auction_proceeds.map((auction_proceed, index) => (
							<tr
								key={auction_proceed.id}
								className={`${
									index % 2 === 0
										? "bg-[#DFE5EB]"
										: "bg-white"
								}`}
							>
								<td className="h-12 text-sm font-bold  pl-10">
									{auction_proceed.id}
								</td>
								<td className="h-12 text-sm">
									{auction_proceed.date}
								</td>
								<td className="h-12 text-sm">
									{auction_proceed.subscription}
								</td>
								<td className="h-12 text-sm">
									{auction_proceed.amount}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Transactions;
