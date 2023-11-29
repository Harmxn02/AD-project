import React from "react";
import PropTypes from "prop-types";

const RecentsContainer = ({ children }) => {
	return (
		<div className="h-16 bg-white rounded-xl shadow-md flex flex-row items-center justify-between gap-5">
			{children}
		</div>
	);
};

RecentsContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RecentsContainer;
