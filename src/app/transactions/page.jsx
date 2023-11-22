import Sidebar from "@/components/dashboard/Sidebar";
import Transactions from "@/components/transactions/Transactions";

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />
			<section className="pt-16 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Transactions />
			</section>
		</div>
	);
}
