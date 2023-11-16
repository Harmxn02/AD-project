import React from "react";
import Link from "next/link";

function Homescreen() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-12">
			<p className="text-4xl font-black text-black">
				Data succesfully deleted
			</p>
			<Link
				href="/"
				className="text-white max-w-fit font-semibold uppercase bg-[#232323] px-6 py-4"
			>
				Return to Home Screen
			</Link>
		</div>
	);
}

export default Homescreen;
