import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {

	return (
		<a
			href={props.href}
			className={`block rounded-md text-white bg-brandTeal hover:bg-slate-900 font-bold text-center text-[0.850rem] py-4`}
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
