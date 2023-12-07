import React from "react";

import PropTypes from "prop-types";

const SettingsTitle = (props) => {
	SettingsTitle.propTypes = {
		children: PropTypes.node.isRequired,
	};
	return <h3 className="font-medium text-2xl">{props.children}</h3>;
};

export default SettingsTitle;
