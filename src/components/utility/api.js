"use client";

import { useEffect, useState } from "react";

export const getAPI = (path) => {
	const [apiData, setApiData] = useState(null);
	const URL = `https://project-2.ti.howest.be/2023-2024/group-17/api`;

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			try {
				const response = await fetch(URL + path);
				await response.json().then((data) => {
					if (isMounted) {
						const firstKey = Object.keys(data)[0];
						setApiData(data[firstKey]);
					}
				});
			} catch (error) {
				console.error("Error", error);
			}
		};
		fetchData();

		return () => {
			isMounted = false;
		};
	}, [URL, path]);
	return apiData;
};
