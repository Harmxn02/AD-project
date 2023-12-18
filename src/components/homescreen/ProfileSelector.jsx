import React, { useState, useEffect } from "react";
import Image from "next/image";

import MaleOne from "../../../public/profile-pictures/male_1.png";
import MaleTwo from "../../../public/profile-pictures/male_2.jpg";
import FemaleOne from "../../../public/profile-pictures/female_1.png";

const people = [
	{
		id: 1,
		src: MaleOne,
		alt: "MaleOne",
		name: "Wade Cooper",
		avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		id: 2,
		src: MaleTwo,
		alt: "MaleTwo",
		name: "Devon Webb",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
	},
	{
		id: 3,
		src: FemaleOne,
		alt: "FemaleOne",
		name: "Arlene Mccoy",
		avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

const ProfileSelector = () => {
	const [selectedElement, setSelectedElement] = useState(null);

	useEffect(() => {
		// Set DEFAULT value to 2 if AdriaID is initially null
		if (selectedElement === null) {
			setSelectedElement(2);
			localStorage.setItem("AdriaID", 2);
		}
	}, [selectedElement]);

	const handleChange = (event) => {
        const newSelectedElement = parseInt(event.target.value, 10);
        setSelectedElement(newSelectedElement);
    
        // Update local storage
        localStorage.setItem("AdriaID", newSelectedElement);
      };

	return (
		<div className="absolute top-40">
			<p className="text-sm font-medium text-gray-900 my-2 text-center">
				Continue as:
			</p>
			<select
				value={selectedElement}
				onChange={handleChange}
				className="px-4 py-2 border rounded-md"
			>
				{people.map((person) => (
					<option key={person.id} value={person.id}>
						{person.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default ProfileSelector;
