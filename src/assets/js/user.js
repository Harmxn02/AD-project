"use client";

import React, { useState, useEffect } from "react";

export const GetUser = () => {
	const [selectedProfileId, setSelectedProfileId] = useState(null);

	// Retrieve selected profile from localStorage on component mount
	useEffect(() => {
		const storedProfile = localStorage.getItem("selectedProfile");
		if (storedProfile) {
			const selectedProfile = JSON.parse(storedProfile);
			// Do something with the selectedProfile, e.g., update state
			// You can use this selectedProfile wherever needed in your component
			setSelectedProfileId(selectedProfile.id);
		}
	}, []);

	return selectedProfileId;
};
