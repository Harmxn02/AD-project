import React from "react";
import Title from "@/components/utility/Title";
import Link from "next/link";
import Image from "../../../node_modules/next/image";

import Danger from "../../../public/icons/section_icons/danger.svg";

const DeleteAccountPrompt = () => {
	return (
		<>
			<Title content="Delete Data?" />
			<div className="bg-white w-4/6 border border-[#B3B3B3] py-6 px-4 flex gap-5 ">
				<div>
					<Image
						alt="Danger icon"
						className="w-8 h-8"
						src={Danger}
					></Image>
				</div>
				<div className="flex flex-col gap-4">
					<div>
						<h3 className="font-medium text-2xl">Are you sure</h3>
						<p className="font-light">
							This action is
							<span className="uppercase font-bold">
								{" "}
								PERMANENT
							</span>{" "}
							and can not be
							<span className="uppercase font-bold">
								{" "}
								REVERSED
							</span>{" "}
						</p>
					</div>

					<div className="flex gap-5">
						<Link
							href="/settings/data-deleted"
							className="border border-black px-4 py-3 font-medium"
						>
							Delete data
						</Link>
						<Link
							href={settingsPathname}
							className="border border-black px-4 py-3 font-medium"
						>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteAccountPrompt;
