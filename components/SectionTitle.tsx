import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'left', light = false }) => {
  // Detect if text contains Arabic characters
  const isArabic = /[\u0600-\u06FF]/.test(title);
  
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-display font-black my-10 ${light ? 'text-white' : isArabic ? 'text-corail-900' : 'bg-clip-text text-transparent bg-gradient-to-r from-corail-900 via-corail-800 to-corail-600'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-teal-100' : 'text-corail-400'} leading-relaxed`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1.5 w-24 bg-gradient-to-r from-corail-500 to-teal-400 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;