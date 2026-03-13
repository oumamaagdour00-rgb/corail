import React from 'react';
import SEO from '../components/SEO';
import Tagline from '../components/Tagline';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-16">
        {/* Contact Info Card - First */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-corail-100/50 shadow-sm hover:shadow-2xl transition-all duration-700"
        >
          <h3 className="text-2xl font-bold text-corail-900 mb-6">{t.footer.contact}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/60 transition-colors duration-500"
            >
              <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors duration-500 flex-shrink-0">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-corail-900 mb-1">{t.contact.headquarters}</h4>
                <p className="text-corail-400 text-sm leading-relaxed group-hover:text-corail-500 transition-colors duration-300">
                  Parc Industriel Sapino, Nouaceur<br />
                  Casablanca 20100, Maroc
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/60 transition-colors duration-500"
            >
              <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors duration-500 flex-shrink-0">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-corail-900 mb-1">{t.contact.phone}</h4>
                <p className="text-corail-400 text-sm group-hover:text-corail-500 transition-colors duration-300" dir="ltr">+212 (0)5 22 53 84 41</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/60 transition-colors duration-500"
            >
              <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors duration-500 flex-shrink-0">
                <Mail className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-corail-900 mb-1">{t.contact.email}</h4>
                <a href="mailto:contact@coraillocean.com" className="text-teal-600 text-sm font-semibold hover:underline">
                  contact@coraillocean.com
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/60 transition-colors duration-500"
            >
              <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors duration-500 flex-shrink-0">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-corail-900 mb-1">{t.contact.hours}</h4>
                {t.contact.hoursText.map((hour: string, idx: number) => (
                  <p key={idx} className="text-corail-400 text-sm group-hover:text-corail-500 transition-colors duration-300">{hour}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form - Second */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-corail-100/50 shadow-sm hover:shadow-2xl transition-all duration-700"
        >
          <h3 className="text-2xl font-bold text-corail-900 mb-8">{t.contact.formTitle}</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formName}</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" placeholder={t.contact.formName} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formEmail}</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" placeholder={t.contact.formEmail} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formSubject}</label>
              <select id="subject" className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50">
                {t.contact.subjects.map((subject: string) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-corail-700 mb-2">{t.contact.formMessage}</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none bg-white/50" placeholder="..."></textarea>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              type="button" 
              className="w-full bg-corail-900 hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-2"
            >
              <span>{t.contact.formButton}</span>
              <Send size={18} />
            </motion.button>
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
      <Tagline className="mt-24" />
    </div>
  );
};

export default Contact;
