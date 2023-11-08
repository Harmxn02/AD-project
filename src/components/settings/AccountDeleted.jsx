import Image from "next/image";
import React from "react";

function Homescreen() {
	return (
		<div className="h-screen bg-[#2D2D2D] flex flex-col justify-center items-center gap-12">
			<p className="text-4xl font-black text-white">Account succesfully deleted</p>
            <a href="#todo" className="text-white max-w-fit font-semibold uppercase bg-[#232323] px-6 py-4">
				Return to Home Screen
			</a>
		</div>
	);
}

export default Homescreen;
