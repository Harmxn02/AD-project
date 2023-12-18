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
	},
	{
		id: 2,
		src: MaleTwo,
		alt: "Felix Gonet",
		name: "Felix Gonet",
	},
	{
		id: 3,
		src: FemaleOne,
		alt: "Sabine Balmadier",
		name: "Sabine Balmadier",
	},
];

const ProfileSelector = () => {
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		// Set DEFAULT value to the second user if selectedUser is initially null
		if (selectedUser === null) {
			const defaultUser = people.find((person) => person.id === 2);
			setSelectedUser(defaultUser);

			// Check if running on the client side before using localStorage
			if (typeof window !== "undefined") {
				localStorage.setItem("AdriaUser", JSON.stringify(defaultUser));
			}
		}
	}, [selectedUser]);

	const handleChange = (event) => {
		const newSelectedId = parseInt(event.target.value, 10);
		const newUser = people.find((person) => person.id === newSelectedId);
		setSelectedUser(newUser);

		// Check if running on the client side before using localStorage
		if (typeof window !== "undefined") {
			localStorage.setItem("AdriaUser", JSON.stringify(newUser));
		}
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
