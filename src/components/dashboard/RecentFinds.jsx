"use client";
import React from "react";
import Image from "next/image";

import { GetAPI } from "../../assets/js/api";
import { GetUser } from "@/assets/js/user";

import Title from "@/components/utility/Title";
import RecentXSkeleton from "@/components/utility/skeletons/RecentXSkeleton";
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
	const adriaId = GetUser();
	const finds = GetAPI(`/items/${adriaId}`);
	const title = "Recent finds";
	const description =
		"An overview of your recent finds during past X-plorations, including the coordinates where you found them and their status on the auction.";

	if (finds === null) {
		return <RecentXSkeleton title={title} description={description} />;
	}

	return (
		<>
			<Title content={title} />

			<p className="font-light pb-4">{description}</p>

			<div className="w-full flex flex-col gap-5 pr-2 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-brandTeal scrollbar-track-transparent">
				{finds.map((find) => {
					const { colour, image_url } = getColourAndImage(find);

					return (
						<RecentsContainer key={find.id}>
							<div
								key={find.id}
								className={`${colour} w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center`}
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
