import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BRAND_DETAILS } from '../constants';

const BrandCarousel: React.FC = () => {
    const { t } = useLanguage();
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="py-24 bg-corail-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">{t.home.brandsTitle}</h2>
                <div className="h-1 w-24 bg-corail-600 mx-auto rounded-full"></div>
            </div>

            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-corail-900 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-corail-900 to-transparent z-10"></div>

            <div 
                className="relative flex overflow-x-hidden group/marquee no-scrollbar py-12" 
                dir="ltr"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div 
                    className="animate-marquee whitespace-nowrap flex space-x-8 items-center pl-4 bg-[length:24px_24px]"
                    style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                >
                    {[...BRAND_DETAILS, ...BRAND_DETAILS, ...BRAND_DETAILS].map((brand, i) => (
                        <a
                            key={`${brand.id}-${i}`}
                            href={brand.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-72 h-44 bg-white rounded-2xl shadow-xl flex-shrink-0 flex items-center justify-center p-8 hover:bg-corail-50 hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer border border-transparent hover:border-corail-100"
                        >
                            {brand.logoUrl ? (
                                <img src={brand.logoUrl} alt={brand.id} className="max-h-full max-w-full object-contain transition-all duration-700 hover:scale-105" />
                            ) : (
                                <span className="text-2xl font-display font-black text-corail-300 hover:text-corail-700 uppercase tracking-tighter transition-colors duration-500">
                                    {brand.id}
                                </span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandCarousel;
