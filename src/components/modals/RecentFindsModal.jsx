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
				<div className="bg-white w-full flex flex-col p-4">
					<Image src={Close} width={25} height={25} onClick={onClose} alt="close icon" className="self-end cursor-pointer"/>
				</div>
			</div>
		</div>
	);
};

export default RecentFindsModal;
