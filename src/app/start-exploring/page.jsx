import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Title from "@/components/utility/Title";

import Image from "next/image";
import Landscape from "../../../public/landscape.jpg";

const page = () => {
	return (
		<div className="flex">
			<Sidebar />
			<section className="pb-8 pt-16 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Title content="Start Exploring" />

				<div className="grid grid-cols-2 gap-4">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Recusandae eligendi tempora accusantium eos
						laudantium maiores ipsam eveniet sint, aut labore.
					</p>
					<Image
						className="h-96 object-cover"
						src={Landscape}
						alt="banner image for start exploring"
					/>

					<Image
						className="h-96 object-cover"
						src={Landscape}
						alt="banner image for start exploring"
					/>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Recusandae eligendi tempora accusantium eos
						laudantium maiores ipsam eveniet sint, aut labore.
					</p>
				</div>
			</section>
		</div>
	);
};

export default page;
