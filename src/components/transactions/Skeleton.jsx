import React from "react";


const Skeleton = () => {
	return (
		<div className="h-[335px] p-10 w-full bg-white rounded-xl">
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-36 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-96 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-24 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-72 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-36 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-64 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-96 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-36 mb-4"></div>
            <div className="h-4 animate-pulse bg-gray-200 rounded-full w-72 mb-4"></div>
		</div>
	);
};

export default Skeleton;
