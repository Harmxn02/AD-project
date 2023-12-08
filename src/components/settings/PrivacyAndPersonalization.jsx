import React from "react";
import Title from "@/components/utility/Title";
import Toggle from "@/components/utility/Toggle";
import Image from "next/image";

import SettingsSubtitle from "@/components/utility/Settings/SettingsSubtitle";
import SettingsTitle from "@/components/utility/Settings/SettingsTitle";
import SettingsContainer from "@/components/utility/Settings/SettingsContainer";

import Payment from "../../../public/icons/section_icons/payment.svg";
import Marketing from "../../../public/icons/section_icons/marketing.svg";

const PrivacyAndPersonalization = () => {
	let preferences;

	useEffect(() => {
        preferences = JSON.parse(localStorage.getItem("preferences"));
    }, []);

	return (
		<div className="mt-12">
			<Title content="Privacy and Personalization" />
			<section className="flex flex-col gap-5">
				<div>
					<h3 className="text-xl font-medium">
						Notification Preferences
					</h3>
				</div>

				<SettingsContainer>
					<div>
						<Image
							alt="Payment icon"
							className="w-8 h-8"
							src={Payment}
						></Image>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<SettingsTitle>Payment Reminders</SettingsTitle>
							<SettingsSubtitle>
								Send me messages for payment reminders.
							</SettingsSubtitle>
						</div>
						<div>
							<Toggle text="Carrier Pigeon" state={preferences.carrierPigeon} id="carrierPigeon"/>
						</div>
					</div>
				</SettingsContainer>

				<SettingsContainer>
					<div>
						<Image
							alt="Marketing icon"
							className="w-8 h-8"
							src={Marketing}
						></Image>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<SettingsTitle>
								Marketing Communication
							</SettingsTitle>
							<SettingsSubtitle>
								Learn about new exploration areas, scholarship
								opportunities and upcoming special events.
							</SettingsSubtitle>
							<div className="my-6">
								<p className="my-2">Upcoming special events</p>
								<Toggle text="Email" state={preferences.upcomingSpecialEvents.email} id="upcomingSpecialEvents.email"/>
								<Toggle text="SMS" state={preferences.upcomingSpecialEvents.sms} id="upcomingSpecialEvents.sms"/>
							</div>
							<div className="my-6">
								<p className="my-2">New exploration areas</p>
								<Toggle text="Email" state={preferences.newExplorationAreas.email} id="newExplorationAreas.email"/>
								<Toggle text="SMS" state={preferences.newExplorationAreas.sms} id="newExplorationAreas.sms"/>
							</div>
							<div className="my-6">
								<p className="my-2">
									Educational opportunities
								</p>
								<Toggle text="Email" state={preferences.educationalOpportunities.email} id="educationalOpportunities.email"/>
								<Toggle text="SMS" state={preferences.educationalOpportunities.sms} id="educationalOpportunities.sms"/>
							</div>
						</div>
					</div>
				</SettingsContainer>
			</section>
		</div>
	);
};

export default PrivacyAndPersonalization;
