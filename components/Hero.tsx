import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import bgImg from "../public/corail-siege.jpeg";
import { motion } from "motion/react";

const Hero: React.FC = () => {
	const { t, language } = useLanguage();
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (bgRef.current) {
				bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative w-full overflow-hidden" style={{ height: 'calc(70vh - 85px)', minHeight: '400px' }}>
			{/* Background Image - Corporate Building */}
			<div
				ref={bgRef}
				className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform scale-110"
				style={{ backgroundImage: `url(${bgImg})`, top: '-10%', height: '120%' }}
			></div>

			{/* Gradient Overlay */}
			<div className={`absolute inset-0 ${language === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-corail-900 via-corail-800/70 to-teal-800/50`}></div>

			{/* Navy Blue Haze Filter */}
			<div className="absolute inset-0 bg-corail-900/40 pointer-events-none"></div>

			{/* Grain Texture */}
			<div
				className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
				}}
			></div>

			{/* Content */}
			<div className="absolute inset-0 flex items-center">
				<div className={`max-w-7xl w-full px-4 sm:px-6 lg:px-8 ${language === 'ar' ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`}>
					<div className={`max-w-3xl ${language === 'ar' ? 'pr-8' : 'pl-8'}`}>
						<motion.h1 
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className={`text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white leading-tight mb-6 xl:whitespace-nowrap ${language === 'ar' ? 'text-right' : 'text-left'}`}
						>
							{t.hero.title}
						</motion.h1>
						<motion.p 
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
							className={`text-sm sm:text-base xl:text-lg text-white/90 mb-8 leading-relaxed font-light ${language === 'ar' ? 'text-right' : 'text-justify'}`}
						>
							{t.hero.subtitle}
						</motion.p>

						<motion.div 
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
							className={`flex ${language === 'ar' ? 'justify-end' : 'justify-start'}`}
						>
							<NavLink
								to="/about"
								className={`inline-flex items-center justify-center px-10 py-4 bg-white text-corail-900 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-teal-50 hover:text-teal-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${language === 'ar' ? 'flex-row-reverse ml-auto' : ''}`}
							>
								{language === 'ar' ? (
									<>
										<ArrowLeft className="ml-3 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-500" />
										{t.hero.button}
									</>
								) : (
									<>
										{t.hero.button}
										<ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
									</>
								)}
							</NavLink>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
