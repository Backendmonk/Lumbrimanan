import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Settings, Shield, Droplets, Sprout } from 'lucide-react';

const Farming = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 fade-in bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-900 font-bold tracking-widest uppercase text-xs mb-3 block">{t('Quality Assurance', 'Quality Assurance')}</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
            {t('Sistem Budidaya Terkontrol', 'Controlled Cultivation System')}
          </h1>
          <p className="text-lg text-stone-600 font-light">
            {t(
              'Untuk menghasilkan suplemen berkualitas farmasi, kami menerapkan standar budidaya organik yang ketat untuk menjamin kemurnian setiap kapsul.', 
              'To produce pharmaceutical-grade supplements, we apply strict organic cultivation standards to ensure the purity of every capsule.'
            )}
          </p>
        </div>

        {/* The Process Flow - Focused on Quality Control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
           <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
             <div className="bg-stone-50 w-12 h-12 flex items-center justify-center rounded-full mb-6">
               <Sprout className="w-6 h-6 text-emerald-900" />
             </div>
             <h3 className="font-bold text-stone-900 mb-3 font-serif text-lg">{t('Media Steril', 'Sterile Media')}</h3>
             <p className="text-sm text-stone-600 font-light">
               {t('Media tumbuh cacing dipersiapkan bebas dari kontaminan logam berat dan pestisida.', 'Worm growth media is prepared free from heavy metal contaminants and pesticides.')}
             </p>
           </div>

           <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
             <div className="bg-stone-50 w-12 h-12 flex items-center justify-center rounded-full mb-6">
               <Settings className="w-6 h-6 text-emerald-900" />
             </div>
             <h3 className="font-bold text-stone-900 mb-3 font-serif text-lg">{t('Parameter Terjaga', 'Maintained Parameters')}</h3>
             <p className="text-sm text-stone-600 font-light">
               {t('Suhu dan kelembaban dikontrol ketat untuk memaksimalkan produksi enzim lumbrokinase.', 'Temperature and humidity are strictly controlled to maximize lumbrokinase enzyme production.')}
             </p>
           </div>

           <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
             <div className="bg-stone-50 w-12 h-12 flex items-center justify-center rounded-full mb-6">
               <Droplets className="w-6 h-6 text-emerald-900" />
             </div>
             <h3 className="font-bold text-stone-900 mb-3 font-serif text-lg">{t('Ekstraksi Higienis', 'Hygienic Extraction')}</h3>
             <p className="text-sm text-stone-600 font-light">
               {t('Teknologi ekstraksi suhu rendah menjaga struktur protein dan asam amino tidak rusak.', 'Low-temperature extraction technology keeps protein structures and amino acids intact.')}
             </p>
           </div>

           <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
             <div className="bg-stone-50 w-12 h-12 flex items-center justify-center rounded-full mb-6">
               <Shield className="w-6 h-6 text-emerald-900" />
             </div>
             <h3 className="font-bold text-stone-900 mb-3 font-serif text-lg">{t('Uji Laboratorium', 'Lab Testing')}</h3>
             <p className="text-sm text-stone-600 font-light">
               {t('Setiap batch diuji untuk memastikan keamanan mikrobiologi dan kandungan nutrisi.', 'Every batch is tested to ensure microbiological safety and nutritional content.')}
             </p>
           </div>
        </div>

        {/* Visuals - Clinical/Clean Look */}
        <div className="rounded-2xl overflow-hidden bg-stone-900 text-white relative">
            <div className="absolute inset-0 opacity-40">
               <img src="https://picsum.photos/seed/clean-production/1200/600" alt="Production" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10 p-12 md:p-24 text-center">
                <h2 className="text-3xl font-serif font-bold mb-6">{t('Komitmen Keamanan Pangan', 'Food Safety Commitment')}</h2>
                <p className="max-w-2xl mx-auto text-stone-300 text-lg font-light mb-8">
                  {t(
                    'Kami memahami bahwa produk ini masuk ke dalam tubuh Anda. Oleh karena itu, tidak ada kompromi dalam standar kebersihan dan keamanan produksi.',
                    'We understand that this product enters your body. Therefore, there is no compromise on hygiene and production safety standards.'
                  )}
                </p>
                <div className="inline-block border border-white/30 px-6 py-2 rounded-full text-sm tracking-widest uppercase">
                  Premium Quality Grade
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Farming;