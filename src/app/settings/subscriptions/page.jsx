import SubscriptionsPage from "@/components/settings/subscription/SubscriptionsPage";
import Layout from "@/components/utility/Layout";

export default function Home() {
	return (
		<Layout>
			<section className="pt-16 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<SubscriptionsPage />
			</section>
		</Layout>
	);
}
