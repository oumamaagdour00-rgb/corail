import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import StatCard from "../components/StatCard";
import SectionTitle from "../components/SectionTitle";
import { NavLink } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import BrandCarousel from "../components/BrandCarousel";
import presImg from "../public/assets/businessman-using-tablet-working-car-inside-compressed.webp";
import { motion } from "motion/react";

const Home: React.FC = () => {
	const { t, language } = useLanguage();

	return (
		<div className="flex flex-col w-full">
			<SEO pageKey="home" />
			<Hero />

			{/* Growth Platform Section */}
			<section className="py-24 bg-white relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.h2 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-2xl sm:text-3xl lg:text-[36px] font-display font-bold mb-10 xl:mb-16 text-center text-corail-900 leading-tight"
					>
						{t.home.growthTitle}
					</motion.h2>
					<motion.div 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						className="flex flex-col justify-center"
					>
						<p className="text-justify mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
							{t.home.growthSubtitle}
						</p>
						<div className="rounded-xl p-6 border border-corail-100 hover:border-corail-200 shadow-sm hover:shadow-md transition-all duration-700 hover:bg-white mb-8" style={{ backgroundColor: '#f7fbfc' }}>
							<div className="md:hidden space-y-3">
								{t.home.growthList.map((item, i) => (
									<motion.div 
										key={i}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.3 }}
										transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
										className="flex items-start space-x-2 text-sm text-corail-500"
									>
										<CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
										<span>{item}</span>
									</motion.div>
								))}
							</div>
							<div className="hidden md:grid md:grid-cols-2 gap-6">
								<div className="space-y-3">
									{t.home.growthList.filter((_, idx) => idx % 2 === 0).map((item, i) => (
										<motion.div 
											key={i}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, amount: 0.3 }}
											transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
											className="flex items-start space-x-2 text-sm text-corail-500"
										>
											<CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
											<span>{item}</span>
										</motion.div>
									))}
								</div>
								<div className="space-y-3">
									{t.home.growthList.filter((_, idx) => idx % 2 === 1).map((item, i) => (
										<motion.div 
											key={i}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true, amount: 0.3 }}
											transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
											className="flex items-start space-x-2 text-sm text-corail-500"
										>
											<CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
											<span>{item}</span>
										</motion.div>
									))}
								</div>
							</div>
						</div>
						<p className="text-justify leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
							{t.home.growthFooter
								.split(/(service provider)/i)
								.map((part, i) =>
									part.toLowerCase() === "service provider" ? (
										<strong key={i} className="font-bold text-corail-900">
											{part}
										</strong>
									) : (
										part
									),
								)}
						</p>
					</motion.div>
				</div>
			</section>

		{/* Key Figures */}
			<section className="py-12 border-y border-corail-100" style={{ backgroundColor: '#f0f7fa' }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<SectionTitle title={t.home.figuresTitle} alignment="center" />

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{t.data.figures.map((figure, idx) => (
							<StatCard key={idx} stat={figure} variant="figure" />
						))}
					</div>
				</div>
			</section>

			{/* President's Message */}
			<section className="py-24 bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row gap-20 items-center">
						<motion.div 
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="w-full lg:w-2/5 relative group/president"
						>
							<div className="absolute inset-0 rounded-3xl transform rotate-3 scale-105 opacity-40 group-hover/president:rotate-6 transition-transform duration-[2000ms] ease-out" style={{ backgroundColor: '#f2f3f5' }}></div>
							<div className="relative rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(54,91,120,0.2)] transition-shadow duration-[1500ms] overflow-hidden w-full h-[500px]">
								<img
									src={presImg}
									alt="President"
									className="w-full h-full object-cover filter contrast-110 grayscale group-hover/president:grayscale-0 group-hover/president:scale-105 transition-all duration-[2000ms] ease-out"
								/>
							</div>
							<div className="absolute -bottom-6 -right-6 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-corail-900 to-corail-800 text-white p-5 sm:p-8 rounded-2xl shadow-xl max-w-[200px] sm:max-w-xs group-hover/president:-translate-y-2 transition-transform duration-700 border border-white/10">
								<div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full pointer-events-none"></div>
								<p className="font-display font-black text-xl mb-1">
									{t.home.presidentName}
								</p>
								<p className="text-corail-400 text-sm font-bold tracking-widest uppercase">
									{t.home.presidentRole}
								</p>
							</div>
						</motion.div>
						<motion.div 
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="w-full lg:w-3/5"
						>
							<h1 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-bold mb-10 xl:mb-16 text-corail-900 leading-tight flex items-center gap-4">
								<span className="h-1 w-12 bg-corail-900"></span>
								{t.home.presidentTitle}
							</h1>
							<div className="space-y-3 relative">
								<span className="absolute -top-10 -left-6 text-8xl font-serif text-corail-100 opacity-50 pointer-events-none select-none">
									"
								</span>
								{t.home.presidentText.map((paragraph, i) => (
									<motion.p
										key={i}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.3 }}
										transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
										className="text-justify leading-relaxed"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}
									>
										{paragraph}
									</motion.p>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Brands Scrolling (Cards Style) */}
			<BrandCarousel />
		</div>
	);
};

export default Home;
