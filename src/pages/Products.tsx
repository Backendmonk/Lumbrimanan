import React, { useState } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Check, Shield, Plus, Minus, ShoppingCart, HelpCircle } from 'lucide-react';

const Products = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      qId: 'Apakah aman dikonsumsi setiap hari?',
      qEn: 'Is it safe to consume everyday?',
      aId: 'Ya, Lumbrimanan adalah suplemen organik alami tanpa bahan kimia pengawet. Aman dikonsumsi jangka panjang untuk pemeliharaan kesehatan.',
      aEn: 'Yes, Lumbrimanan is a natural organic supplement without chemical preservatives. It is safe for long-term consumption for health maintenance.'
    },
    {
      qId: 'Berapa dosis yang dianjurkan?',
      qEn: 'What is the recommended dosage?',
      aId: 'Untuk pencegahan: 2 kapsul sebelum tidur. Untuk pemulihan kondisi: 2 kapsul pagi dan 2 kapsul malam.',
      aEn: 'For prevention: 2 capsules before sleep. For recovery: 2 capsules in the morning and 2 capsules at night.'
    },
    {
      qId: 'Apakah bisa dikonsumsi bersama obat dokter?',
      qEn: 'Can it be taken with doctor\'s medication?',
      aId: 'Disarankan memberi jeda waktu 1-2 jam antara konsumsi obat dokter dan suplemen ini.',
      aEn: 'It is recommended to leave a 1-2 hour gap between doctor\'s medication and this supplement.'
    },
     {
      qId: 'Apakah halal?',
      qEn: 'Is it Halal?',
      aId: 'Ya, kami menggunakan cangkang kapsul nabati (rumput laut/tumbuhan) dan proses produksi yang bersih.',
      aEn: 'Yes, we use vegetable capsules (seaweed/plant-based) and a clean production process.'
    }
  ];

  return (
    <div className="pt-28 pb-20 fade-in bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Product Showcase Top */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row mb-20">
           
           {/* Image Gallery Side */}
           <div className="lg:w-1/2 bg-stone-100 p-8 flex items-center justify-center relative">
             <div className="absolute top-6 left-6 z-10">
                <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Best Seller</span>
             </div>
             <img             
               src="pages/src/btl1.jpg" 
               alt="Lumbrimanan Premium Bottle" 
               className="w-full max-w-md object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition duration-500"
             />
           </div>

           {/* Details Side */}
           <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
             <div className="mb-2">
                <span className="text-emerald-800 font-bold tracking-widest uppercase text-xs">Organic Food Supplement</span>
             </div>
             <h1 className="text-4xl font-serif text-stone-900 mb-4">Lumbrimanan Extract</h1>
             <p className="text-stone-500 text-lg mb-6 leading-relaxed">
               {t(
                 'Ekstrak Cacing Lumbricus Rubellus konsentrasi tinggi. Diproses dengan teknologi ekstraksi suhu rendah untuk menjaga aktivitas enzim lumbrokinase.',
                 'High concentration Lumbricus Rubellus Earthworm Extract. Processed with low-temperature extraction technology to maintain lumbrokinase enzyme activity.'
               )}
             </p>

             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-stone-200 p-4 rounded-lg text-center">
                   <div className="text-xs text-stone-400 uppercase tracking-widest mb-1">Isi</div>
                   <div className="font-bold text-stone-800">30 / 60 Kapsul</div>
                </div>
                <div className="border border-stone-200 p-4 rounded-lg text-center">
                   <div className="text-xs text-stone-400 uppercase tracking-widest mb-1">Komposisi</div>
                   <div className="font-bold text-stone-800">100% Extract</div>
                </div>
             </div>

             <div className="mt-400">
               <a 
                 href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20untuk%20membeli%20Lumbri%20Manan.%20Mohon%20informasi%20harga%20dan%20pengiriman."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-emerald-900 text-white text-center py-5 rounded-xl text-base tracking-widest uppercase font-bold hover:bg-emerald-800 hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
               >
                 <ShoppingCart className="w-6 h-6" />
                 {t('Beli Sekarang via WhatsApp', 'Buy Now via WhatsApp')}
               </a>
               <p className="text-center text-xs text-stone-400 mt-4">
                 {t('*Pengiriman dari Bali ke seluruh Indonesia.', '*Shipping from Bali to all over Indonesia.')}
               </p>
             </div>
           </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto mb-20">
           <h2 className="text-3xl font-serif text-center text-stone-900 mb-12">{t('Manfaat Kesehatan', 'Health Benefits')}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500">
                 <h3 className="text-xl font-bold text-stone-800 mb-4">{t('Sirkulasi Darah', 'Blood Circulation')}</h3>
                 <p className="text-stone-600 text-sm">{t('Enzim lumbrokinase membantu mengurai fibrin yang menyumbat pembuluh darah, melancarkan sirkulasi.', 'Lumbrokinase enzyme helps break down fibrin clogging blood vessels, improving circulation.')}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-600">
                 <h3 className="text-xl font-bold text-stone-800 mb-4">{t('Daya Tahan Tubuh', 'Immune System')}</h3>
                 <p className="text-stone-600 text-sm">{t('Sifat antimikroba alami membantu tubuh melawan infeksi bakteri patogen seperti Salmonella dan E. coli.', 'Natural antimicrobial properties help the body fight pathogenic bacterial infections like Salmonella and E. coli.')}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-700">
                 <h3 className="text-xl font-bold text-stone-800 mb-4">{t('Vitalitas & Energi', 'Vitality & Energy')}</h3>
                 <p className="text-stone-600 text-sm">{t('Asam amino esensial membantu pemulihan otot dan meningkatkan energi metabolisme.', 'Essential amino acids help muscle recovery and increase metabolic energy.')}</p>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-10">
              <HelpCircle className="w-10 h-10 text-emerald-900 mx-auto mb-4" />
              <h2 className="text-3xl font-serif text-stone-900">{t('Pertanyaan Umum', 'Frequently Asked Questions')}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    >
                       <span className="font-bold text-stone-800">{t(faq.qId, faq.qEn)}</span>
                       {openFaq === idx ? <Minus className="w-5 h-5 text-emerald-600" /> : <Plus className="w-5 h-5 text-stone-400" />}
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 py-4 border-t border-stone-100' : 'max-h-0'}`}
                    >
                       <p className="text-stone-600 text-sm leading-relaxed">{t(faq.aId, faq.aEn)}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
        
        {/* Final Disclaimer */}
        <div className="mt-20 text-center text-xs text-stone-400 max-w-2xl mx-auto">
           <p>
              {t(
                 'Disclaimer: Lumbrimanan adalah suplemen kesehatan untuk membantu memelihara kesehatan tubuh. Bukan obat untuk menyembuhkan penyakit secara instan. Hasil bisa berbeda pada setiap individu.',
                 'Disclaimer: Lumbrimanan is a health supplement to help maintain body health. Not a drug to cure diseases instantly. Results may vary for each individual.'
              )}
           </p>
        </div>

      </div>
    </div>
  );
};

export default Products;