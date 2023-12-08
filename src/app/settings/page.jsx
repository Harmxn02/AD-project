"use client";

import Account from "@/components/settings/Account";
import Layout from "@/components/utility/Layout";
import PrivacyAndPersonalization from "@/components/settings/PrivacyAndPersonalization";

import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		// Check if the browser supports the Notification API
		if ("Notification" in window) {
			Notification.requestPermission()
				.then((permission) => {
					if (permission === "granted") {
						console.log("Notification permission granted");
					} else if (permission === "denied") {
						console.warn("Notification permission denied");
					}
				})
				.catch((error) => {
					console.error(
						"Error requesting notification permission:",
						error
					);
				});
		}
	}, []);

	return (
		<Layout>
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandTeal scrollbar-track-transparent">
				<Account />
				<PrivacyAndPersonalization />
			</section>
		</Layout>
	);
}
