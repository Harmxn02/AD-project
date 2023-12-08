"use client";

import Account from "@/components/settings/Account";
import Layout from "@/components/utility/Layout";
import PrivacyAndPersonalization from "@/components/settings/PrivacyAndPersonalization";

export default function Home() {
	return (
		<Layout>
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<Account />
				<PrivacyAndPersonalization />
			</section>
		</Layout>
	);
}
