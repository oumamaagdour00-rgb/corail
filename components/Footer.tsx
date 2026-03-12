import React from "react";
import { NavLink } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logoUrl from "../public/favicon-not-ocean.png";

const Footer: React.FC = () => {
	const { t } = useLanguage();

	return (
		<footer className="bg-white border-t border-corail-100 text-corail-400">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
					{/* Brand Logo Placeholder */}
					<div className="col-span-1">
						<div className="mb-6 flex items-center space-x-4 group cursor-default">
							<img src={logoUrl} alt="Corail L'Océan" className="h-14 w-auto" />
							<div className="flex flex-col">
								<span className="text-2xl font-display font-black text-corail-900 uppercase tracking-tight leading-none">
									Corail L'Océan
								</span>
								<span className="text-[11px] font-bold text-corail-400 uppercase tracking-[0.1em] mt-1.5">
									Performance-Driven Distribution
								</span>
							</div>
						</div>
						<p className="text-sm text-corail-300 leading-relaxed mb-6">
							{t.footer.description}
						</p>
						<div className="flex space-x-4">
							<div className="w-10 h-10 bg-white border-2 border-corail-900 flex items-center justify-center text-corail-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)]">
								<Linkedin size={20} strokeWidth={2.5} />
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-xs font-bold text-corail-900 uppercase tracking-widest mb-6 border-b-2 border-corail-200 w-fit pb-1">
							{t.footer.navigation}
						</h3>
						<ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
							<li>
								<NavLink
									to="/"
									className="text-corail-400 hover:text-corail-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
								>
									<span>{t.nav.home}</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className="text-corail-400 hover:text-corail-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
								>
									<span>{t.nav.about}</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/services"
									className="text-corail-400 hover:text-corail-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
								>
									<span>{t.nav.services}</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/brands"
									className="text-corail-400 hover:text-corail-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
								>
									<span>{t.nav.brands}</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className="text-corail-400 hover:text-corail-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center space-x-2"
								>
									<span>{t.nav.contact}</span>
								</NavLink>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-xs font-bold text-corail-900 uppercase tracking-widest mb-6 border-b-2 border-corail-200 w-fit pb-1">
							{t.footer.contact}
						</h3>
						<ul className="space-y-5 text-sm">
							<li className="flex items-start space-x-3 text-corail-400">
								<MapPin
									size={20}
									className="text-teal-500 mt-0.5 flex-shrink-0"
									strokeWidth={1.5}
								/>
								<span className="leading-relaxed">
									Parc Industriel Sapino, Nouaceur
									<br />
									Casablanca 20100, Maroc
								</span>
							</li>
							<li className="flex items-center space-x-3 text-corail-400">
								<Mail
									size={20}
									className="text-teal-500 flex-shrink-0"
									strokeWidth={1.5}
								/>
								<a
									href="mailto:contact@coraillocean.com"
									className="hover:text-corail-600 transition-colors"
								>
									contact@coraillocean.com
								</a>
							</li>
							<li className="flex items-center space-x-3 text-corail-400">
								<Phone
									size={20}
									className="text-teal-500 flex-shrink-0"
									strokeWidth={1.5}
								/>
								<span className="hover:text-corail-600 transition-colors cursor-pointer">
									+212 (0)5 22 53 84 41
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-16 pt-8 border-t border-corail-200 flex flex-col items-center justify-center text-[10px] font-bold text-corail-300 uppercase tracking-widest">
					<p>
						© {new Date().getFullYear()} {t.footer.rights}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
