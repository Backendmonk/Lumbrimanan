import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { User, Users, Baby } from 'lucide-react';

const Benefits = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">{t('Manfaat Untuk Semua Usia', 'Benefits For All Ages')}</h1>
          <p className="text-stone-600">{t('Lumbrimanan diformulasikan untuk mendukung kesehatan keluarga.', 'Lumbrimanan is formulated to support family health.')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Kids */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-500">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Baby className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-center text-stone-800 mb-4">{t('Anak-Anak', 'Children')}</h3>
            <ul className="space-y-3 text-stone-600 text-sm list-disc pl-5">
              <li>{t('Meningkatkan nafsu makan', 'Increases appetite')}</li>
              <li>{t('Memperkuat daya tahan tubuh', 'Strengthens immune system')}</li>
              <li>{t('Meredakan demam secara alami', 'Relieves fever naturally')}</li>
            </ul>
          </div>

          {/* Adults */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-600 transform md:-translate-y-4">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <User className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-center text-stone-800 mb-4">{t('Dewasa', 'Adults')}</h3>
            <ul className="space-y-3 text-stone-600 text-sm list-disc pl-5">
              <li>{t('Menjaga stamina kerja', 'Maintains work stamina')}</li>
              <li>{t('Melancarkan sirkulasi darah', 'Improves blood circulation')}</li>
              <li>{t('Mempercepat pemulihan tifus', 'Accelerates typhoid recovery')}</li>
            </ul>
          </div>

          {/* Elderly */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-700">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-center text-stone-800 mb-4">{t('Lansia', 'Elderly')}</h3>
            <ul className="space-y-3 text-stone-600 text-sm list-disc pl-5">
              <li>{t('Meningkatkan vitalitas', 'Increases vitality')}</li>
              <li>{t('Membantu metabolisme sel', 'Helps cell metabolism')}</li>
              <li>{t('Nutrisi mudah cerna', 'Easy to digest nutrition')}</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg text-center">
          <h4 className="font-bold text-amber-800 mb-2">Disclaimer</h4>
          <p className="text-amber-900/70 text-sm">
            {t(
              'Lumbrimanan adalah suplemen makanan alami untuk mendukung kesehatan tubuh, bukan pengganti obat resep dokter untuk penyakit serius. Konsultasikan dengan dokter jika Anda memiliki kondisi medis khusus.',
              'Lumbrimanan is a natural food supplement to support body health, not a substitute for doctor prescription drugs for serious illnesses. Consult a doctor if you have specific medical conditions.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;