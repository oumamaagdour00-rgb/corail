import React from 'react';
import SEO from '../components/SEO';
import Tagline from '../components/Tagline';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "motion/react";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-corail-50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <SEO pageKey="contact" />
      <PageBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group bg-corail-900 hover:bg-white rounded-2xl p-8 flex flex-col items-center text-center text-white hover:text-black shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-corail-200"
          >
            <MapPin className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.headquarters}</h4>
            <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">
              Parc Industriel Sapino, Nouaceur<br />
              Casablanca 20100, Maroc
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group bg-corail-900 hover:bg-white rounded-2xl p-8 flex flex-col items-center text-center text-white hover:text-black shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-corail-200"
          >
            <Phone className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.phone}</h4>
            <p className="text-sm opacity-80 group-hover:opacity-100" dir="ltr">+212 (0)5 22 53 84 41</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="group bg-corail-900 hover:bg-white rounded-2xl p-8 flex flex-col items-center text-center text-white hover:text-black shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-corail-200"
          >
            <Mail className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.email}</h4>
            <a href="mailto:contact@coraillocean.com" className="text-sm opacity-80 group-hover:opacity-100 hover:underline transition-opacity">
              contact@coraillocean.com
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="group bg-corail-900 hover:bg-white rounded-2xl p-8 flex flex-col items-center text-center text-white hover:text-black shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-corail-200"
          >
            <Clock className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.hours}</h4>
            {t.contact.hoursText.map((hour: string, idx: number) => (
              <p key={idx} className="text-sm opacity-80 group-hover:opacity-100">{hour}</p>
            ))}
          </motion.div>
        </div>

        {/* Contact Form - Second */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-corail-100/50 shadow-sm hover:shadow-2xl transition-all duration-700"
        >
          <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-corail-900 mb-8">{t.contact.formTitle}</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formName}</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" placeholder={t.contact.formName} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formEmail}</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" placeholder={t.contact.formEmail} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formSubject}</label>
              <select id="subject" className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50">
                {t.contact.subjects.map((subject: string) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formMessage}</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none bg-white/50" placeholder="..."></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-corail-900 hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-2"
            >
              <span>{t.contact.formButton}</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden shadow-xl border border-corail-200 h-[450px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53188.32!2d-7.5833!3d33.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62f3e6f6f6f6f%3A0x0!2sSapino%20Nouaceur!5e0!3m2!1sfr!2sma!4v1234567890!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <Tagline className="mt-8" />
    </div>
  );
};

export default Contact;
