import React from "react";
import siegeImg from "../public/corail-siege.jpeg";

const PageBanner: React.FC = () => (
	<div className="relative text-white py-28 overflow-hidden">
		<div
			className="absolute inset-0 bg-cover bg-center pointer-events-none"
			style={{ backgroundImage: `url(${siegeImg})`, backgroundPosition: "center 60%" }}
		></div>
		<div className="absolute inset-0 bg-corail-900/95 pointer-events-none"></div>
	</div>
);

export default PageBanner;
