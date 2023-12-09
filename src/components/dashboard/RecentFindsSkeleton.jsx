import React from "react";
import RecentsContainer from "@/components/utility/Recents/RecentsContainer";
import Title from "@/components/utility/Title";
const RecentFindsSkeleton = () => {


    // Recent X-Plorations will just be a copy of this, 
    // but with a different Title and subtitle

	return (
		<>
			<Title content="Recent finds" />

			<p className="font-light pb-4">
				An overview of your recent finds during past X-plorations,
				including the coordinates where you found them and their status
				on the auction.
			</p>

			<div className="w-full flex flex-col gap-5">
				<RecentsContainer>
					<div className="bg-gray-200 w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center"></div>
					<div className="w-3/6 flex items-center h-full border-r-4">
						<div className="h-[1rem] w-[30ch] rounded-full bg-gray-200"></div>
					</div>
					<div className="w-3/6 flex flex-row justify-between items-center px-8">
						<div className="h-[1rem] w-[8ch] rounded-full bg-gray-200"></div>
						<div className="h-[1rem] w-[8ch] rounded-full bg-gray-200"></div>
					</div>
				</RecentsContainer>

                <RecentsContainer>
					<div className="bg-gray-200 w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center"></div>
					<div className="w-3/6 flex items-center h-full border-r-4">
						<div className="h-[1rem] w-[30ch] rounded-full bg-gray-200"></div>
					</div>
					<div className="w-3/6 flex flex-row justify-between items-center px-8">
						<div className="h-[1rem] w-[8ch] rounded-full bg-gray-200"></div>
						<div className="h-[1rem] w-[8ch] rounded-full bg-gray-200"></div>
					</div>
				</RecentsContainer>

                <RecentsContainer>
					<div className="bg-gray-200 w-16 h-16 flex rounded-xl rounded-tr-none rounded-br-none justify-center text-white items-center"></div>
					<div className="w-3/6 flex items-center h-full border-r-4">
						<div className="h-[1rem] w-[30ch] rounded-full bg-gray-200"></div>
					</div>
					<div className="w-3/6 flex flex-row justify-between items-center px-8">
						<div className="h-[1rem] w-[8ch] rounded-full bg-gray-200"></div>
						<div className="h-[1rem] w-[8ch] rounded-full bg-gray-200"></div>
					</div>
				</RecentsContainer>

			</div>
		</>
	);
};

export default RecentFindsSkeleton;
