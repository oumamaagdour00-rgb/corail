import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import bgImg from "../public/corail-siege.jpeg";

const Hero: React.FC = () => {
	const { t, language } = useLanguage();

	return (
		<div className="relative h-[640px] w-full overflow-hidden">
			{/* Background Image - Corporate Building */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[120%] -top-[10%] will-change-transform animate-[parallax_linear_both] [animation-timeline:scroll(root)] [animation-range:0_850px] scale-105"
				style={{ backgroundImage: `url(${bgImg})` }}
			></div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-corail-900/95 via-corail-800/70 to-corail-900/30 mix-blend-multiply"></div>

			{/* Navy Blue Haze Filter */}
			<div className="absolute inset-0 bg-corail-900/30 backdrop-blur-[4px] pointer-events-none"></div>

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
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
					<div className="max-w-full">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6 animate-fade-in-up whitespace-pre-line">
							{t.hero.title}
						</h1>
						<p className="text-lg text-white/90 mb-8 leading-relaxed max-w-6xl animate-fade-in-up delay-100 font-light">
							{t.hero.subtitle}
						</p>

						<div className="animate-fade-in-up delay-200">
							<NavLink
								to="/about"
								className="inline-flex items-center justify-center px-10 py-4 bg-white text-corail-900 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-teal-50 hover:text-teal-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
							>
								{t.hero.button}
								{language === 'ar' ? (
									<ArrowLeft className="mr-3 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-500" />
								) : (
									<ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" />
								)}
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
