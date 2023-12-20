import React, { useState } from "react";
import Image from "next/image";

import { GetAPI } from "../../assets/js/api";

import Title from "@/components/utility/Title";
import RecentsContainer from "@/components/utility/Recents/RecentsContainer";
import RecentXSkeleton from "@/components/utility/skeletons/RecentXSkeleton";
import RecentFindsModal from "@/components/modals/RecentFindsModal";

const formatTimeDifference = (startTime, endTime) => {
	const startDateTime = new Date(startTime);
	const endDateTime = new Date(endTime);

	const timeDifference = endDateTime - startDateTime;

	const hours = Math.floor(timeDifference / (1000 * 60 * 60));
	const minutes = Math.floor(
		(timeDifference % (1000 * 60 * 60)) / (1000 * 60),
	);

	const formatUnit = (value, unit) =>
		`${value} ${unit}${value !== 1 ? "s" : ""}`;

	if (hours > 0) {
		return (
			formatUnit(hours, "hour") +
			(minutes > 0 ? ` ${formatUnit(minutes, "minute")}` : "")
		);
	} else {
		return formatUnit(minutes, "minute");
	}
};

const RecentXplorations = () => {
	const [SelectedSessionId, setSelectedSessionId] = useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const adriaId = 1;

	const recent_xplorations = GetAPI(`/sessions/${adriaId}`);
	const title = "Recent X-Plorations";
	const description =
		"An overview of your recently visited locations, including travel time.";

	if (recent_xplorations === null) {
		return (
			<RecentXSkeleton
				title={title}
				description={description}
				className="mt-12"
			/>
		);
	}

	const formatCountryString = (country) => {
		// Convert to string, replace spaces with underscores, remove accents, and remove single quotes
		return String(country)
			.toUpperCase()
			.replace(/\s+/g, "_")
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/'/g, "");
	};

	const openModal = (sessionId) => {
		setSelectedSessionId(sessionId);
		setIsModalVisible(true);
	};

	//I, Layton, am aware of a toggle function but i just wanted to prevent to toggle the modal since it doesn't not make
	//sense if they click on the eye it says toggle but it just has to open, it is not responsible for closing.
	//That is why I made a open and close modal for readability and just better usecase-abiliy here.
	const closeModal = () => {
		setSelectedSessionId(null);
		setIsModalVisible(false);
	};

	return (
		<section className="mt-12">
			<Title content={title} />
			<p className="font-light pb-4">{description}</p>
			<div className="w-full flex flex-col gap-5 pr-2 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-brandTeal scrollbar-track-transparent">
				{recent_xplorations.map((exploration) => (
					<RecentsContainer key={exploration.id}>
						<Image
							src={`/icons/country-flags/${formatCountryString(
								exploration.countriesVisited[0],
							)}.svg`}
							width={256}
							height={256}
							className="w-16 h-16 rounded-xl rounded-tr-none rounded-br-none"
							alt="country flag"
						></Image>

						<div className="w-3/6 flex items-center justify-between h-full border-r-4">
							<p className="font-medium text-lg">
								{exploration.countriesVisited.join(" - ")}
							</p>
							{/*<div className="pl-4 text-[.5rem] min-w-fit">
								{`${formatCountryString(
									exploration.countriesVisited[0],
								)}.svg`}
								</div>*/}
							<button
								className="relative group flex"
								onClick={() => openModal(null)}
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
										stroke="#54696c"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
										stroke="#54696c"
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
											strokeWidth="0"
										></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<circle
												cx="12"
												cy="12"
												r="10"
												stroke="#FFFFFF"
												strokeWidth="1.5"
											></circle>{" "}
											<path
												d="M12 17V11"
												stroke="#FFFFFF"
												strokeWidth="1.5"
												strokeLinecap="round"
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
								{formatTimeDifference(
									exploration.startTime,
									exploration.endTime,
								)}
							</p>
							<p className="font-medium text-sm">
								{new Intl.DateTimeFormat("en-GB").format(
									new Date(exploration.startTime),
								)}
							</p>
						</div>
					</RecentsContainer>
				))}
			</div>
			{isModalVisible && (
				<RecentFindsModal
					sessionId={SelectedSessionId}
					onClose={closeModal}
				/>
			)}
		</section>
	);
};

export default RecentXplorations;
