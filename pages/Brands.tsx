
import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Tagline from '../components/Tagline';
import { useLanguage } from '../contexts/LanguageContext';
import { BRAND_DETAILS } from '../constants';
import YouTubeSlider from '../components/YouTubeSlider';
import PageBanner from '../components/PageBanner';

const Brands: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-16 min-h-screen bg-white">
      <SEO pageKey="brands" />
      {/* Header */}
      <PageBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Title before grid */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl md:text-2xl xl:text-[30px] text-corail-900 font-display font-bold leading-relaxed">
            {t.brandsPage.subtitle}
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

        {/* CTA Button */}
        <div className="mt-16 mb-12 text-center">
          <NavLink
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-corail-900 text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-corail-800 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t.nav.partnerCta}
            {language === 'ar' ? (
              <ArrowLeft className="mr-2 h-4 w-4" />
            ) : (
              <ArrowRight className="ml-2 h-4 w-4" />
            )}
          </NavLink>
        </div>

      </div>
      <Tagline />
    </div>
  );
};

export default Brands;
