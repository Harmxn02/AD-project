"use client";

import React from "react";
import Title from "@/components/utility/Title";

import TableHeader from "@/components/utility/Table/TableHeader";
import TableDataCell from "@/components/utility/Table/TableDataCell";

import { GetAPI } from "../../assets/js/api";

const Transactions = () => {
	const transactions = GetAPI("/transactions");

	if (transactions === null) {
		return (
			<div>
				{/* Potential Loader? */}
				<Title content="Transactions" />
				<div className="h-[335px] w-full rounded-xl shadow-md animate-pulse text-brandBackground">
					Loader
				</div>
			</div>
		);
	}

	console.log("TR: ", transactions);

	return (
		<section>
			<Title content="Transactions" />
			<div className="bg-white px-8 pb-6 mb-12 max-h-[335px] rounded-xl overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent shadow-md">
				<table className="w-full">
					<thead className="sticky top-0 bg-white w-full">
						<tr className="text-left">
							<TableHeader pl="10">Transaction ID</TableHeader>
							<TableHeader>Date</TableHeader>
							<TableHeader>Subscription</TableHeader>
							<TableHeader>Amount</TableHeader>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction) => (
							<tr
								key={transaction.id}
								className={`${
									transaction.id % 2 === 0
										? "bg-alternatingTransaction"
										: "bg-white"
								}`}
							>
								<TableDataCell extra_styling="font-bold pl-10">
									{transaction.id}
								</TableDataCell>
								<TableDataCell>
									{new Date(
										transaction.date
									).toLocaleDateString(undefined, {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}{" "}
								</TableDataCell>
								<TableDataCell>
									{transaction.subscription.plan.name}
								</TableDataCell>
								<TableDataCell>
									{parseFloat(transaction.amount).toFixed(2)}{" "}
									ADCO
								</TableDataCell>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Transactions;
