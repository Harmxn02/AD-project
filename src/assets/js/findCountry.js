"use client";

export const findCountry = (latitude, longitude) => {
	let wc = require("which-country");
	const result = wc([latitude, longitude]);

	if (result === null) {
		return "not valid coordinates";
	}

	console.log(result);
	return result;
};

// USE CASE:
{
	/* <p>{findCountry(find.longitude, find.latitude)}</p> */
}

export default findCountry;
