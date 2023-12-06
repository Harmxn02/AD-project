import React from "react";
import PropTypes from "prop-types";

const SettingsContainer = ({ children }) => {
	return (
		<div className="bg-white max-w-[750px] border-2 border-[#f1f1f1] py-6 px-6 flex gap-5 rounded-lg">
			{children}
		</div>
	);
};

SettingsContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SettingsContainer;
