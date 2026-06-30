import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{/* Brand Logo Placeholder */}
					<div className="col-span-1 flex flex-col justify-between">
						<div className="mb-4 mt-10 flex items-center space-x-4 group cursor-default">
							<img src={logoUrl} alt="Corail L'Océan" className="h-14 w-auto" />
							<div className="flex flex-col">
								<span className="text-2xl font-display font-black uppercase tracking-tight leading-none" style={{ color: '#162032' }}>
									Corail L'Océan
								</span>
								<span className="text-[11px] font-bold text-corail-400 uppercase tracking-[0.1em] mt-1.5">
									Performance-Driven Distribution
								</span>
							</div>
						</div>
						<p className="leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
							{t.footer.description}
						</p>
					</div>

					{/* Contact */}
					<div className="md:justify-self-end">
						<h3 className="text-xs font-bold text-corail-900 uppercase tracking-widest mb-4 border-b-2 border-corail-200 w-fit pb-1">
							{t.footer.contact}
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start space-x-3">
								<MapPin
									size={20}
									className="text-teal-500 mt-0.5 flex-shrink-0"
									strokeWidth={1.5}
								/>
								<span className="leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
									{t.footer.address}
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<Mail
									size={20}
									className="text-teal-500 flex-shrink-0"
									strokeWidth={1.5}
								/>
								<a
									href="mailto:contact@coraillocean.com"
									className="hover:text-corail-600 transition-colors"
									style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}
								>
									contact@coraillocean.com
								</a>
							</li>
							<li className="flex items-center space-x-3">
								<Phone
									size={20}
									className="text-teal-500 flex-shrink-0"
									strokeWidth={1.5}
								/>
								<span className="hover:text-corail-600 transition-colors cursor-pointer" dir="ltr" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
									+212 (0)5 22 53 89 60

								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 pt-6 border-t border-corail-200 flex flex-col items-center justify-center text-[10px] font-bold text-corail-300 uppercase tracking-widest">
					<p>
						{t.footer.rights}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
