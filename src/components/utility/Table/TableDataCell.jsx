import React from "react";
import PropTypes from "prop-types";

const TableDataCell = ({ children, extra_styling }) => {
	const styling = extra_styling ? `${extra_styling}` : "";

	return <td className={`h-12 text-sm ${styling}`}>{children}</td>;
};

TableDataCell.propTypes = {
	children: PropTypes.node.isRequired,
	extra_styling: PropTypes.string,
};

export default TableDataCell;
