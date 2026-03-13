import React, { useState, useEffect, useRef } from 'react';
import { DollarSign, Package, MapPin, Users, Warehouse, Truck, BarChart3, Award, Clock } from 'lucide-react';
import { Stat } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface StatCardProps {
  stat: Stat;
  variant?: 'overview' | 'figure';
}

const icons: Record<string, React.ElementType> = {
  DollarSign,
  Package,
  MapPin,
  Users,
  Warehouse,
  Truck,
  BarChart3,
  Award,
  Clock
};

const StatCard: React.FC<StatCardProps> = ({ stat, variant = 'overview' }) => {
  const Icon = stat.iconName ? (icons[stat.iconName] || Package) : BarChart3;
  const [imgError, setImgError] = useState(false);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Extract numeric value from stat.value (e.g., "5+ 000" -> 5000, "15M MAD" -> 15)
  const extractNumber = (value: string): number => {
    // Remove spaces and extract number
    const cleanValue = value.replace(/\s+/g, '');
    const match = cleanValue.match(/[\d,]+/);
    if (match) {
      return parseInt(match[0].replace(/,/g, ''), 10);
    }
    return 0;
  };

  const targetNumber = extractNumber(stat.value);
  // Extract prefix (like +) and suffix (like M MAD)
  const cleanValue = stat.value.replace(/\s+/g, '');
  const numberMatch = cleanValue.match(/[\d,]+/);
  const numberStr = numberMatch ? numberMatch[0] : '';
  const beforeNumber = cleanValue.substring(0, cleanValue.indexOf(numberStr));
  const afterNumber = cleanValue.substring(cleanValue.indexOf(numberStr) + numberStr.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2500; // 2.5 seconds for smoother animation
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    const increment = targetNumber / totalFrames;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current += increment;
      
      if (frame >= totalFrames) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, frameRate);
  };

  if (variant === 'figure') {
    return (
      <div ref={cardRef} className="relative flex flex-col items-center text-center h-full bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(54,91,120,0.05)] hover:shadow-[0_20px_40px_rgba(54,91,120,0.1)] hover:-translate-y-2 transition-all duration-[1000ms] border border-corail-50 hover:border-corail-100 group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-corail-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>
        {/* Brand Logo or Icon Header */}
        <div className="h-16 w-full flex items-center justify-center mb-6">
          {stat.logoUrl && !imgError ? (
            <img
              src={stat.logoUrl}
              alt={stat.label}
              className="h-full w-auto object-contain transition-all duration-700"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-16 h-16 bg-corail-50 rounded-full flex items-center justify-center group-hover:bg-corail-100 transition-colors duration-700 shadow-inner">
              <Icon size={32} className="text-corail-600 group-hover:scale-110 transition-transform duration-700" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Value */}
        <div className="mb-3 relative">
          <h3 className="text-4xl md:text-5xl font-display font-black text-corail-600 tracking-tight leading-none group-hover:scale-105 group-hover:text-corail-700 transition-all duration-700">
            {beforeNumber}{hasAnimated ? count.toLocaleString() : '0'}{afterNumber ? ` ${afterNumber}` : ''}
          </h3>
        </div>

        {/* Label */}
        <p className="text-sm font-bold text-corail-900 uppercase tracking-widest mb-4">
          {stat.label}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-corail-100 rounded-full mb-4 group-hover:bg-corail-300 group-hover:w-20 transition-all duration-700"></div>

        {/* Description */}
        <p className="text-sm text-corail-300 leading-relaxed font-medium">
          {stat.description}
        </p>
      </div>
    );
  }

  // Original Overview Style
  return (
    <div className="flex flex-col items-center text-center p-6 group">
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-corail-50 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
        {Icon && <Icon className="h-12 w-12 text-corail-600 relative z-10 group-hover:text-corail-500 transition-colors duration-300" strokeWidth={1} />}
      </div>
      <h3 className="text-3xl font-display font-black text-corail-900 mb-2">
        {stat.value}
      </h3>
      <p className="text-base font-bold text-corail-800 mb-1">{stat.label}</p>
      {stat.subLabel && (
        <p className="text-xs text-corail-400 font-bold uppercase tracking-wider">{stat.subLabel}</p>
      )}
    </div>
  );
};

export default StatCard;
