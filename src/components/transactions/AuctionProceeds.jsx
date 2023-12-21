"use client";

import React from "react";
import Title from "@/components/utility/Title";

import TableHeader from "@/components/utility/Table/TableHeader";
import TableDataCell from "@/components/utility/Table/TableDataCell";
import Skeleton from "@/components/utility/skeletons/TransactionsSkeleton";

import { GetAPI } from "../../assets/js/api";
import { GetUser } from "../../assets/js/user";

const AuctionProceeds = () => {
	const adriaId = GetUser();
	const auction_proceeds = GetAPI(`/auctions/${adriaId}`, true);

	if (auction_proceeds === null) {
		return (
			<div className="mt-12">
				<Title content="Auction Proceeds" />
				<p className="font-light pb-4">An overview of your earnings from the auction.</p>
				<Skeleton firstCol="Auction ID" />
			</div>
		);
	}

	return (
		<section>
			<Title content="Auction Proceeds" />
			<p className="font-light pb-4">An overview of your earnings from the auction.</p>
			<div className="bg-white px-8 pb-6 max-h-[335px] rounded-xl overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent shadow-md">
				<table className="w-full">
					<thead className="sticky top-0 bg-white w-full">
						<tr className="text-left">
							<TableHeader pl="10">Auction ID</TableHeader>
							<TableHeader>Date</TableHeader>
							<TableHeader>Status</TableHeader>
							<TableHeader>Amount</TableHeader>
						</tr>
					</thead>
					<tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-alternatingTransaction">
						{auction_proceeds.map((auction_proceed) => (
							<tr key={auction_proceed.id}>
								<TableDataCell extra_styling="font-bold pl-10">{auction_proceed.id}</TableDataCell>
								<TableDataCell>
									{new Intl.DateTimeFormat("en-GB").format(new Date(auction_proceed.date))}
								</TableDataCell>
								<TableDataCell>
									{auction_proceed.status
										.replace(/_/g, " ")
										.toLowerCase()
										.replace(/^\w/, (c) => c.toUpperCase())}
								</TableDataCell>
								<TableDataCell>{auction_proceed.amount.toFixed(2)} ADCO</TableDataCell>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default AuctionProceeds;
