import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ children, pl }) => {
	const paddingLeft = pl ? `pl-${pl}` : "";

	return <th className={`w-[12.5%] h-12 ${paddingLeft}`}>{children}</th>;
};

TableHeader.propTypes = {
	children: PropTypes.node.isRequired,
	pl: PropTypes.number,
};

export default TableHeader;
