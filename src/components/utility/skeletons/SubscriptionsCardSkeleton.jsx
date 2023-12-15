import React from "react";
import PropTypes from "prop-types";

const SubscriptionsCardSkeleton = ({ isLast }) => {
	SubscriptionsCardSkeleton.propTypes = {
		isLast: PropTypes.bool.isRequired,
	};

    const numberOfFeatures = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
	];

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
						name
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
							<span>price</span>
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
						className={`mb-8 space-y-4 text-left h-60 ${
							isLast ? "text-white" : " text-black"
						}`}
					>
						{numberOfFeatures.map((row) => (
							<li
								key={row.id}
								className="flex items-center space-x-3"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-brandGreen animate-pulse mr-3"
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
								<div className="w-[25ch] h-4 bg-gray-200 rounded-full animate-pulse"></div>
							</li>
						))}
					</ul>
					{isLast ? (
						<p className={`${sharedButtonStyles}`}>Current plan</p>
					) : (
						<a
							href="#"
							className={`text-white font-medium px-5 py-3 text-center ${sharedButtonStyles}`}
						>{`Switch to {name}`}</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default SubscriptionsCardSkeleton;
