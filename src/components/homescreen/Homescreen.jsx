import Image from "next/image";
import React from "react";
import LOGO from "./X-Plore-logo-transparent-background.svg"

function Homescreen() {
	return (
		<div className="h-screen bg-[#2D2D2D] flex flex-col justify-center items-center gap-24">
            <Image src={LOGO}/>
			<a href="#todo" className="text-white max-w-fit font-semibold uppercase bg-[#232323] px-6 py-4">
				Enter Dashboard
			</a>
		</div>
	);
}

export default Homescreen;
