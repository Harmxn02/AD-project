"use client";

import React from "react";
import Title from "@/components/utility/Title";

import TableHeader from "@/components/utility/Table/TableHeader";
import TableDataCell from "@/components/utility/Table/TableDataCell";
import Skeleton from "@/components/utility/skeletons/TransactionsSkeleton";

import { GetAPI } from "../../assets/js/api";

const Transactions = () => {
	const transactions = GetAPI("/transactions");

	if (transactions === null) {
		return (
			<div>
				<Title content="Transactions" />
				<Skeleton firstCol="Transaction ID" />
			</div>
		);
	}

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
					<tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-alternatingTransaction">
						{transactions.map((transaction) => (
							<tr key={transaction.id}>
								<TableDataCell extra_styling="font-bold pl-10">
									{transaction.id}
								</TableDataCell>
								<TableDataCell>
									{new Intl.DateTimeFormat("en-GB").format(
										new Date(transaction.date)
									)}
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
