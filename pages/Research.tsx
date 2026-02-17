import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Dna, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 fade-in bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-emerald-900 font-bold tracking-widest uppercase text-xs mb-3 block">{t('Landasan Ilmiah', 'Scientific Foundation')}</span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">{t('Cara Kerja Bio-Aktif', 'Bio-Active Mechanism')}</h1>
          <p className="text-lg text-stone-600 font-light">
            {t(
              'Mengapa Lumbrimanan efektif? Penjelasan ilmiah mengenai kandungan aktif dan dampaknya pada fisiologi tubuh.',
              'Why is Lumbrimanan effective? Scientific explanation of active ingredients and their impact on body physiology.'
            )}
          </p>
        </div>

        {/* Section 1: The Enzyme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center mb-1 border-b border-stone-100 pb-24">
           <div className="order-2 md:order-1">
             <div className="bg-stone-50 p-8 rounded-xl border border-stone-100">
               <h3 className="text-2xl font-serif text-stone-900 mb-4">{t('Enzim Lumbrokinase', 'Lumbrokinase Enzyme')}</h3>
               <p className="text-stone-600 mb-4 font-light leading-relaxed">
                 {t(
                   'Kunci efektivitas produk ini. Lumbrokinase adalah enzim fibrinolitik (pemecah protein fibrin) yang sangat kuat. Fibrin yang menumpuk adalah penyebab utama plak dan penyumbatan pembuluh darah.',
                   'The key to this product\'s effectiveness. Lumbrokinase is a potent fibrinolytic enzyme (fibrin protein breaker). Accumulated fibrin is the main cause of plaque and blood vessel blockage.'
                 )}
               </p>
               <ul className="space-y-2 text-sm text-emerald-900 font-medium">
                 <li className="flex items-center gap-2"><Activity className="w-4 h-4" /> {t('Membantu melarutkan trombus (gumpalan darah)', 'Helps dissolve thrombus (blood clots)')}</li>
                 <li className="flex items-center gap-2"><Activity className="w-4 h-4" /> {t('Meningkatkan suplai oksigen ke sel', 'Increases oxygen supply to cells')}</li>
               </ul>
             </div>
           </div>
           <div className="order-1 md:order-2 flex justify-center">
              <img src="pages/src/61.png" width={400} alt="" />
           </div>
        </div>

        {/* Section 2: Amino Acids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center mb-24">
           <div className="flex justify-center">
             <img src="pages/src/60.png" width={400} alt="" />
           </div>
           <div>
             <div className="bg-white">
               <h3 className="text-2xl font-serif text-stone-900 mb-4">{t('Kompleks Asam Amino', 'Amino Acid Complex')}</h3>
               <p className="text-stone-600 mb-6 font-light leading-relaxed">
                 {t(
                   'Tubuh membutuhkan asam amino untuk memperbaiki jaringan yang rusak. Lumbrimanan mengandung profil asam amino esensial yang sangat tinggi dan mudah diserap tubuh.',
                   'The body needs amino acids to repair damaged tissue. Lumbrimanan contains a very high profile of essential amino acids that are easily absorbed by the body.'
                 )}
               </p>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-stone-50 border-l-2 border-amber-400">
                   <h4 className="font-bold text-stone-800 text-sm">Arginine</h4>
                   <p className="text-xs text-stone-500 mt-1">{t('Meningkatkan sistem imun', 'Boosts immune system')}</p>
                 </div>
                 <div className="p-4 bg-stone-50 border-l-2 border-amber-400">
                   <h4 className="font-bold text-stone-800 text-sm">Tryptophan</h4>
                   <p className="text-xs text-stone-500 mt-1">{t('Menenangkan sistem saraf', 'Calms the nervous system')}</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* CTA to Product */}
        <div className="text-center">
          <Link 
            to="/produk"
            className="inline-block bg-emerald-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-emerald-800 transition"
          >
            {t('Rasakan Manfaatnya', 'Experience the Benefits')}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Research;