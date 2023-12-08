import DeleteAccountPrompt from "@/components/settings/DeleteAccountPrompt";
import Layout from "@/components/utility/Layout";

export default function Home() {
	return (
		<Layout>
			<section className="pt-16 px-24 w-full">
				<DeleteAccountPrompt />
			</section>
		</Layout>
	);
}
