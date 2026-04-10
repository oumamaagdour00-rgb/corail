import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import { NavLink } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import TaglineCFC from "../components/TaglineCFC";
import PageBanner from "../components/PageBanner";
import { motion } from "motion/react";

const About: React.FC = () => {
	const { t, language } = useLanguage();

	return (
		<div className="flex flex-col w-full">
			<SEO pageKey="about" />
			
			{/* Header Image Section */}
			<PageBanner />

		<div className="w-full bg-gray-50 mt-4 shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				{/* Company Profile */}
				<motion.div 
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<div className="prose prose-base">
						{t.about.profileText.map((paragraph: string, idx: number) => (
							<motion.p 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								className="mb-4 text-justify"
								style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}
							>
								{paragraph}
							</motion.p>
						))}
					</div>
				</motion.div>
			</div>
		</div>

		<div className="w-full pt-6 pb-8 bg-white">
			<div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-2 space-y-6">

				{/* Approach and Engagement - Two Columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Engagement */}
					<motion.div 
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="py-5 px-6 rounded-2xl bg-white"
					>
						<SectionTitle title={t.about.engagementTitle} alignment="left" />
						<div className="prose prose-base space-y-6">
							{t.about.engagementText.map((paragraph: string, idx: number) => (
								<motion.p 
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
									className="text-justify"
									style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}
								>
									{paragraph}
								</motion.p>
							))}
						</div>
					</motion.div>

					{/* Approach */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="py-5 px-6 rounded-2xl bg-white"
					>
						<SectionTitle title={t.about.approachTitle} alignment="left" />
						<div className="prose prose-base space-y-6">
							{t.about.approachText.map((paragraph: string, idx: number) => (
								<motion.p
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
									className="text-justify"
									style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}
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
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="text-center pt-2 pb-2"
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
		</div>

			{/* Tagline */}
			<TaglineCFC />
		</div>
	);
};

export default About;
