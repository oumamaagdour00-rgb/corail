import React from "react";
import SEO from "../components/SEO";
import {
	Truck,
	Warehouse,
	Handshake,
	Megaphone,
	CheckCircle2,
	ArrowRight,
	ArrowLeft,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import BrandCarousel from "../components/BrandCarousel";

import img1 from "../public/assets/top-view-shopping-cart-arrangement.jpg";
import img2 from "../public/assets/person-setting-up-online-store-uploading-products-laptop-compressed.jpg";
import img3 from "../public/assets/chess-designed-art-golden-silver-light.jpg";
import img4 from "../public/corail-stock.png";
import img5 from "../public/assets/distant-shot-port-shipment-nighttime-compressed.jpg";
import bgImg from "../public/corail-siege.jpeg";

const Services: React.FC = () => {
	const { t, language } = useLanguage();

	const serviceImages: Record<string, string> = {
		"1": img1,
		"2": img2,
		"3": img3,
		"4": img4,
		"5": img5,
	};

	const icons: Record<string, React.ElementType> = {
		Truck,
		Warehouse,
		Handshake,
		Megaphone,
		CheckCircle2,
	};

	return (
		<div className="flex flex-col w-full min-h-screen bg-white font-sans">
			<SEO pageKey="services" />
			{/* Header */}
			<div className="relative bg-corail-900 text-white py-24 mb-16 overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-luminosity"
					style={{ backgroundImage: `url(${bgImg})` }}
				></div>
				<div className="absolute inset-0 bg-gradient-to-b from-corail-900/70 to-corail-800/95 pointer-events-none"></div>
				<div className="absolute inset-0 opacity-20 bg-mesh pointer-events-none"></div>
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
					<h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
						{t.services.title}
					</h1>
					{t.services.subtitle && (
						<p className="text-xl text-teal-100/90 max-w-2xl mx-auto font-light leading-relaxed">
							{t.services.subtitle}
						</p>
					)}
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Service Pillars */}
				<div className="py-24 space-y-32">
					{t.data.services.map((service, index) => {
						const Icon = icons[service.iconName] || Truck;
						return (
							<div
								key={service.id}
								className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center group`}
							>
								{/* Image Visual */}
								<div className="w-full lg:w-1/2">
									<div className="relative group/image">
										<div
											className={`absolute -inset-4 bg-gradient-to-r ${index % 2 === 0 ? "from-corail-100 to-transparent" : "from-teal-100 to-transparent"} rounded-3xl opacity-30 transform rotate-2 group-hover:rotate-4 transition-transform duration-[1500ms] ease-out`}
										></div>
										<div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-[1500ms]">
											<img
												src={serviceImages[service.id]}
												alt={service.title}
												className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-[2000ms] ease-out"
											/>
											<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 group-hover/image:-translate-y-1 transition-all duration-700">
												<Icon className="h-8 w-8 text-corail-600" />
											</div>
										</div>
									</div>
								</div>

								{/* Text Content */}
								<div className="w-full lg:w-1/2">
									<h3 className="text-4xl font-display font-bold text-corail-900 mb-6">
										{service.title}
									</h3>
									<div className="space-y-6">
										{service.blocks.map((block, i) => {
											if (block.type === "text") {
												const paragraphs = Array.isArray(block.content)
													? block.content
													: [block.content];
												return paragraphs.map((p, j) => (
													<p
														key={`${i}-${j}`}
														className="text-xl text-corail-400 leading-relaxed font-light"
													>
														{p}
													</p>
												));
											}
											if (block.type === "list") {
												const items = Array.isArray(block.content)
													? block.content
													: [block.content];
												return (
													<div
														key={i}
														className="group/list bg-corail-50/50 hover:bg-white rounded-xl p-6 border border-corail-100 hover:border-corail-200 shadow-sm hover:shadow-md transition-all duration-700"
													>
														{/* Mobile Single Column */}
														<ul className="md:hidden space-y-3">
															{items.map((item, k) => (
																<li
																	key={k}
																	className="flex items-start space-x-2 text-sm text-corail-500"
																>
																	<CheckCircle2
																		size={16}
																		className="text-teal-500 flex-shrink-0 mt-0.5"
																	/>
																	<span>{item}</span>
																</li>
															))}
														</ul>
														{/* Desktop Two Independent Columns */}
														<div className="hidden md:grid md:grid-cols-2 gap-6">
															<ul className="space-y-3">
																{items
																	.filter((_, idx) => idx % 2 === 0)
																	.map((item, k) => (
																		<li
																			key={k}
																			className="flex items-start space-x-2 text-sm text-corail-500"
																		>
																			<CheckCircle2
																				size={16}
																				className="text-teal-500 flex-shrink-0 mt-0.5"
																			/>
																			<span>{item}</span>
																		</li>
																	))}
															</ul>
															<ul className="space-y-3">
																{items
																	.filter((_, idx) => idx % 2 === 1)
																	.map((item, k) => (
																		<li
																			key={k}
																			className="flex items-start space-x-2 text-sm text-corail-500"
																		>
																			<CheckCircle2
																				size={16}
																				className="text-teal-500 flex-shrink-0 mt-0.5"
																			/>
																			<span>{item}</span>
																		</li>
																	))}
															</ul>
														</div>
													</div>
												);
											}
											if (block.type === "emphasis") {
												const content = Array.isArray(block.content)
													? block.content
													: [block.content];
												return (
													<div
														key={i}
														className="border-l-4 border-corail-500 pl-4 py-2 bg-corail-50/30 rounded-r-lg"
													>
														{content.map((p, l) => (
															<p
																key={l}
																className="text-lg text-corail-900 font-bold italic"
															>
																{p}
															</p>
														))}
													</div>
												);
											}
											return null;
										})}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* CTA to Brands */}
				<div className="text-center py-12">
					<NavLink
						to="/brands"
						className="inline-flex items-center px-8 py-4 bg-corail-900 text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-corail-800 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
					>
						{t.services.brandsButton}
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

export default Services;
