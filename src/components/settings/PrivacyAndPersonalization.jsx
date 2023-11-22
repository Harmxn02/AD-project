import React from "react";
import Title from "@/components/utility/Title";
import Toggle from "@/components/utility/Toggle";
import Image from "next/image";

import Payment from "../../../public/icons/section_icons/payment.svg";
import Marketing from "../../../public/icons/section_icons/marketing.svg";

const PrivacyAndPersonalization = () => {
	return (
		<div className="mt-12">
			<Title content="Privacy and Personalization" />
			<section className="flex flex-col gap-5">
				<div>
					<h3 className="text-xl font-medium">
						Notification Preferences
					</h3>
					<div className="flex gap-5 my-4">
						<a
							href="#"
							className="border border-black px-4 py-3 font-medium"
						>
							Unsubscribe from all Email
						</a>
						<a
							href="#"
							className="border border-black px-4 py-3 font-medium"
						>
							Unsubscribe from all SMS
						</a>
					</div>
				</div>

				<div className="bg-white w-4/6 border border-[#B3B3B3] py-6 px-4 flex gap-5">
					<div>
						<Image
							alt="Payment icon"
							className="w-8 h-8"
							src={Payment}
						></Image>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<h3 className="font-medium text-2xl">
								Payment Reminders
							</h3>
							<p className="font-light">
								Send me messages for payment reminders.
							</p>
						</div>

						<Toggle />
					</div>
				</div>

				<div className="bg-white w-4/6 border border-[#B3B3B3] py-6 px-4 flex gap-5">
					<div>
						<Image
							alt="Marketing icon"
							className="w-8 h-8"
							src={Marketing}
						></Image>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<h3 className="font-medium text-2xl">
								Marketing Communication
							</h3>
							<p className="font-light">
								Learn about new courses and programs,
								scholarship opportunities and upcoming special
								events.
							</p>
							<div className="my-6">
								<p className="my-2">Upcoming special events</p>
								<Toggle text="Email" />
								<Toggle text="SMS" />
							</div>
							<div className="my-6">
								<p className="my-2">New exploration areas</p>
								<Toggle text="Email" />
								<Toggle text="SMS" />
							</div>
							<div className="my-6">
								<p className="my-2">
									Educational opportunities
								</p>
								<Toggle text="Email" />
								<Toggle text="SMS" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrivacyAndPersonalization;
