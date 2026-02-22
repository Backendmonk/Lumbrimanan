import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 fade-in bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-emerald-900 mb-12">{t('Hubungi Kami', 'Contact Us')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">{t('Informasi Kontak', 'Contact Information')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-800">Alamat</h4>
                  <p className="text-stone-600">Banjar Jelijih Pondok, Megati, Slemadeg Timur , Tabanan, Bali, Indonesia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-800">Telepon / WhatsApp</h4>
                  <p className="text-stone-600">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-800">Email</h4>
                  <p className="text-stone-600">info@lumbrimanan.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-stone-200 rounded-xl overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610.2856887414036!2d115.00185459434215!3d-8.392515822735003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22963677b2f49%3A0x102d1b478e081399!2sBalai%20Banjar%20Ds%20Jelijih!5e1!3m2!1sid!2sid!4v1771313352348!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-white p-12 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center h-full border border-stone-100">
            <div className="bg-green-100 p-6 rounded-full mb-6 animate-pulse">
               <MessageCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">{t('Chat Langsung', 'Chat Directly')}</h2>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              {t(
                'Punya pertanyaan spesifik tentang produk atau ingin konsultasi gratis? Tim kami siap membantu Anda melalui WhatsApp untuk respon yang lebih cepat.', 
                'Have specific questions about the product or want a free consultation? Our team is ready to help you via WhatsApp for a faster response.'
              )}
            </p>
            
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Lumbri%20Manan,%20saya%20ingin%20bertanya%20tentang%20produk."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white font-bold py-5 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 filter brightness-0 invert" alt="WhatsApp" />
              {t('Chat WhatsApp Sekarang', 'Chat WhatsApp Now')}
            </a>
            
            <p className="mt-6 text-sm text-stone-400">
              {t('Online: Senin - Sabtu, 08:00 - 17:00 WITA', 'Online: Monday - Saturday, 08:00 - 17:00 WITA')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;