"use client";

import React from "react";
import Layout from "@/components/utility/Layout";
import Title from "@/components/utility/Title";

import PropTypes from "prop-types";

import Image from "next/image";
import Paris from "../../../public/Paris.png";
import Santorini from "../../../public/Santorini.png";

const Subtitle = (props) => {
	Subtitle.propTypes = {
		children: PropTypes.node.isRequired,
	};
	return <h3 className="font-semibold text-2xl">{props.children}</h3>;
};

const Paragraph = (props) => {
	Paragraph.propTypes = {
		children: PropTypes.node.isRequired,
	};
	return <p className="py-2">{props.children}</p>;
};

const Container = (props) => {
	Container.propTypes = {
		children: PropTypes.node.isRequired,
	};
	return <div className="p-10">{props.children}</div>;
};

const StartButton = () => {
	return (
		<div className="py-6">
			<a
				href="#todo"
				className="bg-brandTeal hover:bg-teal-800 transition-colors duration-500 rounded-md px-4 py-3 text-white"
			>
				Explore now
			</a>
		</div>
	);
};

const page = () => {
	return (
		<Layout>
			<section className="pb-8 pt-16 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent">
				<Title content="Start Exploring (part of flow2 so not finished)" />
				<div className="grid grid-cols-2 rounded-md shadow-md bg-white ">
					<Container>
						<Subtitle>Paris, France</Subtitle>
						<Paragraph>
							Explore Paris, the City of Light, with iconic landmarks like the Eiffel Tower and Notre-Dame. Immerse in history, art, and romance amid charming streets, exquisite cuisine,
							and enchanting culture.
						</Paragraph>
						<StartButton />
					</Container>
					<Image className="h-96 object-cover" src={Paris} alt="banner image for start exploring" />
					<Image className="h-96 object-cover" src={Santorini} alt="banner image for start exploring" />
					<Container>
						<Subtitle>Santorini, Greece</Subtitle>
						<Paragraph>
							Experience Santorini, a captivating Greek island with white-washed buildings, stunning sunsets, and crystal-clear waters. Explore charming villages, immerse in the
							beauty of the Aegean Sea, discover historic sites, and savor delicious Mediterranean cuisine.
						</Paragraph>
						<StartButton />
					</Container>
				</div>
			</section>
		</Layout>
	);
};

export default page;
