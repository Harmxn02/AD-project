import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Title from "@/components/utility/Title";

import Image from "next/image";
import Landscape from "../../../public/landscape.jpg";

const Subtitle = (props) => {
	return <h3 className="font-semibold text-2xl">{props.children}</h3>;
};

const Paragraph = (props) => {
	return <p className="py-2">{props.children}</p>;
};

const Container = (props) => {
	return <div className="p-10">{props.children}</div>;
};

const StartButton = () => {
	return (
		<div className="py-6">
			<a href="#todo" className="bg-brandTeal rounded-md px-4 py-3 text-white">Explore now</a>
		</div>
	);
};

const page = () => {
	return (
		<div className="flex">
			<Sidebar />
			<section className="pb-8 pt-16 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Title content="Start Exploring" />

				<div className="grid grid-cols-2 gap-4 rounded-md shadow-md bg-white ">
					<Container>
						<Subtitle>Area 1</Subtitle>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Recusandae eligendi tempora accusantium eos
							laudantium maiores ipsam eveniet sint, aut labore.
						</Paragraph>
						<StartButton />
					</Container>

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

					<Container>
						<Subtitle>Area 2</Subtitle>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Recusandae eligendi tempora accusantium eos
							laudantium maiores ipsam eveniet sint, aut labore.
						</Paragraph>
						<StartButton />
					</Container>
				</div>
			</section>
		</div>
	);
};

export default page;
