
import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Tagline from '../components/Tagline';
import { useLanguage } from '../contexts/LanguageContext';
import { BRAND_DETAILS } from '../constants';
import YouTubeSlider from '../components/YouTubeSlider';

const Brands: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-16 min-h-screen bg-white">
      <SEO pageKey="brands" />
      {/* Header */}
      <div className="relative bg-corail-900 text-white py-48 mb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/corail-siege.jpeg')", backgroundPosition: 'center 60%' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-corail-900/80 via-corail-800/40 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-mesh pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title before grid */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl md:text-2xl xl:text-[30px] text-corail-900 font-display font-bold leading-relaxed">
            Distribution de portefeuilles de classe mondiale à travers le Maroc.
          </p>
        </div>

        {/* Minimal Grid - 2 rows x 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-corail-200 border border-corail-200 rounded-lg overflow-hidden shadow-sm">
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
              </a>
            );
          })}
        </div>

        {/* YouTube Video Slider */}
        <div className="mt-24">
          <YouTubeSlider />
        </div>

        {/* CTA Section */}
        <div className="mt-24 mb-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl xl:text-3xl font-display font-bold text-corail-900 mb-4">{t.brandsPage.ctaTitle}</h2>
            <p className="text-sm sm:text-base text-corail-400 mb-8 text-justify">{t.brandsPage.ctaSubtitle}</p>
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
