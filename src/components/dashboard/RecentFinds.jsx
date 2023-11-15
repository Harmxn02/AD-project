import React from 'react';
import Title from "@/components/utility/Title";

const RecentFinds = () => {
    const recent_finds = [
		{
			id: 1,
			image_url: "#",
			item_name: "Rosetta Stone",
			coordinates: "30.79° N, 31.00° E",
			date: "08/08/2084",
		},
		{
			id: 2,
			image_url: "#",
			item_name: "Terracota Army",
			coordinates: "34.38° N, 109.27° E",
			date: "14/07/2084",
		},
		{
			id: 3,
			image_url: "#",
			item_name: "Mona Lisa",
			coordinates: "48.86° N, 2.34° E",
			date: "29/06/2084",
		},
	];

	return (
		<>
			<Title content="Recent X-Plorations" />

			<div className="w-full flex flex-col gap-5">
				{recent_finds.map((find, index) => (
					<div
						key={find.id}
						className="h-16 bg-white shadow flex flex-row items-center justify-between gap-5"
					>

						<div className="w-3/6 flex items-center h-full border-black border-r-4">
							<p className="font-bold text-lg">
								{find.item_name}
							</p>
						</div>
						<div className="w-3/6 flex flex-row justify-between items-center px-8">
							<p className="text-brandBlack font-semibold">
								{find.coordinates}
							</p>
							<p className="font-bold text-sm">
								{find.date}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default RecentFinds