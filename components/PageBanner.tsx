import React, { useEffect, useState } from "react";
import siegeImg from "../public/fmcg-distribution-warehouse.webp";

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
			<img 
				src={siegeImg} 
				alt="FMCG distribution warehouse"
				className="absolute inset-0 w-full h-full object-cover pointer-events-none"
				style={{ 
					objectPosition: "center 35%",
					transform: bgSize === '250%' ? 'scale(2.5)' : 'scale(1)',
				}}
			/>
			<div className="absolute inset-0 bg-corail-900/90 pointer-events-none"></div>
		</div>
	);
};

export default PageBanner;
