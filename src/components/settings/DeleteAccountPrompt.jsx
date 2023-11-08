import React from "react";
import Title from "../utility/Title";

const DeleteAccountPrompt = () => {
	return (
		<>
			<Title content="Delete Account?" />
			<div className="bg-white w-4/6 border border-[#B3B3B3] py-6 px-4 flex gap-5 ">
				<div>
					{/* ICON */}
					<div className="w-8 h-8 bg-black"></div>
				</div>
				<div className="flex flex-col gap-4">
					{/* CONTENT */}
					<div>
						<h3 className="font-medium text-2xl">Are you sure</h3>
						<p className="font-light">
							This action is
							<span className="uppercase font-bold">
								{" "}
								PERMANENT
							</span>{" "}
							and can not be
							<span className="uppercase font-bold">
								{" "}
								REVERSED
							</span>{" "}
						</p>
					</div>

					<div className='flex gap-5'>
                        <a href="#todo" className='border border-black px-4 py-3 font-medium'>Delete account</a>
                        <a href="#todo" className='border border-black px-4 py-3 font-medium'>Cancel</a>
                    </div>
				</div>
			</div>
		</>
	);
};

export default DeleteAccountPrompt;
