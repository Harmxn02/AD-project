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


// Prop validation using PropTypes
Button.propTypes = {
	backgroundColor: PropTypes.string,
	content: PropTypes.node,
  href: PropTypes.string
};

export default Button;
