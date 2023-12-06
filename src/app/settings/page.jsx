"use client";

import Account from "@/components/settings/Account";
import Sidebar from "@/components/dashboard/Sidebar";
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
		<div className="flex">
			<Sidebar />
			<section className="pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Account />
				<PrivacyAndPersonalization />
			</section>
		</div>
	);
}
