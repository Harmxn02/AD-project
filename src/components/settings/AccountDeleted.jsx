function Homescreen() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-12">
			<p className="text-4xl font-black text-black">
				Account succesfully deleted
			</p>
			<a
				href="/"
				className="text-white max-w-fit font-semibold uppercase bg-[#232323] px-6 py-4"
			>
				Return to Home Screen
			</a>
		</div>
	);
}

export default Homescreen;
