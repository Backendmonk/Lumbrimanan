import React from 'react';
import { useLanguage } from '../utils/LanguageContext';

const Tourism = () => {
  const { t } = useLanguage();

  const activities = [
    { nameId: 'Meditasi Alam', nameEn: 'Nature Meditation', img: 'https://picsum.photos/seed/meditation/400/300' },
    { nameId: 'Trekking Kebun', nameEn: 'Farm Trekking', img: 'https://picsum.photos/seed/trekking/400/300' },
    { nameId: 'Penyulingan Atsiri', nameEn: 'Essential Oil Distillation', img: 'https://picsum.photos/seed/oil/400/300' },
    { nameId: 'Budidaya Lebah', nameEn: 'Bee Keeping', img: 'https://picsum.photos/seed/bee/400/300' },
  ];

  return (
    <div className="pt-24 pb-20 fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">{t('Eduwisata Lumbrimanan', 'Lumbrimanan Eco-Tourism')}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {t('Lebih dari sekadar pertanian. Kami menawarkan pengalaman menyatu dengan alam untuk ketenangan jiwa.', 'More than just farming. We offer an experience of merging with nature for peace of mind.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((act, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img src={act.img} alt={t(act.nameId, act.nameEn)} className="w-full h-64 object-cover transition transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{t(act.nameId, act.nameEn)}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className="bg-stone-100 rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 h-64 md:h-auto">
            <img src="https://picsum.photos/seed/wedding/800/600" alt="Prewedding" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">{t('Spot Foto & Prewedding', 'Photo Spot & Prewedding')}</h2>
            <p className="text-stone-600 mb-6">
              {t('Abadikan momen spesial Anda dengan latar belakang kebun organik yang asri, hijau, dan menenangkan. Tersedia juga homestay untuk pengalaman menginap.', 'Capture your special moments with a beautiful, green, and soothing organic garden background. Homestays are also available for a stay experience.')}
            </p>
            <button className="bg-emerald-800 text-white py-3 px-6 rounded-lg w-fit">
              {t('Reservasi Kunjungan', 'Book a Visit')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;