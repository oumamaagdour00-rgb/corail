
import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Tagline from '../components/Tagline';
import { useLanguage } from '../contexts/LanguageContext';
import { BRAND_DETAILS } from '../constants';

const Brands: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-16 min-h-screen bg-white">
      <SEO pageKey="brands" />
      {/* Header */}
      <div className="relative bg-corail-900 text-white py-24 mb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-luminosity"
          style={{ backgroundImage: "url('/corail-siege.jpeg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-corail-900/70 to-corail-800/95 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 bg-mesh pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">{t.brandsPage.title}</h1>
          <p className="text-xl text-teal-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            {t.brandsPage.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-corail-200 border border-corail-200 rounded-lg overflow-hidden shadow-sm">
          {BRAND_DETAILS.map((brand) => {
            return (
              <a
                key={brand.id}
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 md:p-12 flex flex-col items-center justify-center hover:bg-white hover:z-10 hover:shadow-2xl transition-all duration-700 group h-48 md:h-64 relative"
              >
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.id}
                    className="max-h-16 md:max-h-24 max-w-full object-contain transition-all duration-700 transform group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-xl font-display font-bold text-corail-200 group-hover:text-corail-600 transition-colors">{brand.id}</span>
                  </div>
                )}

                {/* Brand Name Tooltip-ish */}
                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-xs font-bold text-corail-300 uppercase tracking-widest pointer-events-none">
                  {brand.id}
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-24 mb-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-corail-900 mb-4">{t.brandsPage.ctaTitle}</h2>
            <p className="text-corail-400 mb-8">{t.brandsPage.ctaSubtitle}</p>
            <NavLink
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-corail-900 text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-corail-800 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t.brandsPage.ctaButton}
              {language === 'ar' ? (
                <ArrowLeft className="mr-2 h-4 w-4" />
              ) : (
                <ArrowRight className="ml-2 h-4 w-4" />
              )}
            </NavLink>
          </div>
        </div>
      </div>
      <Tagline />
    </div>
  );
};

export default Brands;
