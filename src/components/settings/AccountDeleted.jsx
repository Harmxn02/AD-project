import React from "react";
import Link from "next/link";

const AccountDeleted = () => {
	return (
		<div className="h-screen bg-brandDarkPurple text-brandPink flex flex-col justify-center items-center gap-12">
			<p className="text-4xl font-black text-brandPink">
				Data succesfully deleted
			</p>
			<Link
				href="/"
				className="text-white rounded-md max-w-fit font-semibold bg-brandBlue hover:bg-blue-600 px-12 py-3"
			>
				Return to Home Screen
			</Link>
		</div>
	);
};

export default AccountDeleted;
