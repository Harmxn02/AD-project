import Account from "@/components/settings/Account";
import Sidebar from "@/components/dashboard/Sidebar";
import PrivacyAndPersonalization from "@/components/settings/PrivacyAndPersonalization";

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Account />
				<PrivacyAndPersonalization />
			</section>
		</div>
	);
}
