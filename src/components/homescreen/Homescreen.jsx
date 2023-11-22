import Image from "next/image";
import React from "react";
import LOGO from "../../app/icon.svg";
import Link from "next/link";

const Homescreen = () => {
	return (
		<div className="h-screen bg-[#2D2D2D] flex flex-col justify-center items-center gap-24">
			<Image alt="logo" src={LOGO} />
			
			<Link
				href="/dashboard"
				className="text-white max-w-fit font-semibold uppercase bg-[#232323] px-6 py-4"
			>
				Enter Dashboard
			</Link>
		</div>
	);
}

export default Homescreen;
