"use client";

import { useState } from "react";

const Header = () => {
	const [activeButton, setActiveButton] = useState("DAY");

	const buttons = [
		{
			title: "DAY",
			action: "#",
		},
		{
			title: "WEEK",
			action: "#",
		},
		{
			title: "MONTH",
			action: "#",
		},
		{
			title: "YEAR",
			action: "#",
		},
	];

	const handleButtonClick = (title) => {
		setActiveButton(title);
	};

	return (
		<header className="flex justify-between mb-12">
			<div className="flex gap-12">
				{buttons.map((button) => (
					<button
						key={button.index}
						onClick={() => handleButtonClick(button.title)}
						className={`font-medium py-2 px-4 ${
							activeButton === button.title
								? "bg-[#747474] text-white"
								: ""
						}`}
					>
						{button.title}
					</button>
				))}
			</div>
			<button className="bg-[#747474] text-white px-4 py-2">
				CREATE SCREENSHOT
			</button>
		</header>
	);
};

export default Header;
