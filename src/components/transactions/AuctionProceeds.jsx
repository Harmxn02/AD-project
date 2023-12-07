"use client";

import React from "react";
import Title from "@/components/utility/Title";

import TableHeader from "@/components/utility/Table/TableHeader";
import TableDataCell from "@/components/utility/Table/TableDataCell";
import Skeleton from "./Skeleton";

import { GetAPI } from "../../assets/js/api";

const AdriaID = 1;

const AuctionProceeds = () => {
	const auction_proceeds = GetAPI(`/auctions/${AdriaID}`);

	if (auction_proceeds === null) {
		return (
			<div className="mt-12">
				<Title content="Auction Proceeds" />
				<Skeleton />
			</div>
		);
	}

	console.log("AU: ", auction_proceeds);

	return (
		<section>
			<Title content="Auction Proceeds" />
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
								<TableDataCell extra_styling="font-bold pl-10">
									{auction_proceed.id}
								</TableDataCell>
								<TableDataCell>
									{new Date(
										auction_proceed.date
									).toLocaleDateString(undefined, {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}
								</TableDataCell>
								<TableDataCell>
									{auction_proceed.status
										.replace(/_/g, " ")
										.toLowerCase()
										.replace(/^\w/, (c) => c.toUpperCase())
										}
								</TableDataCell>
								<TableDataCell>
									{parseFloat(auction_proceed.amount).toFixed(
										2
									)}{" "}
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

export default AuctionProceeds;
