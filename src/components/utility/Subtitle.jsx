import React from "react";
import PropTypes from "prop-types";

function Subtitle(props) {
	return <h3 className="text-[1.125rem] font-semibold">{props.content}</h3>;
}

Subtitle.propTypes = {
	content: PropTypes.string.isRequired,
};

export default Subtitle;
