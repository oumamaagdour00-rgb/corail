import React, { useState } from 'react';
import SEO from '../components/SEO';
import TaglineCFC from '../components/TaglineCFC';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from "motion/react";

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const cardStyle = (idx: number) => ({
    backgroundColor: hovered === idx ? '#ffffff' : '#f7fbfc',
    color: hovered === idx ? '#0f172a' : '#1e3a5f',
  });
  const cardClass = "rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-transparent";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation côté client
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Envoi vers le fichier PHP
      const response = await fetch('/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          firstName: formData.firstName,
          email: formData.email,
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          firstName: '',
          email: '', 
          subject: '', 
          phone: '',
          message: '' 
        });
        
        // Réinitialiser le statut après 5 secondes
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Erreur serveur:', result.message || 'Erreur inconnue');
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-white">
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
            className={cardClass} style={cardStyle(0)}
            onMouseEnter={() => setHovered(0)} onMouseLeave={() => setHovered(null)}
          >
            <MapPin className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.headquarters}</h4>
            <p className="leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
              {t.footer.address}
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={cardClass} style={cardStyle(1)}
            onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(null)}
          >
            <Phone className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.phone}</h4>
            <p dir="ltr" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>+212 (0)5 22 53 89 60</p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className={cardClass} style={cardStyle(2)}
            onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(null)}
          >
            <Mail className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.email}</h4>
            <a href="mailto:contact@coraillocean.com" className="hover:underline transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>
              contact@coraillocean.com
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className={cardClass} style={cardStyle(3)}
            onMouseEnter={() => setHovered(3)} onMouseLeave={() => setHovered(null)}
          >
            <Clock className="h-10 w-10 mb-4" />
            <h4 className="text-base font-bold mb-3">{t.contact.hours}</h4>
            {t.contact.hoursText.map((hour: string, idx: number) => (
              <p key={idx} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '26px', color: '#65758C' }}>{hour}</p>
            ))}
          </motion.div>
        </div>

        {/* Contact Form - Second */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="rounded-3xl p-8 lg:p-10 border border-corail-100/50 shadow-sm hover:shadow-2xl transition-all duration-700"
          style={{ backgroundColor: '#ffffff' }}
        >
          <h3 className="text-lg sm:text-xl xl:text-2xl font-bold mb-8 break-words" style={{ color: '#162032' }}>{t.contact.formTitle}</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" 
                  placeholder={t.contact.formFirstName} 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" 
                  placeholder={t.contact.formName} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" 
                  placeholder={t.contact.formEmail} 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone"
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50" 
                  placeholder={t.contact.formPhone}
                />
              </div>
            </div>

            <div>
              <select 
                id="subject" 
                name="subject"
                value={formData.subject} 
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white/50 appearance-none bg-no-repeat"
                style={{ 
                  color: formData.subject === '' ? '#9ca3af' : '#162023', 
                  fontWeight: formData.subject === '' ? 300 : 600,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23162023' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundPosition: language === 'ar' ? 'left 0.75rem center' : 'right 0.75rem center',
                  backgroundSize: '1.5rem',
                  paddingRight: language === 'ar' ? '1rem' : '2.5rem',
                  paddingLeft: language === 'ar' ? '2.5rem' : '1rem'
                }}
              >
                <option value="" disabled style={{ color: '#9ca3af', fontWeight: 300 }}>
                  {t.contact.formSubject}
                </option>
                {t.contact.subjects.map((subject: string) => (
                  <option key={subject} value={subject} className="font-semibold" style={{ color: '#162023' }}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <textarea 
                id="message" 
                name="message"
                value={formData.message} 
                onChange={handleChange} 
                required
                rows={5} 
                className="w-full px-4 py-3 rounded-xl border border-corail-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none bg-white/50" 
                placeholder={t.contact.formMessage}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                ✓ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                ✗ Échec de l'envoi. Veuillez réessayer ou nous contacter directement à contact@coraillocean.com
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-corail-900 hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <span>{isSubmitting ? 'Envoi en cours...' : t.contact.formButton}</span>
              <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8!2d-7.5483986!3d33.406499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda631347f6f9f5b%3A0x54a671e826cfd9e6!2sCorail%20L'Oc%C3%A9an%2C%20Parc%20Industriel%20Sapino%2C%2057%2C%20Nouaceur%2020100!5e0!3m2!1sfr!2sma!4v1234567890!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <TaglineCFC className="mt-8" />
    </div>
  );
};

export default Contact;

