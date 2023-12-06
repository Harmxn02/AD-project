import Sidebar from "@/components/dashboard/Sidebar";
import Transactions from "@/components/transactions/Transactions";
import AuctionProceeds from "@/components/transactions/AuctionProceeds";

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<Transactions />
				<AuctionProceeds />
			</section>
		</div>
	);
}
