"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import { GetAPI } from "../../assets/js/api";
import { GetUser } from "../../assets/js/user";

import { usePathname } from "next/navigation";

import ExitIcon from "../../../public/icons/exit.svg";
import ChestIcon from "../../../public/icons/sidebar_statistics/chest.svg";
import RulerIcon from "../../../public/icons/sidebar_statistics/ruler.svg";
import ClockIcon from "../../../public/icons/sidebar_statistics/clock.svg";

import { DashboardIcon } from "./icons/DashboardIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { SubscriptionsIcon } from "./icons/SubscriptionsIcon";
import { TransactionsIcon } from "./icons/TransactionsIcon";

import SidebarSkeleton from "@/components/utility/skeletons/SidebarSkeleton";
import UserInformationSkeleton from "@/components/utility/skeletons/UserInformationSkeleton";
import Button from "@/components/utility/Button";

const SidebarLink = ({ href, icon, text, currentPath }) => {
	SidebarLink.propTypes = {
		href: PropTypes.string.isRequired,
		icon: PropTypes.element, // Remove isRequired since it can be undefined
		text: PropTypes.string.isRequired,
		currentPath: PropTypes.string.isRequired,
	};

	const isActive = currentPath === href;

	console.log(icon);

	return (
		<li className="flex items-center">
			{/* the line left of the selected item */}
			<div
				className={`w-1 h-6 ml-3 mr-3
                ${isActive ? "bg-brandTeal" : "bg-white"}`}
			></div>

			<Link
				href={href}
				className={`flex items-center gap-4 hover:opacity-80 hover:text-brandDarkGreen ${
					isActive ? "text-brandTeal font-semibold" : "text-brandBlack"
				}`}
			>
				{icon &&
					React.cloneElement(icon, {
						fill: isActive ? "#54696c" : "#4C4C4C",
						width: "24",
						height: "24",
					})}
				{text}
			</Link>
		</li>
	);
};

const QuickStats = () => {
	const selectedUserID = GetUser();

	const adriaId = selectedUserID;
	const statistics = GetAPI(`/members/${adriaId}/statistics`, true);

	if (!statistics) {
		return <SidebarSkeleton />;
	}

	const quickStatsData = [
		{
			id: 1,
			icon: RulerIcon,
			icon_alt: "ruler icon",
			title: "Distance traveled",
			statistic: statistics.distanceTraveled + " kilometres",
		},
		{
			id: 2,
			icon: ClockIcon,
			icon_alt: "clock icon",
			title: "Minutes flown",
			statistic: statistics.minutesFlown,
		},
		{
			id: 3,
			icon: ChestIcon,
			icon_alt: "chest icon",
			title: "Items collected",
			statistic: statistics.itemsCollected,
		},
	];

	return (
		<div className="px-3 mb-4 flex-col gap-2">
			{quickStatsData.map((data) => (
				<div key={data.id} className={`flex items-center gap-3 border-b py-2`}>
					<Image src={data.icon} alt={data.icon_alt} />
					<div>
						<h4 className="font-semibold text-sm text-brandTeal">{data.title}</h4>
						<p className="text-xs">{data.statistic}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const UserInformation = () => {
	const selectedUserID = GetUser();
	const currentUser = GetAPI(`/members/${selectedUserID}`, true);

	return (
		<div className="p-8 text-center">
			{currentUser ? (
				<div>
					<Link href="/settings">
						<Image
							src={currentUser.profilePicture}
							alt="Profile Picture"
							width={80}
							height={80}
							className="w-[80px] h-[80px] rounded-full m-auto mb-4"
							priority
						/>
					</Link>
					<h3 className="text-brandTeal font-bold">{currentUser.name}</h3>
					<h3 className="text-[0.875rem] text-brandBlack">{currentUser.email}</h3>
				</div>
			) : (
				<UserInformationSkeleton />
			)}
		</div>
	);
};

const Sidebar = () => {
	const pathname = usePathname() || "";
	const settingsPathname = "/settings";
	const transactionsPathname = "/transactions";
	const subscriptionsPathname = "/settings/subscriptions";

	return (
		<header className="bg-white min-w-[250px] h-screen relative">
			<UserInformation />
			<QuickStats />

			<nav className="pr-7 py-7 ">
				<ul className="flex flex-col gap-5">
					<SidebarLink href="/dashboard" icon={DashboardIcon} text="Dashboard" currentPath={pathname} />
					<SidebarLink
						href={transactionsPathname}
						icon={TransactionsIcon}
						text="Transactions"
						currentPath={pathname}
					/>
					<SidebarLink href={settingsPathname} icon={SettingsIcon} text="Settings" currentPath={pathname} />
					<SidebarLink
						href={subscriptionsPathname}
						icon={SubscriptionsIcon}
						text="Subscriptions"
						currentPath={pathname}
					/>
				</ul>
				<div className="flex pl-7 flex-col gap-2 mt-8">
					<Button href="/start-exploring" content="START EXPLORING" />
					<Button href="#" content="SCHEDULE EXCURSION" />
				</div>
				<Link href="/" className="absolute bottom-0 w-full pb-4 pl-7">
					<Image className="inline-block mr-2" alt="exit icon" src={ExitIcon} width={25} height={25} />
					Exit
				</Link>
			</nav>
		</header>
	);
};

export default Sidebar;
