import React from "react";
import PropTypes from "prop-types";

function Title(props) {
	return (
		<h2 className="text-black font-bold text-3xl my-4">{props.content}</h2>
	);
}

Title.propTypes = {
	content: PropTypes.string.isRequired,
};

export default Title;
