import React, { useState } from "react";
import Image from "next/image";

import MaleOne from "../../../public/profile-pictures/male_1.png";
import MaleTwo from "../../../public/profile-pictures/male_2.jpg";
import FemaleOne from "../../../public/profile-pictures/female_1.png";

const ProfileSelector = () => {
	const [selectedElement, setSelectedElement] = useState(2);

	const commonStyles =
		"bg-brandTeal aspect-square rounded-full";
	const selectedStyles =
		"bg-brandTeal h-24 w-24 aspect-square rounded-full border-4";

	const handleClick = (adriaID) => {
		// Toggle selection
		const newSelectedElement = selectedElement === adriaID ? null : adriaID;
		setSelectedElement(newSelectedElement);

		// Update local storage
		localStorage.setItem("selectedAdriaID", newSelectedElement);
	};

	return (
		<div className="absolute top-40">
			<p className="text-xl font-semibold text-brandBlack my-4 text-center">Select user:</p>
			<div className="flex gap-4 items-center">
				<Image
					src={MaleOne}
					alt="Male 1"
					className={`${commonStyles} ${
						selectedElement === 1 ? selectedStyles : "h-16 w-16"
					}`}
					onClick={() => handleClick(1)}
				/>
				<Image
					src={MaleTwo}
					alt="Male 2"
					className={`${commonStyles} ${
						selectedElement === 2 ? selectedStyles : "h-16 w-16"
					}`}
					onClick={() => handleClick(2)}
				/>
				<Image
					src={FemaleOne}
					alt="Female 1"
					className={`${commonStyles} ${
						selectedElement === 3 ? selectedStyles : "h-16 w-16"
					}`}
					onClick={() => handleClick(3)}
				/>
			</div>
		</div>
	);
};

export default ProfileSelector;
