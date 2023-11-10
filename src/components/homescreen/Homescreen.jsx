import LOGO from "../../assets/icons/logo.svg"
import { Link } from 'react-router-dom';

function Homescreen() {
	return (
		<div className="h-screen bg-[#2D2D2D] flex flex-col justify-center items-center gap-24">
            <img alt="logo xplor" src={LOGO}/>
			<Link to="/dashboard" className="text-white max-w-fit font-semibold uppercase bg-[#232323] px-6 py-4">
				Enter Dashboard
			</Link>
		</div>
	);
}

export default Homescreen;
