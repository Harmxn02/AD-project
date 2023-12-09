import React from "react";

const SidebarSkeleton = () => {
	const skeletonData = [
		{
			id: 1,
			title: "Distance traveled",
			statistic: "0000",
		},
		{
			id: 2,
			title: "Minutes flown",
			statistic: "0000",
		},
		{
			id: 3,
			title: "Items collected",
			statistic: "0",
		},
	];

	return (
		<div className="h-[159px] mb-4 px-3">
			{skeletonData.map((data) => (
				<div
					key={data.id}
					className={`flex items-center gap-3 border-b py-2`}
				>
					<div className="w-6 h-6 bg-white"></div>
					<div>
						<h4 className="font-semibold text-sm text-brandTeal">
							{data.title}
						</h4>
						<p className="text-xs">{data.statistic}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SidebarSkeleton;
