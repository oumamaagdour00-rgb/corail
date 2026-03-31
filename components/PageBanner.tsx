import React, { useEffect, useState } from "react";
import siegeImg from "../public/corail-siege.webp";

const PageBanner: React.FC = () => {
	const [bgSize, setBgSize] = useState('cover');

	useEffect(() => {
		const update = () => setBgSize(window.innerWidth >= 1024 ? 'cover' : '250%');
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	return (
		<div className="relative text-white overflow-hidden" style={{ height: '220px' }}>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{ 
					backgroundImage: `url(${siegeImg})`,
					backgroundPosition: "center 30%",
					backgroundSize: bgSize,
					backgroundRepeat: 'no-repeat',
				}}
			></div>
			<div className="absolute inset-0 bg-corail-900/95 pointer-events-none"></div>
		</div>
	);
};

export default PageBanner;
