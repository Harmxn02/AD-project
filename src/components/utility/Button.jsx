import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = (props) => {
	return (
		<Link
			href={props.href}
			className={`block rounded-md text-white bg-brandTeal hover:bg-teal-800 transition-colors duration-500 font-bold text-center text-[0.850rem] py-4`}
		>
			{props.content}
		</Link>
	);
};

Button.propTypes = {
	href: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default Button;
