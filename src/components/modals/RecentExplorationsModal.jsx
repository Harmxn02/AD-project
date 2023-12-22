import RouteMap from "@/components/dashboard/map/RouteMap";

import Image from "next/image";
import Close from "../../../public/icons/close.svg";

import PropTypes from "prop-types";

const RecentExplorationsModal = ({ onClose, sessionId }) => {
	return (
		<div className="fixed top-0 left-0 flex flex-col w-full h-full justify-center items-center bg-black bg-opacity-50 z-50">
			<div className="bg-white w-[90%] h-[85%] flex">
				<div className="bg-[#85cbfa] w-full min-w-[80%]">
					<RouteMap sessionId={sessionId} />
				</div>
				<div className="relative overflow-x-hidden shadow-md min-w-[20%]">
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
								<td className="px-6 py-4 bg-gray-600" id="timestamp">
									14:20:18
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-2 font-medium text-white whitespace-nowraptext-white bg-gray-800"
								>
									Latitude
								</th>
								<td className="px-6 py-4 bg-gray-600" id="latitude">
									34.858
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-2 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Longitude
								</th>
								<td className="px-6 py-4 bg-gray-600" id="longitude">
									28.747
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Altitude <sup> (ft)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="altitude">
									5
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Temperature <sup>(°C)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="temperature">
									37
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Humidity
									<sup>
										{" "}
										(g/m<sup>3</sup>)
									</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="humidity">
									0
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Pressure<sup> (hPa)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="pressure">
									1147
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Light <sup> (lm)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="light">
									1478.2554
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Windspeed <sup> (km/h)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="windspeed">
									34
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Wind Direction <sup> (heading)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="windDirection">
									249
								</td>
							</tr>
							<tr className="border-b border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800"
								>
									Radiation <sup> (rad)</sup>
								</th>
								<td className="px-6 py-4 bg-gray-600" id="radiation">
									34.782
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				className="flex mt-4 text-white bg-brandTeal px-4 py-2 items-center rounded-md cursor-pointer hover:opacity-70"
				onClick={onClose}
			>
				<Image src={Close} width={30} height={30} alt="close icon" className="mr-2" />
				<span className="text-lg font-bold">Close modal</span>
			</div>
		</div>
	);
};

RecentExplorationsModal.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default RecentExplorationsModal;
