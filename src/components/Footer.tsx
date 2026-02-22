import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Facebook, Instagram, Phone, MapPin, Mail, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Sprout className="w-6 h-6" />
              <span className="text-2xl font-serif font-bold tracking-wide">LUMBRI MANAN</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              {t(
                'Pusat keunggulan pertanian organik dan kesehatan alami. Menerapkan visi Prof. Ni Luh Kartini untuk masa depan yang berkelanjutan.',
                'Center of excellence for organic farming and natural health. Implementing Prof. Ni Luh Kartini\'s vision for a sustainable future.'
              )}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              {t('Navigasi', 'Navigation')}
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/prof-kartini" className="hover:text-emerald-400 transition">{t('Tentang Prof. Kartini', 'About Prof. Kartini')}</Link></li>
              <li><Link to="/riset" className="hover:text-emerald-400 transition">{t('Riset Ilmiah', 'Scientific Research')}</Link></li>
              <li><Link to="/ekosistem" className="hover:text-emerald-400 transition">{t('Model Pertanian', 'Farming Model')}</Link></li>
              <li><Link to="/produk" className="hover:text-emerald-400 transition">{t('Produk', 'Products')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              {t('Hubungi Kami', 'Contact Us')}
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Bali, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>research@lumbrimanan.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-emerald-900 transition">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-stone-800 p-3 rounded-full hover:bg-emerald-900 transition">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Lumbri Manan Center of Excellence. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;