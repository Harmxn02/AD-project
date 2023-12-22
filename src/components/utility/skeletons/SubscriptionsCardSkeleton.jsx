import React from "react";
import PropTypes from "prop-types";

const SubscriptionsCardSkeleton = ({ isLast }) => {
	SubscriptionsCardSkeleton.propTypes = {
		isLast: PropTypes.bool.isRequired,
	};

	const numberOfFeatures = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	return (
		<div className="pt-4 pb-10 w-full">
			<div
				className={`flex flex-col mx-auto w-full text-center text-gray-900 border border-gray-300 shadow-md p-8
				${isLast ? "bg-lastPlan text-white" : "bg-white text-black"}`}
			>
				{/* plan name */}
				<div className="w-[15ch] h-6 bg-gray-200 animate-pulse mb-4"></div>

				<div className="flex gap-2 mt-4 mb-2 items-baseline">
					<div className="w-[20ch] h-12 bg-gray-200 animate-pulse"></div>
					<div className="w-[5ch] h-4 bg-gray-200 animate-pulse"></div>
				</div>
				<div className={`h-px my-8 animate-pulse ${isLast ? "bg-white" : " bg-black"}`}></div>
				<p className={`text-left  font-medium mb-4 ${isLast ? "text-white" : "text-[#6D6D6D]"} `}>
					Every month you have access to:
				</p>
				<ul className={`mb-8 space-y-6 text-left h-60 ${isLast ? "text-white" : " text-black"}`}>
					{numberOfFeatures.map((row) => (
						<li key={row.id} className="flex items-center space-x-3">
							<svg
								className="flex-shrink-0 w-5 h-5 text-brandGreen "
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
							<div className="w-[25ch] h-3 bg-gray-200 rounded-full animate-pulse"></div>
						</li>
					))}
				</ul>

				{/* switch button */}
				<div className="px-5 py-3 h-12 text-center bg-planButtons animate-pulse"></div>
			</div>
		</div>
	);
};

export default SubscriptionsCardSkeleton;
