import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logoUrl from "../public/favicon-not-ocean.png";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const { language, setLanguage, t } = useLanguage();

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

							<div className="flex items-center space-x-3 ml-2">
								<button
									onClick={() => setLanguage("fr")}
									className={`text-[10px] font-black transition-all cursor-pointer ${language === "fr" ? "text-corail-600 scale-110" : "text-corail-300 hover:text-corail-500"}`}
								>
									FR
								</button>
								<span className="text-corail-200">|</span>
								<button
									onClick={() => setLanguage("en")}
									className={`text-[10px] font-black transition-all cursor-pointer ${language === "en" ? "text-corail-600 scale-110" : "text-corail-300 hover:text-corail-500"}`}
								>
									EN
								</button>
								<span className="text-corail-200">|</span>
								<button
									onClick={() => setLanguage("ar")}
									className={`text-[10px] font-black transition-all cursor-pointer ${language === "ar" ? "text-corail-600 scale-110" : "text-corail-300 hover:text-corail-500"}`}
								>
									AR
								</button>
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
					<div className="pt-8 border-t border-corail-100 flex items-center space-x-6">
						<button
							onClick={() => {
								setLanguage("fr");
								setIsOpen(false);
							}}
							className={`text-sm font-bold tracking-widest cursor-pointer ${language === "fr" ? "text-corail-600" : "text-corail-300"}`}
						>
							Français
						</button>
						<button
							onClick={() => {
								setLanguage("en");
								setIsOpen(false);
							}}
							className={`text-sm font-bold tracking-widest cursor-pointer ${language === "en" ? "text-corail-600" : "text-corail-300"}`}
						>
							English
						</button>
						<button
							onClick={() => {
								setLanguage("ar");
								setIsOpen(false);
							}}
							className={`text-sm font-bold tracking-widest cursor-pointer ${language === "ar" ? "text-corail-600" : "text-corail-300"}`}
						>
							العربية
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
