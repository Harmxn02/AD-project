"use client";

import React from "react";
import PropTypes from "prop-types";

const Toggle = (props) => {
	const updatePreferences = (e) => {
		const toggle = e.target;
		const keys = toggle.id.split(".");
		const preferencesObject = JSON.parse(localStorage.getItem("preferences"));

		if (keys.length === 1) {
			// Handle single-level key (e.g., "carrierPigeon")
			preferencesObject[keys[0]] = toggle.checked;
		} else {
			// Handle nested keys (e.g., "upcomingSpecialEvents.email" or "upcomingSpecialEvents.sms")
			const keyToUpdate = keys[0];
			const valueToUpdate = keys[1];
			preferencesObject[keyToUpdate][valueToUpdate] = toggle.checked;
		}

		localStorage.setItem("preferences", JSON.stringify(preferencesObject));
	};

	return (
		<div>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					value={props.value}
					id={props.id}
					defaultChecked={props.state}
					onChange={updatePreferences}
					className="sr-only peer"
				/>
				<div className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandTeal"></div>
				<span className="ms-3 text-sm font-medium text-gray-400 peer-checked:text-black ">{props.text}</span>
			</label>
		</div>
	);
};

Toggle.propTypes = {
	value: PropTypes.string,
	text: PropTypes.string,
	state: PropTypes.bool,
	id: PropTypes.string.isRequired,
};

export default Toggle;
