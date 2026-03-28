
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

        {/* Minimal Grid - 2 rows x 4 columns + 1 color column */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-corail-200 border border-corail-200 rounded-lg overflow-hidden shadow-sm">
          {/* Row 1 - brands 0-3 */}
          {BRAND_DETAILS.slice(0, 4).map((brand) => (
            <a
              key={brand.id}
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 md:p-12 flex flex-col items-center justify-center hover:z-10 hover:shadow-2xl transition-all duration-700 group h-48 md:h-64 relative"
            >
              {brand.logoUrl ? (
                <img src={brand.logoUrl} alt={brand.id} className="max-h-16 md:max-h-24 max-w-full object-contain transition-all duration-700 transform group-hover:scale-105" />
              ) : (
                <span className="text-xl font-display font-bold text-corail-200 group-hover:text-corail-600 transition-colors">{brand.id}</span>
              )}
            </a>
          ))}
          {/* Color column - row 1 */}
          <div className="hidden md:flex h-48 md:h-64 bg-corail-900 row-span-1 items-center justify-center p-4">
            <div className="flex flex-col items-center text-center">
              <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '49px' }}>Rejoignez</span>
              <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '30px', lineHeight: '49px' }}>nous</span>
            </div>
          </div>

          {/* Row 2 - brands 4-7 */}
          {BRAND_DETAILS.slice(4, 8).map((brand) => (
            <a
              key={brand.id}
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 md:p-12 flex flex-col items-center justify-center hover:z-10 hover:shadow-2xl transition-all duration-700 group h-48 md:h-64 relative"
            >
              {brand.logoUrl ? (
                <img src={brand.logoUrl} alt={brand.id} className="max-h-16 md:max-h-24 max-w-full object-contain transition-all duration-700 transform group-hover:scale-105" />
              ) : (
                <span className="text-xl font-display font-bold text-corail-200 group-hover:text-corail-600 transition-colors">{brand.id}</span>
              )}
            </a>
          ))}
          {/* Color column - row 2 */}
          <div className="hidden md:flex h-48 md:h-64 bg-corail-900 row-span-1 items-center justify-center p-4">
            <NavLink
              to="/contact"
              className="px-4 py-2 bg-white text-corail-900 rounded-lg text-center hover:bg-corail-50 transition-colors duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '15px' }}
            >
              Devenez partenaire
            </NavLink>
          </div>
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
