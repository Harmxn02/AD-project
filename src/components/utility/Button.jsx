import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
	const buttonStyle = {
		backgroundColor: props.backgroundColor,
	};

	return (
		<a
			href={props.href}
			style={buttonStyle}
			className={`block text-white font-bold text-center text-[0.850rem] py-4`}
		>
			{props.content}
		</a>
	);
};

Button.propTypes = {
	backgroundColor: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default Button;
