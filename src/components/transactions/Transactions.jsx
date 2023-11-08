import React from "react";
import Title from "../utility/Title";
import Head from "next/head";
import Link from "next/link";

const Transactions = () => {
	const transactions = [
		{
			id: "INV001",
			date: "08.05.2084",
			subscription: "Magellan",
			amount: "$250.00",
		},
		{
			id: "INV002",
			date: "08.06.2084",
			subscription: "Magellan",
			amount: "$150.00",
		},
		{
			id: "INV003",
			date: "08.07.2084",
			subscription: "Magellan",
			amount: "$350.00",
		},
		{
			id: "INV004",
			date: "08.08.2084",
			subscription: "Magellan",
			amount: "$450.00",
		},
		{
			id: "INV005",
			date: "08.09.2084",
			subscription: "Magellan",
			amount: "$550.00",
		},
		{
			id: "INV006",
			date: "08.10.2084",
			subscription: "Magellan",
			amount: "$200.00",
		},
		{
			id: "INV007",
			date: "08.11.2084",
			subscription: "Magellan",
			amount: "$300.00",
		},
	];

	return (
		<>
			<Title content="Transactions" />
			<div className="bg-white max-w-fit px-8 py-6">
				<table>
					<thead>
						<tr className="text-left">
							<th className="w-[12.5%] h-12 pl-10">Transaction ID</th>
							<th className="w-[12.5%] h-12">Date</th>
							<th className="w-[12.5%] h-12">Subscription</th>
							<th className="w-[12.5%] h-12">Amount</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction, index) => (
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
									{transaction.subscription}
								</td>
								<td className="h-12 text-sm">
									{transaction.amount}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Transactions;
