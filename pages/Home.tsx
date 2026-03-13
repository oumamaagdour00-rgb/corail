import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import StatCard from "../components/StatCard";
import SectionTitle from "../components/SectionTitle";
import { NavLink } from "react-router-dom";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import BrandCarousel from "../components/BrandCarousel";
import presImg from "../public/assets/businessman-using-tablet-working-car-inside-compressed.jpg";
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
						className="text-3xl md:text-5xl font-display font-black mb-16 text-center text-corail-900 leading-tight"
					>
						{t.home.growthTitle}
					</motion.h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
						<motion.div 
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
							className="flex flex-col justify-center"
						>
							<p className="text-lg text-corail-600 mb-8 font-light leading-relaxed text-justify">
								{t.home.growthSubtitle}
							</p>
							<div className="flex flex-col space-y-4">
								{t.home.growthList.map((item, i) => (
									<motion.div 
										key={i}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.3 }}
										transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
										className="flex items-center space-x-3"
									>
										<div className="bg-white shadow-sm border border-corail-100 p-1 rounded-md flex-shrink-0">
											<CheckCircle2 className="h-3.5 w-3.5 text-teal-500" />
										</div>
										<span className="text-corail-800 leading-snug">
											{item}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
						<motion.div 
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
							className="bg-corail-50 p-8 md:p-12 rounded-3xl border border-corail-100 shadow-xl flex items-center hover:bg-corail-100 transition-colors duration-700 h-full w-full"
						>
							<p className="text-lg text-corail-700 leading-relaxed font-light italic text-justify">
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
				</div>
			</section>

			{/* Key Figures */}
			<section className="py-24 bg-corail-50 border-y border-corail-100">
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
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="w-full lg:w-2/5 relative group/president"
						>
							<div className="absolute inset-0 bg-gradient-to-tr from-corail-200 to-teal-100 rounded-3xl transform rotate-3 scale-105 opacity-40 group-hover/president:rotate-6 transition-transform duration-[2000ms] ease-out"></div>
							<div className="relative rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(54,91,120,0.2)] transition-shadow duration-[1500ms] overflow-hidden w-full h-[500px]">
								<img
									src={presImg}
									alt="President"
									className="w-full h-full object-cover filter contrast-110 grayscale group-hover/president:grayscale-0 group-hover/president:scale-105 transition-all duration-[2000ms] ease-out"
								/>
							</div>
							<div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-corail-900 to-corail-800 text-white p-8 rounded-2xl shadow-xl max-w-xs group-hover/president:-translate-y-2 transition-transform duration-700 border border-white/10">
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
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="w-full lg:w-3/5"
						>
							<h1 className="text-3xl md:text-5xl font-display font-black mb-16 text-corail-900 leading-tight flex items-center gap-4">
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
										className="text-lg leading-relaxed text-corail-600 text-justify font-light"
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
