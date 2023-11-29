"use client";

import React from "react";
import Title from "@/components/utility/Title";

import TableHeader from '@/components/utility/Table/TableHeader';
import TableDataCell from "@/components/utility/Table/TableDataCell";

import Loading from "@/components/utility/Loading";

// import { GetAPI } from "../../assets/js/api";

// TODO: get server people to implement Auction Proceeds (API) endpoint

const AuctionProceeds = () => {
	const auction_proceeds = [
		{
			id: "INV001",
			date: "08/05/2084",
			subscription: "Not auctioned yet",
			amount: "250.00 ADRA",
		},
		{
			id: "INV002",
			date: "08/06/2084",
			subscription: "Processing",
			amount: "150.00 ADRA",
		},
		{
			id: "INV003",
			date: "08/07/2084",
			subscription: "Sent",
			amount: "350.00 ADRA",
		},
		{
			id: "INV004",
			date: "08/05/2084",
			subscription: "Sent",
			amount: "350.00 ADRA",
		},
		{
			id: "INV005",
			date: "08/09/2084",
			subscription: "Sent",
			amount: "150.00 ADRA",
		},
		{
			id: "INV006",
			date: "08/10/2084",
			subscription: "Sent",
			amount: "50.00 ADRA",
		},
	];

	return (
		<section>
			<Title content="Auction Proceeds" />
			<div className="bg-white w-8/12 px-8 pb-6 max-h-[335px] overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent shadow-md">
				<table>
					<thead className="sticky top-0 bg-white w-full">
						<tr className="text-left">
							<TableHeader pl="10">Transaction ID</TableHeader>
							<TableHeader>Date</TableHeader>
							<TableHeader>Status</TableHeader>
							<TableHeader>Amount</TableHeader>
						</tr>
					</thead>
					<tbody>
						{auction_proceeds.map((auction_proceed) => (
							<tr
								key={auction_proceed.id}
								className={`${
									auction_proceed.id.slice(-1) % 2 === 0
										? "bg-alternatingTransaction"
										: "bg-white"
								}`}
							>
								
								<TableDataCell extra_styling="font-bold pl-10">
									{auction_proceed.id}
								</TableDataCell>
								<TableDataCell>
									{auction_proceed.date}
								</TableDataCell>
								<TableDataCell>
									{auction_proceed.subscription}
								</TableDataCell>
								<TableDataCell>
									{auction_proceed.amount}
								</TableDataCell>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default AuctionProceeds;
