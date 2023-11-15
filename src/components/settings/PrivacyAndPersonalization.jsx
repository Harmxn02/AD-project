
const PrivacyAndPersonalization = () => {
	return (
		<div>
			<Title content="Privacy and Personalization" />
			<section>
				<div>
					<h3 className="text-xl font-medium">Notification Preferences</h3>
					<div className="flex gap-5 my-4">
						<a href="#" className="border border-black px-4 py-3 font-medium">Unsubscribe from all Email</a>
						<a href="#" className="border border-black px-4 py-3 font-medium">Unsubscribe from all SMS</a>
					</div>
				</div>

				<div className="bg-white w-4/6 border border-[#B3B3B3] py-6 px-4 flex gap-5">
					<div>
						{/* ICON */}
						<div className="w-8 h-8 bg-black"></div>
					</div>
					<div className="flex flex-col gap-4">
						{/* CONTENT */}
						<div>
							<h3 className="font-medium text-2xl">
								Payment Reminders
							</h3>
							<p className="font-light">
								Send me messages for payment reminders.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrivacyAndPersonalization;
