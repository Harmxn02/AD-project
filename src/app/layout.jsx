import { Inter } from "next/font/google";
import PropTypes from "prop-types";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "X-Plor",
	description: "Developed by Harman and Layton",
};

const RootLayout = ({ children }) => (
	<html lang="en" className="bg-brandBackground">
		<body className={inter.className}>
			{children}
			<Analytics />
		</body>
	</html>
);

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RootLayout;
