import Map from '@/components/map';

const RecentFindsModal = ({ onClose }) => {
	return (
		<div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black bg-opacity-50">
			<div className="bg-white w-[90%] h-[85%] flex">
				<div className="bg-[#85cbfa] w-full min-w-[80%]">
					<Map />
				</div>
				<div className="bg-gray-500 w-full">
				</div>
			</div>
		</div>
	);
};

export default RecentFindsModal;
