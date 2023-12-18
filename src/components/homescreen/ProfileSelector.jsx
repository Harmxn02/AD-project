import React, { useState } from "react";
import Image from "next/image";

import MaleOne from "../../../public/profile-pictures/male_1.png";
import MaleTwo from "../../../public/profile-pictures/male_2.jpg";
import FemaleOne from "../../../public/profile-pictures/female_1.png";

const users = [
	{ id: 1, name: "Male 1", src: MaleOne, alt: "Male 1" },
	{ id: 2, name: "Male 2", src: MaleTwo, alt: "Male 2" },
	{ id: 3, name: "Female 1", src: FemaleOne, alt: "Female 1" },
];

const ProfileSelector = () => {
	const [selectedElement, setSelectedElement] = useState(2);

	const commonStyles = "rounded-full border-2";
	const selectedStyles =
		"h-24 w-24  border-4 border-blue-500";

	const handleClick = (adriaID) => {
		// Toggle selection
		const newSelectedElement = selectedElement === adriaID ? null : adriaID;
		setSelectedElement(newSelectedElement);

		// Update local storage
		localStorage.setItem("AdriaID", newSelectedElement);
	};

	return (
		<div className="absolute top-40">
			<p className="text-xl font-semibold text-brandBlack my-2 text-center">
				Select user:
			</p>
			<div className="flex gap-4 items-center">
				{users.map((user) => (
					<Image
						key={user.id}
						src={user.src}
						alt={user.alt}
						className={`${commonStyles} ${
							selectedElement === user.id
								? selectedStyles
								: "h-16 w-16"
						}`}
						onClick={() => handleClick(user.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProfileSelector;
