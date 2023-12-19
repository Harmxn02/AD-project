const RecentFindsModal = ({ onClose }) => {
	return (
		<div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black bg-opacity-50">
			<div className="bg-white w-[800px] h-[450px] p-8 rounded-md">
				<p>HERE MAP AND CONTENT ETC</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default RecentFindsModal;
