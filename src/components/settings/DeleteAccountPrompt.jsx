import React from "react";
import Title from "@/components/utility/Title";
import Link from "next/link";
import Image from "next/image";

import SettingsContainer from "@/components/utility/Settings/SettingsContainer";

import Danger from "../../../public/icons/section_icons/danger.svg";

const DeleteAccountPrompt = () => {
	return (
		<>
			<Title content="Delete Data?" />
			<SettingsContainer>
				<div>
					<Image
						alt="Danger icon"
						className="w-8 h-8"
						src={Danger}
					></Image>
				</div>
				<div className="flex flex-col gap-4">
					<div>
						<h3 className="font-medium text-2xl">Are you sure?</h3>
						<p className="font-light">
							This action is
							<strong className="font-semibold">
								{" "}
								permanent
							</strong>{" "}
							and can not be
							<strong className="font-semibold">
								{" "}
								reversed
							</strong>{" "}
						</p>
					</div>

					<div className="flex gap-5">
						<Link
							href="/settings/data-deleted"
							className="border rounded-md bg-red-500 hover:bg-red-600 text-white uppercase px-6 py-3 font-semibold"
						>
							Delete data
						</Link>
						<Link
							href="/settings"
							className="border rounded-md px-4 py-3 font-medium"
						>
							Cancel
						</Link>
					</div>
				</div>
			</SettingsContainer>
		</>
	);
};

export default DeleteAccountPrompt;
