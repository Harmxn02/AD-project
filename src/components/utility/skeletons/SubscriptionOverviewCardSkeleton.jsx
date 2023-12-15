import React from "react";

const SubscriptionOverviewCardSkeleton = () => {
	const numberOfFeatures = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	return (
		<div className="bg-white min-h-[547px] w-full rounded-lg p-6 border border-gray-300">
			{/* plan name */}
			<div className="w-[15ch] h-6 bg-gray-200 animate-pulse mb-4"></div>

			{/* descriptionm 2 lines */}
			<div className="flex flex-col gap-1">
				<div className="w-[35ch] h-4 bg-gray-200 animate-pulse"></div>
				<div className="w-[10ch] h-4 bg-gray-200 animate-pulse"></div>
			</div>

			{/* price */}
			<div className="flex gap-2 my-4 items-baseline">
				<div className="w-[20ch] h-8 bg-gray-200 animate-pulse"></div>
				<div className="w-[5ch] h-4 bg-gray-200 animate-pulse"></div>
			</div>

			<div className="rounded-lg bg-brandDarkGreen animate-pulse px-4 py-[0.375rem] h-9 max-w-[190px]"></div>

			<div className="w-full bg-gray-200 h-[1px] my-6"></div>
			<ul className="flex flex-col gap-5">
				{numberOfFeatures.map((row) => (
					<li key={row.id} className="flex items-center space-x-3">
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
		</div>
	);
};

export default SubscriptionOverviewCardSkeleton;
