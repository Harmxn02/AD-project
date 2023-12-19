"use client";

import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

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
	
	// TODO maybe: fetch /members for the select dropdown
	
	const [selectedProfile, setSelectedProfile] = useState(people[0]);

	// Load selected profile from localStorage on mount
	useEffect(() => {
		const storedProfile = localStorage.getItem("selectedProfile");
		if (storedProfile) {
			setSelectedProfile(JSON.parse(storedProfile));
		}
	}, []);

	// Save selected profile to localStorage whenever it changes
	useEffect(() => {
		if (selectedProfile) {
			localStorage.setItem(
				"selectedProfile",
				JSON.stringify(selectedProfile),
			);
		}
	}, [selectedProfile]);

	const handleSelectChange = (event) => {
		const selectedId = parseInt(event.target.value, 10);
		const selectedPerson = people.find(
			(person) => person.id === selectedId,
		);
		
		// Show toast when the profile is changed
		toast.success(`Profile changed to: ${selectedPerson.name}`);
		setSelectedProfile(selectedPerson);
	};

	return (
		<div className="absolute bottom-40">
			<p className="text-sm font-medium text-gray-900 my-2 text-center">
				Continue as:
			</p>
			<select
				className="px-4 py-2 border rounded-md"
				value={selectedProfile ? selectedProfile.id : ""}
				onChange={handleSelectChange}
			>
				<option value="" disabled>
					Select a profile
				</option>
				{people.map((person) => (
					<option key={person.id} value={person.id}>
						{person.name}
					</option>
				))}
			</select>
			<Toaster />
		</div>
	);
};

export default ProfileSelector;
