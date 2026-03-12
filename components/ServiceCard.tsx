import React from 'react';
import { Truck, Warehouse, Handshake, Megaphone, ArrowRight, ArrowLeft } from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
}

const icons = {
  Truck,
  Warehouse,
  Handshake,
  Megaphone
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = icons[service.iconName];
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border-t-4 border-transparent hover:border-teal-500 group h-full flex flex-col">
      <div className="mb-6 inline-block p-4 bg-corail-50 rounded-2xl group-hover:bg-teal-50 transition-colors">
        <Icon className="h-8 w-8 text-corail-600 group-hover:text-teal-600 transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-corail-900 mb-3 group-hover:text-corail-700 transition-colors">
        {service.title}
      </h3>
      <p className="text-corail-400 mb-6 flex-grow leading-relaxed">
        {service.description}
      </p>
      <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
        <span>Learn more</span>
        {language === 'ar' ? (
          <ArrowLeft className="h-4 w-4 mr-2" />
        ) : (
          <ArrowRight className="h-4 w-4 ml-2" />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;