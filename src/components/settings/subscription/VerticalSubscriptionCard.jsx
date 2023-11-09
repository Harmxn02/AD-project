import Image from "next/image";
import React from "react";
import PHOTO from "./landscape.jpg";

const VerticalSubscriptionCard = () => {
	return (
		<div className="col-span-3 bg-white flex text-gray-900 border border-gray-100 shadow">
			<div className="p-8 w-1/3 flex flex-col justify-around items-start">
				<h3 className="mb-4 text-2xl text-left font-medium">
					Quick Explore
				</h3>
				<div className="text-black flex items-end">
					<span className="mr-2 text-5xl font-extrabold flex gap-2">
						<span className="text-lg">Ⓐ</span>
						<span>3.29</span>
					</span>
					<span className="text-gray-400">/hour</span>
				</div>

				<a
					href="#"
					className="text-white bg-[#2C2C2C] font-medium px-5 py-3 text-center "
				>
					Start exploring now!
				</a>
			</div>
			<div className="w-2/3">
				<Image
					className="w-full h-64 object-cover"
					alt="random image"
					src={PHOTO}
				/>
			</div>
		</div>
	);
};

export default VerticalSubscriptionCard;
