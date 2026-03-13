import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TaglineProps {
    className?: string;
}

const Tagline: React.FC<TaglineProps> = ({ className = '' }) => {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const phrase = language === 'fr'
        ? "Parce que la distribution n'est pas une simple fonction, mais un levier de performance durable."
        : language === 'ar'
        ? "لأن التوزيع ليس مجرد عملية تشغيلية، بل هو رافعة أساسية لتحقيق أداء مستدام."
        : "Because distribution is not just a mere operation, but a lever for sustainable performance.";

    return (
        <section
            ref={sectionRef}
            className={`relative w-full py-16 md:py-24 overflow-hidden ${className}`}
        >
            <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-out ${isVisible ? 'scale-100 blur-0' : 'scale-110 blur-sm'}`}
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop")' }}
            >
            </div>

            <div className="absolute inset-0 bg-corail-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-corail-600/85 to-corail-500/85"></div>

            <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center transition-all duration-[1500ms] delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-relaxed md:leading-snug tracking-wide">
                    {phrase}
                </h2>
            </div>
        </section>
    );
};

export default Tagline;
