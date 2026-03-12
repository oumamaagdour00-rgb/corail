import React from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import { NavLink } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import BrandCarousel from "../components/BrandCarousel";
import siegeImg from "../public/corail-siege.jpeg";

const About: React.FC = () => {
	const { t, language } = useLanguage();

	return (
		<div className="flex flex-col w-full pt-20">
			<SEO pageKey="about" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
				{/* Company Profile */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<div className="prose prose-lg text-corail-400">
							{t.about.profileText.map((paragraph, idx) => (
								<p key={idx} className="mb-4">
									{paragraph}
								</p>
							))}
						</div>
					</div>
					<div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-700">
						<img
							src={siegeImg}
							alt="Headquarters"
							className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
						/>
					</div>
				</div>

				{/* Approach */}
				<div className="max-w-4xl">
					<SectionTitle title={t.about.approachTitle} alignment="left" />
					<div className="prose prose-lg text-corail-400 space-y-6">
						{t.about.approachText.map((paragraph, idx) => (
							<p
								key={idx}
								className={
									idx === t.about.approachText.length - 1
										? "font-semibold text-corail-800"
										: ""
								}
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>

				{/* Engagement */}
				<div className="max-w-4xl">
					<SectionTitle title={t.about.engagementTitle} alignment="left" />
					<div className="prose prose-lg text-corail-400 space-y-6">
						{t.about.engagementText.map((paragraph, idx) => (
							<p key={idx}>{paragraph}</p>
						))}
					</div>
				</div>

				{/* CTA to Services */}
				<div className="text-center py-12">
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
				</div>
			</div>

			{/* Brands Carousel */}
			<BrandCarousel />
		</div>
	);
};

export default About;
