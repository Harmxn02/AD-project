import RouteMap from "@/components/dashboard/map/RouteMap";
import Image from "next/image";
import Close from "../../../public/icons/close.svg";

const RecentFindsModal = ({ onClose }) => {
	return (
		<div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black bg-opacity-50">
			<div className="bg-white w-[90%] h-[85%] flex">
				<div className="bg-[#85cbfa] w-full min-w-[80%]">
					<RouteMap />
				</div>
				{/* <Image
						src={Close}
						width={25}
						height={25}
						onClick={onClose}
						alt="close icon"
						className="self-end cursor-pointer"
					/> */}
				<div className="relative overflow-x-auto shadow-md min-w-[20%]">
					<table className="w-full h-full text-sm text-left text-gray-400">
						<thead className="text-xs uppercase text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3 bg-gray-800">
									Metric Type
								</th>
								<th scope="col" className="px-6 py-3 w-[40%] bg-gray-600">
									Value
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Timestamp
								</th>
								<td className="px-6 py-4 bg-gray-600" id="timestamp">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-white whitespace-nowraptext-white bg-gray-800"
								>
									Latitude
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Longitude
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Altitude
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Temperature
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Humidity
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Pressure
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Light
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Windspeed
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Wind Direction
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Radiation
								</th>
								<td className="px-6 py-4 bg-gray-600">Silver</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default RecentFindsModal;
