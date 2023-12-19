"use client";
import React, { useState } from "react";
import Title from "@/components/utility/Title";

import Image from "next/image";
import { GetAPI } from "../../assets/js/api";
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
	const adriaId = 1;

	const finds = GetAPI(`/items/${adriaId}`);
	const title = "Recent finds";
	const description =
		"An overview of your recent finds during past X-plorations, including the coordinates where you found them and their status on the auction.";

	const [SelectedSessionId, setSelectedSessionId] = useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);

	if (finds === null) {
		return <RecentXSkeleton title={title} description={description} />;
	}

	const toggleModal = (sessionId) => {
		setSelectedSessionId(sessionId);
		setIsModalVisible(!isModalVisible);
	};

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

							<div className="w-3/6 flex justify-between items-center h-full border-r-4">
								<p className="font-medium text-lg">
									{find.name}
								</p>
								<button
									className="relative group flex"
									onClick={() => toggleModal(null)}
								>
									<svg
										width="25px"
										height="25px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mr-8 hover:opacity-30"
									>
										<path
											d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
											stroke="#62A0AA"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
											stroke="#62A0AA"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span className="group-hover:opacity-100 transition-opacity bg-brandBlack px-3 py-2 text-sm text-gray-100 rounded-md w-max absolute left-1/4 -translate-x-1/2 translate-y-2/3 opacity-0 mx-auto flex items-center gap-x-2">
										<svg
											width="24px"
											height="24px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g
												id="SVGRepo_bgCarrier"
												stroke-width="0"
											></g>
											<g
												id="SVGRepo_tracerCarrier"
												stroke-linecap="round"
												stroke-linejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												{" "}
												<circle
													cx="12"
													cy="12"
													r="10"
													stroke="#FFFFFF"
													stroke-width="1.5"
												></circle>{" "}
												<path
													d="M12 17V11"
													stroke="#FFFFFF"
													stroke-width="1.5"
													stroke-linecap="round"
												></path>{" "}
												<circle
													cx="1"
													cy="1"
													r="1"
													transform="matrix(1 0 0 -1 11 9)"
													fill="#FFFFFF"
												></circle>{" "}
											</g>
										</svg>
										View details
									</span>
								</button>
							</div>
							<div className="w-3/6 flex flex-row justify-between items-center px-8">
								<p className="text-brandBlack font-semibold">
									{`${find.latitude}° N, ${find.longitude}° E`}
								</p>
								<p className="font-medium text-sm">
									{new Date(find.date).toLocaleDateString(
										"en-GB",
									)}
								</p>
							</div>
						</RecentsContainer>
					);
				})}
			</div>
		</>
	);
};

export default RecentFinds;
