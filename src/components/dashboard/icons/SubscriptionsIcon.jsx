import React from "react";
import { usePathname } from "next/navigation";

const SubscriptionsIcon = () => {
	const pathname = usePathname() || "";
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
			<g id="Subscription">
				<path
					fill={pathname === subscriptionsPathname ? "#54696c" : "#4C4C4C"}
					d="M28 38h-8a2 2 0 0 1 0-4h8a2 2 0 0 1 0 4z"
				/>
				<path
					fill={pathname === subscriptionsPathname ? "#54696c" : "#4C4C4C"}
					d="M18 22a1 1 0 0 1-2 0 1 1 0 0 1 2 0zM18 26a1 1 0 0 1-2 0 1 1 0 0 1 2 0zM18 30a1 1 0 0 1-2 0 1 1 0 0 1 2 0zM6 25a1 1 0 0 1-2 0 1 1 0 0 1 2 0zM6 29a1 1 0 0 1-2 0 1 1 0 0 1 2 0zM6 33a1 1 0 0 1-2 0 1 1 0 0 1 2 0zM31 23H21a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM31 27H21a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM31 31H21a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
				/>
				<rect
					fill={pathname === subscriptionsPathname ? "#54696c" : "#4C4C4C"}
					x="16"
					y="10"
					width="16"
					height="8"
					rx="1"
				/>
				<rect
					fill={pathname === subscriptionsPathname ? "#54696c" : "#4C4C4C"}
					x="35"
					y="13"
					width="9"
					height="8"
					rx="1"
				/>
				<rect
					fill={pathname === subscriptionsPathname ? "#54696c" : "#4C4C4C"}
					x="4"
					y="13"
					width="9"
					height="8"
					rx="1"
				/>
				<path
					fill={pathname === subscriptionsPathname ? "#54696c" : "#4C4C4C"}
					d="M45 8h-8a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3H3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h8a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3h8a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3zM3 38a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h8v14H9a1 1 0 0 0 0 2h2v2H9a1 1 0 0 0 0 2h2v2H9a1 1 0 0 0 0 2h2v4zm32 2a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1zm11-3a1 1 0 0 1-1 1h-8v-4h6a1 1 0 0 0 0-2h-6v-2h6a1 1 0 0 0 0-2h-6v-2h6a1 1 0 0 0 0-2h-6V10h8a1 1 0 0 1 1 1z"
				/>
			</g>
		</svg>
	);
};

export default SubscriptionsIcon;
