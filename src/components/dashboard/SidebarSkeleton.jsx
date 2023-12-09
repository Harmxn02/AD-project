import React from "react";
import Image from "next/image";

import ChestIcon from "../../../public/icons/sidebar_statistics/chest.svg";
import RulerIcon from "../../../public/icons/sidebar_statistics/ruler.svg";
import ClockIcon from "../../../public/icons/sidebar_statistics/clock.svg";

const SidebarSkeleton = () => {
	const skeletonData = [
		{
			id: 1,
			icon: RulerIcon,
			icon_alt: "ruler icon",
			title: "Distance traveled",
		},
		{
			id: 2,
			icon: ClockIcon,
			icon_alt: "clock icon",
			title: "Minutes flown",
		},
		{
			id: 3,
			icon: ChestIcon,
			icon_alt: "chest icon",
			title: "Items collected",
		},
	];

	return (
		<div className="h-[159px] mb-4 px-3">
			{skeletonData.map((data) => (
				<div
					key={data.id}
					className={`flex items-center gap-3 border-b py-2`}
				>
                    <Image src={data.icon} alt={data.icon_alt} />
					<div>
						<h4 className="font-semibold text-sm text-brandTeal">
							{data.title}
						</h4>
                        <div className="h-4 flex items-center">
                            <div className="w-12 h-2 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SidebarSkeleton;
