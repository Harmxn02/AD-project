import React from "react";
import Title from "@/components/utility/Title";
import Link from "next/link";
import Image from "next/image";

import User from "../../../public/icons/section_icons/user.svg";
import Danger from "../../../public/icons/section_icons/danger.svg";

import SettingsSubtitle from "@/components/utility/Settings/SettingsSubtitle";
import SettingsTitle from "@/components/utility/Settings/SettingsTitle";
import SettingsContainer from "@/components/utility/Settings/SettingsContainer";

const Button = (props) => {
	return (
		<Link
			href={props.href}
			className="rounded-md bg-brandTeal hover:bg-brandBlack text-white px-4 py-3 font-medium"
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
							<SettingsTitle>Active Subscription</SettingsTitle>
							<SettingsSubtitle>
								Change or cancel your active subscription.
							</SettingsSubtitle>
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
							<SettingsTitle>DANGER ZONE</SettingsTitle>
							<SettingsSubtitle>
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
							</SettingsSubtitle>
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
