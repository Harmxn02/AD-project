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
	return (
		<div className="absolute bottom-40">
			<p className="text-sm font-medium text-gray-900 my-2 text-center">
				Continue as:
			</p>
			<select
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
