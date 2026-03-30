import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logoUrl from "../public/favicon-not-ocean.png";

const Footer: React.FC = () => {
	const { t } = useLanguage();

	const navLinks = [
		{ name: t.nav.home, path: "/" },
		{ name: t.nav.about, path: "/about" },
		{ name: t.nav.services, path: "/services" },
		{ name: t.nav.brands, path: "/brands" },
		{ name: t.nav.contact, path: "/contact" },
	];

	return (
		<footer className="bg-white border-t border-corail-100 text-corail-400">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
					{/* Brand Logo Placeholder */}
					<div className="col-span-1">
						<div className="mb-4 flex items-center space-x-4 group cursor-default">
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
						<p className="text-sm text-corail-300 leading-relaxed mb-4">
							{t.footer.description}
						</p>
						<div className="flex space-x-4">
							<div className="w-10 h-10 bg-corail-900 border-2 border-corail-900 flex items-center justify-center text-white shadow-[3px_3px_0px_0px_rgba(200,200,200,0.5)] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(200,200,200,0.5)]">
								<Linkedin size={20} strokeWidth={2.5} />
							</div>
						</div>
					</div>

					{/* Navigation */}
					<div className="md:justify-self-center">
						<h3 className="text-xs font-bold text-corail-900 uppercase tracking-widest mb-4 border-b-2 border-corail-200 w-fit pb-1">
							Navigation
						</h3>
						<ul className="space-y-3">
							{navLinks.map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className="text-xs font-bold text-corail-400 uppercase tracking-widest hover:text-corail-600 transition-colors duration-200"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div className="md:justify-self-end">
						<h3 className="text-xs font-bold text-corail-900 uppercase tracking-widest mb-4 border-b-2 border-corail-200 w-fit pb-1">
							{t.footer.contact}
						</h3>
						<ul className="space-y-3 text-sm">
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
								<span className="hover:text-corail-600 transition-colors cursor-pointer" dir="ltr">
									+212 (0)5 22 53 84 41
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-6 border-t border-corail-200 flex flex-col items-center justify-center text-[10px] font-bold text-corail-300 uppercase tracking-widest">
					<p>
						© {new Date().getFullYear()} {t.footer.rights}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
