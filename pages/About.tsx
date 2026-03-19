import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import { NavLink } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Tagline from "../components/Tagline";
import siegeImg from "../public/corail-siege.jpeg";
import { motion } from "motion/react";

const About: React.FC = () => {
	const { t, language } = useLanguage();

	return (
		<div className="flex flex-col w-full">
			<SEO pageKey="about" />
			
			{/* Header Image Section */}
			<div className="relative bg-corail-900 text-white py-48 mb-16 overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center pointer-events-none"
					style={{ backgroundImage: `url(${siegeImg})`, backgroundPosition: 'center 60%' }}
				></div>
				<div className="absolute inset-0 bg-gradient-to-r from-corail-900/80 via-corail-800/40 to-transparent pointer-events-none"></div>
				<div className="absolute inset-0 opacity-10 bg-mesh pointer-events-none"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
				{/* Company Profile */}
				<motion.div 
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="max-w-4xl mx-auto"
				>
					<div className="prose prose-base text-corail-400">
						{t.about.profileText.map((paragraph: string, idx: number) => (
							<motion.p 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
								className="mb-4 text-justify"
							>
								{paragraph}
							</motion.p>
						))}
					</div>
				</motion.div>

				{/* Divider */}
				<div className="max-w-7xl mx-auto">
					<div className="h-px bg-gradient-to-r from-transparent via-corail-200 to-transparent"></div>
				</div>

				{/* Approach and Engagement - Two Columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Approach */}
					<motion.div 
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="bg-gray-50 p-8 rounded-2xl"
					>
						<SectionTitle title={t.about.approachTitle} alignment="left" />
						<div className="prose prose-base text-corail-400 space-y-6">
							{t.about.approachText.map((paragraph: string, idx: number) => (
								<motion.p
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
									className={
										idx === t.about.approachText.length - 1
											? "font-semibold text-corail-800 text-justify"
											: "text-justify"
									}
								>
									{paragraph}
								</motion.p>
							))}
						</div>
					</motion.div>

					{/* Engagement */}
					<motion.div 
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="bg-corail-50 p-8 rounded-2xl"
					>
						<SectionTitle title={t.about.engagementTitle} alignment="left" />
						<div className="prose prose-base text-corail-400 space-y-6">
							{t.about.engagementText.map((paragraph: string, idx: number) => (
								<motion.p 
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
									className="text-justify"
								>
									{paragraph}
								</motion.p>
							))}
						</div>
					</motion.div>
				</div>

				{/* CTA to Services */}
				<motion.div 
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center py-12"
				>
					<NavLink
						to="/services"
						className="inline-flex items-center px-8 py-4 bg-corail-900 text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-corail-800 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
					>
						{t.about.servicesButton}
						{language === 'ar' ? (
							<ArrowLeft className="mr-2 h-4 w-4" />
						) : (
							<ArrowRight className="ml-2 h-4 w-4" />
						)}
					</NavLink>
				</motion.div>
			</div>

			{/* Tagline */}
			<Tagline />
		</div>
	);
};

export default About;
