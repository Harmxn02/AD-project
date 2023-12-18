import React from "react";

const UserInformationSkeleton = () => {
    // als er iets verschuift, dan ligt het wellicht aan de "mt-2" in de Teal skeleton <div>
	return (
		<div className="flex flex-col gap-2 items-center">
			<div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-gray-200 animate-pulse">
				<svg
					className="w-6 h-6 text-gray-200 dark:text-gray-600"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 18"
				>
					<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
				</svg>
			</div>
			<div className="h-4 w-[13ch] mx-auto bg-brandTeal animate-pulse mt-2 "></div>
			<div className="h-3 w-[15ch] mx-auto bg-gray-200 animate-pulse"></div>
		</div>
	);
};

export default UserInformationSkeleton;
