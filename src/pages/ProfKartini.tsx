import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const ProfKartini = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 fade-in bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header Section - Authority */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-emerald-800" />
           </div>
           <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">{t('Otoritas Ilmiah', 'Scientific Authority')}</h1>
           <p className="text-lg text-stone-600 font-light">
             {t(
               'Lumbrimanan dikembangkan di bawah supervisi langsung Prof. Dr. Ir. Ni Luh Kartini, M.S. berdasarkan riset akademik Universitas Udayana.',
               'Lumbrimanan was developed under the direct supervision of Prof. Dr. Ir. Ni Luh Kartini, M.S. based on academic research from Udayana University.'
             )}
           </p>
        </div>

        {/* Profile Content */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
           <div className="md:w-1/3 relative">
              <img 
                src="pages/src/ibuProfkartini.jpg" 
                alt="Prof. Kartini" 
                className="w-full h-full object-cover  hover:grayscale-0 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-emerald-900 p-4 text-white">
                 <h3 className="font-bold text-lg">Prof. Dr. Ir. Ni Luh Kartini, M.S.</h3>
                 <p className="text-emerald-200 text-xs uppercase tracking-widest">Guru Besar Pertanian UNUD</p>
              </div>
           </div>
           
           <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl font-serif text-stone-900 mb-6">{t('Dedikasi untuk Pertanian Organik & Kesehatan', 'Dedication to Organic Agriculture & Health')}</h2>
              
              <div className="prose prose-stone text-stone-600 leading-relaxed mb-8">
                <p>
                  {t(
                    'Prof. Kartini bukan sekadar akademisi, melainkan inovator yang turun langsung ke lapangan. Beliau menemukan korelasi kuat antara kesehatan tanah (soil health) dan kualitas nutrisi yang dihasilkan tanaman.',
                    'Prof. Kartini is not just an academic, but an innovator who goes directly to the field. She found a strong correlation between soil health and the nutritional quality produced by plants.'
                  )}
                </p>
                <p>
                  {t(
                    'Produk Lumbrimanan adalah hasil hilirisasi dari penelitian beliau mengenai potensi Cacing Tanah (Lumbricus Rubellus) sebagai agen penyembuh alami dan bio-indikator lingkungan bersih.',
                    'Lumbrimanan product is the downstream result of her research on the potential of Earthworms (Lumbricus Rubellus) as natural healing agents and indicators of a clean environment.'
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                       <h4 className="font-bold text-stone-800">{t('Riset Akademik', 'Academic Research')}</h4>
                       <p className="text-xs text-stone-500">{t('30+ Tahun penelitian bioteknologi tanah.', '30+ Years of soil biotechnology research.')}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                       <h4 className="font-bold text-stone-800">{t('Inovasi Pertanian', 'Agricultural Innovation')}</h4>
                       <p className="text-xs text-stone-500">{t('Pelopor Simantri (Sistem Pertanian Terintegrasi) Bali.', 'Pioneer of Simantri (Integrated Farming System) Bali.')}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProfKartini;