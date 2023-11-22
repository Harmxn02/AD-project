import React from "react";
import Title from "@/components/utility/Title";

import Image from "next/image";
import { GetAPI } from "../../assets/js/api";
import Loading from "@/components/utility/Loading";

import Red from "../../../public/icons/finds_toAuction.svg";
import Green from "../../../public/icons/finds_sold.svg";
import Yellow from "../../../public/icons/finds_auctioned.svg";

const getColourAndImage = (item) => {

	if (item.status === "found") {
		return { colour: "bg-[#E74C3C]", image_url: Red };
	} else if (item.status === "auctioned") {
		return { colour: "bg-[#2ECC71]", image_url: Green };
	} else if (item.status === "in auction") {
		return { colour: "bg-[#F1C40F]", image_url: Yellow };
	} else {
		return { colour: "bg-black", image_url: Yellow };
	}
};

const RecentFinds = () => {
	const finds = GetAPI("/items");

	if (finds === null) {
		return <Loading />;
	}

	console.log("FI: ", finds);

	return (
		<>
			<Title content="Recent finds" />

			<div className="w-full flex flex-col gap-5">
				{finds.map((find) => {
					const { colour, image_url } = getColourAndImage(find);

					return (
						<div
							key={find.id}
							className="h-16 bg-white shadow flex flex-row items-center justify-between gap-5"
						>
							<div
								key={find.id}
								className={`${colour} w-16 h-full flex justify-center text-white items-center`}
							>
								<Image alt="icon" src={image_url}></Image>
							</div>

							<div className="w-3/6 flex items-center h-full border-black border-r-4">
								<p className="font-bold text-lg">{find.name}</p>
							</div>
							<div className="w-3/6 flex flex-row justify-between items-center px-8">
								<p className="text-brandBlack font-semibold">
									{`${find.latitude}° N, ${find.longitude}° E`}
								</p>
								<p className="font-bold text-sm">{find.date}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default RecentFinds;
