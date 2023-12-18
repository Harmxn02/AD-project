"use client";

import Layout from "@/components/utility/Layout";
import Transactions from "@/components/transactions/Transactions";
import AuctionProceeds from "@/components/transactions/AuctionProceeds";

export default function Home() {
	return (
		<Layout>
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<Transactions />
				<AuctionProceeds />
			</section>
		</Layout>
	);
}
