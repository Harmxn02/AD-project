import React from "react";
import Title from "@/components/utility/Title";
import Link from "next/link";
import Image from "next/image";

import User from "../../../public/icons/section_icons/user.svg";
import Danger from "../../../public/icons/section_icons/danger.svg";

import SettingsContainer from "@/components/utility/Settings/SettingsContainer";

const Button = (props) => {
	return (
		<Link
			href={props.href}
			className="rounded-md bg-gray-800 hover:bg-gray-950 text-white px-4 py-3 font-medium"
		>
			{props.children}
		</Link>
	);
};

const Account = () => {
	return (
		<>
			<Title content="Account" />
			<section className="flex flex-col gap-5">
				<SettingsContainer>
					<div>
						<Image
							alt="User icon"
							className="w-8 h-8"
							src={User}
						></Image>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<h3 className="font-medium text-2xl">
								Active Subscription
							</h3>
							<p className="font-light">
								Change or cancel your active subscription.
							</p>
						</div>

						<div className="flex gap-5">
							<Button href="settings/subscriptions">
								Change subscription
							</Button>
							<Button href="#todo">Cancel subscription</Button>
						</div>
					</div>
				</SettingsContainer>

				<SettingsContainer>
					<div>
						<Image
							alt="User icon"
							className="w-8 h-8"
							src={Danger}
						></Image>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<h3 className="font-medium text-2xl">
								DANGER ZONE
							</h3>
							<p className="font-light">
								Delete your data. This is a
								<strong className="font-semibold">
									{" "}
									permanent
								</strong>{" "}
								and
								<strong className="font-semibold">
									{" "}
									irreversible
								</strong>{" "}
								change.
							</p>
						</div>

						<div className="flex gap-5">
							<Link
								href="settings/delete-data"
								className="rounded-md bg-red-500 hover:bg-red-600 px-6 py-3 font-semibold text-white uppercase"
							>
								Delete data
							</Link>
						</div>
					</div>
				</SettingsContainer>
			</section>
		</>
	);
};

export default Account;
