"use client";

import { useState, useEffect } from "react";

export const GetUser = () => {
	const [selectedProfileId, setSelectedProfileId] = useState(null);

	useEffect(() => {
		const storedProfile = localStorage.getItem("selectedProfile");
		if (storedProfile) {
			const selectedProfile = JSON.parse(storedProfile);
			setSelectedProfileId(selectedProfile.id - 1);
		}
	}, []);

	return selectedProfileId;
};
