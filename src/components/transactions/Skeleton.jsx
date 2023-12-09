import React from "react";
import PropTypes from "prop-types";
import TableHeader from "@/components/utility/Table/TableHeader";
import TableDataCell from "@/components/utility/Table/TableDataCell";

const Skeleton = (props) => {
	Skeleton.propTypes = {
		firstCol: PropTypes.string.isRequired,
	};

	const numberOfRows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
	];

	return (
		<div className="bg-white px-8 pb-6 max-h-[335px] rounded-xl shadow-md">
			<table className="w-full">
				<thead className="sticky top-0 bg-white animate-pulse w-full">
					<tr className="text-left">
						<TableHeader pl="10">{props.firstCol}</TableHeader>
						<TableHeader>Date</TableHeader>
						<TableHeader>Status</TableHeader>
						<TableHeader>Amount</TableHeader>
					</tr>
				</thead>
				<tbody>
					{numberOfRows.map((row) => (
						<tr key={row.id}>
							<TableDataCell extra_styling="font-bold pl-10">
								<div className="w-[5ch] h-3 bg-gray-200 rounded-full animate-pulse"></div>
							</TableDataCell>
							<TableDataCell>
								<div className="w-[15ch] h-3 bg-gray-200 rounded-full animate-pulse"></div>
							</TableDataCell>
							<TableDataCell>
								<div className="w-[15ch] h-3 bg-gray-200 rounded-full animate-pulse"></div>
							</TableDataCell>
							<TableDataCell>
								<div className="w-[10ch] h-3 bg-gray-200 rounded-full animate-pulse"></div>
							</TableDataCell>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Skeleton;
