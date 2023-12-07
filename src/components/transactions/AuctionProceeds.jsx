"use client";

import React from "react";
import Title from "@/components/utility/Title";

import TableHeader from "@/components/utility/Table/TableHeader";
import TableDataCell from "@/components/utility/Table/TableDataCell";

import { GetAPI } from "../../assets/js/api";

const AuctionProceeds = () => {
	const auction_proceeds = GetAPI("/auctions");
	console.log("AU: ", auction_proceeds);


	return (
		<section>
			<Title content="Auction Proceeds" />
			<div className="bg-white px-8 pb-6 max-h-[335px] rounded-xl overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent shadow-md">
				<table className="w-full">
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
									{auction_proceed.status}
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
