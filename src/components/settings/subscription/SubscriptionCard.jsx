import React from "react";
import PropTypes from 'prop-types';

const SubscriptionCard = ({ price, name, isLast, children }) => {
	SubscriptionCard.propTypes = {
		price: PropTypes.number.isRequired, // price should be a number and is required
		name: PropTypes.string.isRequired, // name should be a string and is required
		isLast: PropTypes.bool.isRequired, // isLast should be a boolean and is required
		children: PropTypes.node, // children can be any valid React node
	};
	
	const sharedButtonStyles = "px-5 py-3 text-center";

	return (
		<div className="grid-cols-1">
			<div className="mx-auto py-10">
				<div
					className={`flex flex-col mx-auto w-[22rem] text-center text-gray-900 border border-gray-100 shadow p-8
						${isLast ? "bg-[#3E3E3E] text-white" : "bg-white text-black"}`}
				>
					<h3
						className={`mb-4 text-2xl text-left font-medium
						${isLast ? "bg-[#3E3E3E] text-white" : "bg-white text-black"}

						`}
					>
						{name}
					</h3>
					<div
						className={`flex items-end mt-4 ${
							isLast ? "text-white" : " text-black"
						} `}
					>
						<span
							className={`mr-2 text-5xl font-extrabold flex gap-2
						`}
						>
							<span className="text-lg">Ⓐ</span>
							<span>{price}</span>
						</span>
						<span className="text-gray-400">/month</span>
					</div>
					<div
						className={`h-px my-8 ${
							isLast ? "bg-white" : " bg-black"
						}`}
					></div>
					<p
						className={`text-left  font-medium mb-4 ${
							isLast ? "text-white" : "text-[#6D6D6D]"
						} `}
					>
						Every month you have access to:
					</p>
					<ul
						className={`mb-8 space-y-4 text-left h-44 ${isLast ? "text-white" : " text-black"}`}
					>
						{children}
					</ul>
					<a href="#" className={isLast ? sharedButtonStyles : `text-white bg-[#2C2C2C] font-medium px-5 py-3 text-center ${sharedButtonStyles}`}>
						{
							isLast ? 'Current plan' : `Switch to ${name}`
						}
					</a>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
