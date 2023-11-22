import React from "react";
import PropTypes from "prop-types";

const Header = ({ activeButton, onButtonClick }) => {
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

	return (
		<header className="flex justify-between mb-12">
			<div className="flex gap-12">
				{buttons.map((button) => (
					<button
						key={button.title}
						onClick={() => onButtonClick(button.title)}
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

Header.propTypes = {
	activeButton: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func.isRequired,
};

export default Header;
