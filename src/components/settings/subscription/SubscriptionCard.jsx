import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SubscriptionCard = ({ price, name, isLast, initialIsActive, onActivate, children }) => {
	const [isActive, setIsActive] = useState(initialIsActive);

	const sharedButtonStyles = "px-5 py-3 text-center bg-planButtons";

	useEffect(() => {
		setIsActive(initialIsActive);
	}, [initialIsActive]);

	return (
		<div className="pt-4 pb-10 w-full">
			<div
				className={`flex flex-col mx-auto w-full text-center text-gray-900 border border-gray-300 shadow-md p-8
				${isLast ? "bg-lastPlan text-white" : "bg-white text-black"}`}
			>
				<h3
					className={`mb-4 text-2xl text-left font-medium
					${isLast ? "bg-lastPlan text-white" : "bg-white text-black"}`}
				>
					{name}
				</h3>
				<div className={`flex items-end mt-4 ${isLast ? "text-white" : " text-black"}`}>
					<span
						className={`mr-2 text-5xl font-extrabold flex gap-2
					`}
					>
						<span className="text-lg">Ⓐ</span>
						<span>{price}</span>
					</span>
					<span className="text-gray-400">/month</span>
				</div>
				<div className={`h-px my-8 ${isLast ? "bg-white" : " bg-black"}`}></div>
				<p className={`text-left  font-medium mb-4 ${isLast ? "text-white" : "text-[#6D6D6D]"} `}>
					Every month you have access to:
				</p>
				<ul className={`mb-8 space-y-4 text-left h-60 ${isLast ? "text-white" : " text-black"}`}>{children}</ul>
				{isActive ? (
					<p className={`${sharedButtonStyles} text-gray-400`}>Active plan</p>
				) : (
					<button
						onClick={() => {
							setIsActive(true);
							onActivate(name);
						}}
						className={`text-white font-medium px-5 py-3 text-center ${sharedButtonStyles}`}
					>
						{`Switch to ${name}`}
					</button>
				)}
			</div>
		</div>
	);
};

SubscriptionCard.propTypes = {
	price: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isLast: PropTypes.bool,
	initialIsActive: PropTypes.bool,
	onActivate: PropTypes.func,
	children: PropTypes.node,
};

export default SubscriptionCard;
