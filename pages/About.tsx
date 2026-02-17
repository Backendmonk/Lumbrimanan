import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Microscope, Leaf, ShieldCheck } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 fade-in bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="text-emerald-800 font-bold tracking-widest uppercase text-xs mb-4 block">
            {t('Tentang Lumbrimanan', 'About Lumbrimanan')}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">
            {t('Sains di Balik Kemurnian Alam', 'Science Behind Nature\'s Purity')}
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            {t(
              'Kami percaya bahwa kualitas suplemen kesehatan sangat ditentukan oleh kualitas lingkungan tempat bahan bakunya tumbuh. Lumbrimanan adalah manifestasi dari prinsip "Soil to Cell".',
              'We believe that the quality of health supplements is determined by the quality of the environment where the raw materials grow. Lumbrimanan is the manifestation of the "Soil to Cell" principle.'
            )}
          </p>
        </div>

        {/* Philosophy Section - Replaces Farm Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/lab-nature/800/600" 
              alt="Scientific Approach" 
              className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full z-0"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              {t('Standar Kualitas Bio-Organik', 'Bio-Organic Quality Standard')}
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg font-light">
              {t(
                'Lumbrimanan bukan sekadar produk herbal biasa. Ini adalah hasil dari sistem budidaya terkontrol yang dirancang untuk menghilangkan variabel polutan.',
                'Lumbrimanan is not just an ordinary herbal product. It is the result of a controlled cultivation system designed to eliminate pollutant variables.'
              )}
            </p>
            <p className="text-stone-600 leading-relaxed text-lg font-light">
              {t(
                'Tanpa penggunaan pestisida sintetis dan logam berat, kami memastikan cacing Lumbricus Rubellus berkembang dalam media yang murni, menghasilkan profil enzim dan asam amino yang optimal untuk kesehatan manusia.',
                'Without the use of synthetic pesticides and heavy metals, we ensure Lumbricus Rubellus earthworms thrive in pure media, producing an enzyme and amino acid profile optimal for human health.'
              )}
            </p>
            
            <div className="pt-4 grid grid-cols-1 gap-4">
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Microscope className="w-5 h-5 text-emerald-800" />
                  </div>
                  <span className="font-medium text-stone-800">{t('Riset Berkelanjutan', 'Continuous Research')}</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Leaf className="w-5 h-5 text-emerald-800" />
                  </div>
                  <span className="font-medium text-stone-800">{t('Bahan Baku 100% Organik', '100% Organic Raw Material')}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-stone-50 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12">
            {t('Pilar Kualitas Kami', 'Our Quality Pillars')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                 <ShieldCheck className="w-8 h-8 text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{t('Integritas Proses', 'Process Integrity')}</h3>
              <p className="text-stone-600 font-light">
                {t('Pengawasan ketat dari hulu ke hilir untuk menjamin tidak adanya kontaminasi silang.', 'Strict supervision from upstream to downstream to ensure no cross-contamination.')}
              </p>
            </div>
            <div>
               <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                 <Leaf className="w-8 h-8 text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{t('Kemurnian Alam', 'Natural Purity')}</h3>
              <p className="text-stone-600 font-light">
                {t('Menjaga potensi alami bahan aktif tanpa penambahan pengawet kimia berbahaya.', 'Preserving the natural potency of active ingredients without adding harmful chemical preservatives.')}
              </p>
            </div>
            <div>
               <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                 <Microscope className="w-8 h-8 text-emerald-900" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{t('Basis Ilmiah', 'Scientific Basis')}</h3>
              <p className="text-stone-600 font-light">
                {t('Setiap klaim manfaat didasarkan pada literatur ilmiah mengenai kandungan bio-aktif.', 'Every benefit claim is based on scientific literature regarding bio-active ingredients.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;