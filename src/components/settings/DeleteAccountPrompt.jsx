"use client";

import React, { useState } from "react";
import Title from "@/components/utility/Title";
import Link from "next/link";
import Image from "next/image";

import SettingsSubtitle from "@/components/utility/Settings/SettingsSubtitle";
import SettingsTitle from "@/components/utility/Settings/SettingsTitle";
import SettingsContainer from "@/components/utility/Settings/SettingsContainer";

import Danger from "../../../public/icons/section_icons/danger.svg";

const DeleteAccountPrompt = () => {
	const [inputValue, setInputValue] = useState("");
	const [isDeleteButtonActive, setIsDeleteButtonActive] = useState(false);

	const handleInputChange = (event) => {
		const value = event.target.value.trim().toLowerCase();
		setInputValue(value);
		setIsDeleteButtonActive(value === "confirm");
	};

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
						<SettingsTitle>Are you sure?</SettingsTitle>
						<SettingsSubtitle>
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
						</SettingsSubtitle>
					</div>

					<div className="flex flex-col gap-5">
						<input
							type="text"
							placeholder="Type 'confirm'"
							value={inputValue}
							onChange={handleInputChange}
							className="border rounded-md p-2"
						/>
						<div className="flex gap-5">
							{isDeleteButtonActive ? (
								<Link
									href="/settings/data-deleted"
									className="border rounded-md bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-semibold"
								>
									Delete data
								</Link>
							) : (
								<div className="border rounded-md bg-gray-300 cursor-not-allowed px-6 py-3 font-semibold">
									Delete data
								</div>
							)}
							<Link
								href="/settings"
								className="border rounded-md px-4 py-3 font-medium"
							>
								Cancel
							</Link>
						</div>
					</div>
				</div>
			</SettingsContainer>
		</>
	);
};

export default DeleteAccountPrompt;
