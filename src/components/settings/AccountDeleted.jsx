import React from "react";
import Link from "next/link";

const AccountDeleted = () => {
	return (
		<div className="h-screen bg-brandDarkGreen text-brandLightGreen flex flex-col justify-center items-center gap-12">
			<p className="text-4xl font-black text-brandLightGreen">
				Data succesfully deleted
			</p>
			<Link
				href="/"
				className="text-white rounded-md max-w-fit font-semibold bg-brandTeal hover:bg-teal-800 transition-colors duration-500 px-12 py-3"
			>
				Return to Home Screen
			</Link>
		</div>
	);
};

export default AccountDeleted;
