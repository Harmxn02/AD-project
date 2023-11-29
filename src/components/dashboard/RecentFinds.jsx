"use client";
import React from "react";
import Title from "@/components/utility/Title";

import Image from "next/image";
import { GetAPI } from "../../assets/js/api";
import Loading from "@/components/utility/Loading";

import RecentsContainer from "@/components/utility/Recents/RecentsContainer";

import Red from "../../../public/icons/finds_toAuction.svg";
import Green from "../../../public/icons/finds_sold.svg";
import Yellow from "../../../public/icons/finds_auctioned.svg";

const getColourAndImage = (item) => {

	if (item.status === "found") {
		return { colour: "bg-brandRed", image_url: Red };
	} else if (item.status === "auctioned") {
		return { colour: "bg-brandGreen", image_url: Green };
	} else if (item.status === "in auction") {
		return { colour: "bg-brandYellow", image_url: Yellow };
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

			<p className="font-light pb-4">
				An overview of your recent finds during past X-plorations, including the coordinates where you found them and their status on the auction.
			</p>

			<div className="w-full flex flex-col gap-5">
				{finds.map((find) => {
					const { colour, image_url } = getColourAndImage(find);

					return (
						<RecentsContainer
							key={find.id}
						>
							<div
								key={find.id}
								className={`${colour} w-16 h-full flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center`}
							>
								<Image alt="icon" src={image_url}></Image>
							</div>

							<div className="w-3/6 flex items-center h-full border-r-4">
								<p className="font-medium text-lg">{find.name}</p>
							</div>
							<div className="w-3/6 flex flex-row justify-between items-center px-8">
								<p className="text-brandBlack font-semibold">
									{`${find.latitude}° N, ${find.longitude}° E`}
								</p>
								<p className="font-medium text-sm">{new Date(find.date).toLocaleDateString("en-GB")}</p>
							</div>
						</RecentsContainer>
					);
				})}
			</div>
		</>
	);
};

export default RecentFinds;
