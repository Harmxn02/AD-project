import React from "react";

import PropTypes from "prop-types";

const SettingsSubtitle = (props) => {
	SettingsSubtitle.propTypes = {
		children: PropTypes.node.isRequired,
	};
	return <p className="font-light">{props.children}</p>;
};

export default SettingsSubtitle;
