import React from "react";
import PropTypes from 'prop-types';

const SubscriptionCard = ({ price, name, isLast, children }) => {
	SubscriptionCard.propTypes = {
		price: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isLast: PropTypes.bool.isRequired,
		children: PropTypes.node,
	};

	const sharedButtonStyles = "px-5 py-3 text-center bg-planButtons ";

	return (
		<div className="grid-cols-1">
			<div className="mx-auto py-10">
				<div
					className={`flex flex-col mx-auto w-[29rem] text-center text-gray-900 border border-gray-300 shadow-md p-8
						${isLast ? "bg-lastPlan text-white" : "bg-white text-black"}`}
				>
					<h3
						className={`mb-4 text-2xl text-left font-medium
						${isLast ? "bg-lastPlan text-white" : "bg-white text-black"}

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
						className={`mb-8 space-y-4 text-left h-60 ${isLast ? "text-white" : " text-black"}`}
					>
						{children}
					</ul>
					{
							isLast ?
							<p className={`${sharedButtonStyles}`}>
								Current plan
							</p> : <a href="#" className={`text-white font-medium px-5 py-3 text-center ${sharedButtonStyles}`}>{`Switch to ${name}`}</a>
					}
				</div>
			</div>
		</div>
	);
};

export default SubscriptionCard;
