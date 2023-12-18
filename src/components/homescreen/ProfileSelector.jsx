import React, { useState, useEffect } from "react";

import MaleOne from "../../../public/profile-pictures/male_1.png";
import MaleTwo from "../../../public/profile-pictures/male_2.jpg";
import FemaleOne from "../../../public/profile-pictures/female_1.png";

const people = [
	{
		id: 1,
        src: MaleOne,
		alt: "Mark Singers",
		name: "Mark Singers",
		avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		id: 2,
        src: MaleTwo,
		alt: "Felix Gonet",
		name: "Felix Gonet",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
	},
	{
		id: 3,
        src: FemaleOne,
		alt: "Sabine Balmadier",
		name: "Sabine Balmadier",
		avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

const ProfileSelector = () => {
	const [selectedUser, setSelectedUser] = useState(1);

	const handleChange = (event) => {
		const newSelectedId = parseInt(event.target.value, 10);
		const newUser = people.find((person) => person.id === newSelectedId);
		setSelectedUser(newUser);

		// Update local storage
		localStorage.setItem("AdriaUser", JSON.stringify(newUser));
	};

	return (
		<div className="absolute bottom-40">
			<p className="text-sm font-medium text-gray-900 my-2 text-center">
				Continue as:
			</p>
			<select
				value={selectedUser ? selectedUser.id : ""}
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
