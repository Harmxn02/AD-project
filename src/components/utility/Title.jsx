import PropTypes from "prop-types";

function Title(props) {
	return (
		<h2 className="text-black font-bold text-3xl my-4">{props.content}</h2>
	);
}

// Prop validation using PropTypes
Title.propTypes = {
	content: PropTypes.string
};

export default Title;
