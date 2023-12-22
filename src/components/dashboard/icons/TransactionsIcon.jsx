import React from "react";
import { usePathname } from "next/navigation";

const TransactionsIcon = () => {
	const pathname = usePathname() || "";
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={pathname.startsWith("/transactions") ? "#54696c" : "#4C4C4C"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 7H20M16 2L21 7L16 12M22 17H4M8 12L3 17L8 22"
				stroke={pathname.startsWith("/transactions") ? "#54696c" : "#4C4C4C"}
				strokeWidth="2"
			/>
		</svg>
	);
};

export default TransactionsIcon;
