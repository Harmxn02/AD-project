import React from "react";
import Title from "@/components/utility/Title";
import { GetAPI } from "../../assets/js/api";
import RecentXSkeleton from "@/components/utility/skeletons/RecentXSkeleton";
import Image from "next/image";
import RecentsContainer from "@/components/utility/Recents/RecentsContainer";

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

						<div className="w-3/6 flex items-center h-full border-r-4">
							<p className="font-medium text-lg">
								{exploration.countriesVisited.join(" - ")}
							</p>

							{/*

							THIS PART SHOWS WHICH COUNTRY'S SVG FILE IS BEING FETCHED
							IF THE CORRECT IMAGE ISNT SHOWING, ITS BECAUSE EITHER:
							- THE FILE HAS A DIFFERENT NAME THAN WHAT WE GET FROM API -> solution: change name of file
							- THE FILE DOES NOT EXIST IN THE SVG FOLDER -> solution: add the svg file to the folder

							IF THE URL SAYS "undefined.svg", that means the API endpoint returns an empty array for "countriesVisited"
							-> solution: add countries in the server

							!!! this is temporary

							*/}

							{/* <---------------- start of temporary feature ----------------> */}

							<div className="pl-4 text-[.5rem] min-w-fit">
								{`${formatCountryString(
									exploration.countriesVisited[0],
								)}.svg`}
							</div>

							{/* <---------------- end of temporary feature ----------------> */}
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
		</section>
	);
};

export default RecentXplorations;
