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
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : isArabic ? 'text-right' : 'text-left'}`}>
      <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-display font-bold my-4 break-words ${light ? 'text-white' : 'text-corail-900'}`} style={{ wordWrap: 'break-word', overflowWrap: 'break-word', color: light ? undefined : '#162032' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl break-words ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-teal-100' : 'text-corail-400'} leading-relaxed`}>
          {subtitle}
        </p>
      )}
      <div 
        className={`mt-6 h-1.5 w-24 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}
        style={{ background: 'linear-gradient(to right,#162032 ,#365B78)' }}
      ></div>
    </div>
  );
};

export default SectionTitle;