import React from "react";
import Title from "@/components/utility/Title";
import Link from "next/link";
import Image from "next/image";

import User from "../../../public/icons/section_icons/user.svg";
import Danger from "../../../public/icons/section_icons/danger.svg";

const Account = () => {
	return (
		<>
			<Title content="Account" />
			<section className="flex flex-col gap-5">
				<div className="bg-white w-4/6 border border-brandGrey py-6 px-4 flex gap-5 ">
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
							<Link
								href="settings/subscriptions"
								className="border border-black px-4 py-3 font-medium"
							>
								Change subscription
							</Link>
							<Link
								href="#todo"
								className="border border-black px-4 py-3 font-medium"
							>
								Cancel subscription
							</Link>
						</div>
					</div>
				</div>

				<div className="bg-white w-4/6 border border-brandGrey py-6 px-4 flex gap-5 ">
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
								<strong className="font-bold uppercase">
									{" "}
									PERMANENT
								</strong>
								and
								<strong className="font-bold uppercase">
									{" "}
									IRREVERSIBLE
								</strong>{" "}
								change.
							</p>
						</div>

						<div className="flex gap-5">
							<Link
								href="settings/delete-data"
								className="border bg-black px-6 py-3 font-black text-white uppercase"
							>
								DELETE DATA
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Account;
