async function fetchData(path) {
	const url = "https://project-2.ti.howest.be/2023-2024/group-17/api" + path;

	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};

	return fetch(url, options)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		})
		.then((data) => {
			if (typeof data === "object" && data != null) {
				const firstKey = Object.keys(data)[0];
				return data[firstKey];
			} else {
				throw new Error("Data is not an object or is empty.");
			}
		});
}

export default fetchData;
