import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import { Menu, X, Globe, Sprout, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isIndo = lang === 'id';

  // Updated links with Balinese translations (Basa Alus/Sopan)
  const links = [
    { path: '/', labelId: 'Beranda', labelEn: 'Home', labelBan: 'Pewedan' },
    { path: '/produk', labelId: 'Katalog Produk', labelEn: 'Shop', labelBan: 'Pikolih' },
    { path: '/riset', labelId: 'Khasiat & Manfaat', labelEn: 'Benefits', labelBan: 'Guna & Paice' }, 
    { path: '/prof-kartini', labelId: 'Ahli Kami', labelEn: 'Our Expert', labelBan: 'Sang Wikan' }, 
    { path: '/ekosistem', labelId: 'Jaminan Mutu', labelEn: 'Quality', labelBan: 'Kualitas' },
    { path: '/Gallery', labelId: 'Galeri', labelEn: 'Gallery', labelBan: 'Galeri' }, 
    
    { path: '/kontak', labelId: 'Pemesanan', labelEn: 'Order', labelBan: 'Tumbas' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Label for language button
  const getLangLabel = () => {
    switch(lang) {
      case 'id': return 'IND';
      case 'en': return 'ENG';
      
      default: return 'IND';
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Minimalist & Academic */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-emerald-900 p-2 rounded-lg group-hover:bg-emerald-800 transition">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif f ont-bold text-stone-900 leading-none tracking-wide">LUMBRIMANAN</span>
              <span className="text-[10px] text-stone-500 tracking-[0.2em] uppercase mt-1">Premium Organic Supplement</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`uppercase transition-all duration-300 font-bold ${
                  isActive(link.path)
                    ? 'text-emerald-900 border-b-2 border-emerald-900 pb-1'
                    : 'text-stone-500 hover:text-emerald-900'
                } ${
                  isIndo 
                    ? 'text-[11px] xl:text-xs tracking-wider' // Smaller font for Indo to accommodate longer words
                    : 'text-xs xl:text-sm tracking-widest'    // Standard font for EN/BAN
                }`}
              >
                {t(link.labelId, link.labelEn, link.labelBan)}
              </Link>
            ))}
            
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-3 py-1 border border-stone-200 rounded-full hover:bg-stone-50 transition min-w-[80px] justify-center"
            >
              <Globe className="w-3 h-3 text-stone-600" />
              <span className="text-xs font-medium text-stone-600 uppercase">{getLangLabel()}</span>
            </button>
            
            <Link 
              to="/produk"
              className="bg-emerald-900 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-emerald-800 transition shadow-lg flex items-center gap-2 hover:-translate-y-0.5 transform duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              {t('Beli Sekarang', 'Buy Now', 'Tumbas Mangkin')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
             <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-2 py-1 bg-stone-50 rounded text-xs font-bold w-12 justify-center"
            >
              {getLangLabel()}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 absolute w-full left-0 shadow-xl h-screen">
          <div className="flex flex-col px-8 py-8 space-y-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest ${
                   isActive(link.path) ? 'text-emerald-900' : 'text-stone-500'
                }`}
              >
                {t(link.labelId, link.labelEn, link.labelBan)}
              </Link>
            ))}
             <Link 
              to="/produk"
              className="bg-emerald-900 text-white px-5 py-4 rounded-lg text-center font-bold tracking-widest uppercase hover:bg-emerald-800 transition flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingBag className="w-5 h-5" />
              {t('Beli Sekarang', 'Buy Now', 'Tumbas Mangkin')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;