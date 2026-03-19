import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logoUrl from "../public/favicon-not-ocean.png";

const LANGUAGES = [
	{ code: "fr", flag: "https://flagcdn.com/w40/fr.png", label: "Français" },
	{ code: "en", flag: "https://flagcdn.com/w40/gb.png", label: "English" },
	{ code: "ar", flag: "https://flagcdn.com/w40/ma.png", label: "العربية" },
] as const;

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [langOpen, setLangOpen] = useState(false);
	const langRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const { language, setLanguage, t } = useLanguage();

	const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (langRef.current && !langRef.current.contains(e.target as Node)) {
				setLangOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const navLinks = [
		{ name: t.nav.home, path: "/" },
		{ name: t.nav.about, path: "/about" },
		{ name: t.nav.services, path: "/services" },
		{ name: t.nav.brands, path: "/brands" },
		{ name: t.nav.contact, path: "/contact" },
	];

	const getLinkClasses = (isActive: boolean) =>
		`text-[11px] lg:text-[12px] font-bold uppercase tracking-widest transition-all duration-300 relative group/link ${
			isActive ? "text-corail-600" : "text-corail-400 hover:text-corail-600"
		}`;

	return (
		<>
			<nav
				className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white shadow-md h-[70px]" : "bg-white h-[85px]"}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
					<div className="flex justify-between items-center h-full">
						{/* Logo Placeholder */}
						<NavLink to="/" className="flex items-center group space-x-3">
							<img
								src={logoUrl}
								alt="Corail L'Océan"
								className="h-10 w-auto group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="flex flex-col">
								<span className="text-lg font-display font-black text-corail-900 uppercase tracking-tight leading-none group-hover:text-corail-600 transition-colors duration-500">
									Corail L'Océan
								</span>
								<span className="text-[9px] font-bold text-corail-400 uppercase tracking-[0.1em] mt-0.5 group-hover:text-corail-500 transition-colors duration-500">
									Performance-Driven Distribution
								</span>
							</div>
						</NavLink>

						{/* Desktop Nav */}
						<div className="hidden lg:flex items-center space-x-8">
							{navLinks.map((link) => (
								<NavLink
									key={link.name}
									to={link.path}
									className={({ isActive }) => getLinkClasses(isActive)}
								>
									{link.name}
									<span
										className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-corail-500 transition-all duration-300 group-hover/link:w-full ${location.pathname === link.path ? "w-full" : ""}`}
									></span>
								</NavLink>
							))}

							<div className="h-4 w-px bg-corail-200 mx-2"></div>

							{/* Language Dropdown */}
							<div className="relative" ref={langRef}>
								<button
									onClick={() => setLangOpen(!langOpen)}
									className="flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-corail-50 transition-colors duration-200"
								>
									<img src={currentLang.flag} alt={currentLang.code} className="w-5 h-3.5 object-cover rounded-sm" />
									<span className="text-[10px] font-black text-corail-400 uppercase tracking-widest">{currentLang.code}</span>
									<ChevronDown className={`h-3 w-3 text-corail-300 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
								</button>
								{langOpen && (
									<div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-corail-100 overflow-hidden z-50 min-w-[140px]">
										{LANGUAGES.map(lang => (
											<button
												key={lang.code}
												onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
												className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${language === lang.code ? 'bg-corail-50 text-corail-700 font-bold' : 'text-corail-400 hover:bg-corail-50 hover:text-corail-600'}`}
											>
												<img src={lang.flag} alt={lang.code} className="w-5 h-3.5 object-cover rounded-sm" />
												<span className="font-medium">{lang.label}</span>
											</button>
										))}
									</div>
								)}
							</div>
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 text-corail-800 hover:text-corail-600 focus:outline-none transition-colors rounded-lg bg-corail-50"
							>
								{isOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>
			{/* Mobile Nav Overlay */}
			<div
				className={`lg:hidden fixed inset-0 ${isScrolled ? "top-[70px]" : "top-[85px]"} bg-white z-40 transition-all duration-500 ease-in-out transform ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
			>
				<div className="px-6 py-12 space-y-6">
					{navLinks.map((link) => (
						<NavLink
							key={link.name}
							to={link.path}
							className={({ isActive }) =>
								`block text-2xl font-display font-black uppercase tracking-tight ${
									isActive
										? "text-corail-600 translate-x-4"
										: "text-corail-300 hover:text-corail-800"
								} transition-all duration-300`
							}
						>
							{link.name}
						</NavLink>
					))}
					<div className="pt-8 border-t border-corail-100 flex items-center space-x-4">
						{LANGUAGES.map(lang => (
							<button
								key={lang.code}
								onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
								className={`flex items-center gap-2 text-sm font-bold tracking-widest cursor-pointer transition-colors ${language === lang.code ? "text-corail-600" : "text-corail-300"}`}
							>
								<img src={lang.flag} alt={lang.code} className="w-6 h-4 object-cover rounded-sm" />
								{lang.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
