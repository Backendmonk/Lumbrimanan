import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Moon, Sun, Coffee } from 'lucide-react';

const Usage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20 fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-emerald-900 mb-12">
          {t('Cara Konsumsi', 'How to Consume')}
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Method 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 border-b pb-4">{t('Untuk Dewasa', 'For Adults')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
                  <Moon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">{t('Malam Hari', 'Night Time')}</h4>
                  <p className="text-stone-600 text-sm">{t('3 Kapsul sebelum tidur untuk pemulihan maksimal.', '3 Capsules before sleep for maximum recovery.')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
                  <Sun className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">{t('Pagi Hari (Opsional)', 'Morning (Optional)')}</h4>
                  <p className="text-stone-600 text-sm">{t('2 Kapsul jika kondisi tubuh sedang drop.', '2 Capsules if the body condition is dropping.')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 border-b pb-4">{t('Untuk Anak-anak', 'For Children')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
                  <Coffee className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800">{t('Campur Makanan', 'Mix with Food')}</h4>
                  <p className="text-stone-600 text-sm">{t('Buka kapsul, taburkan bubuk ke dalam makanan atau minuman hangat.', 'Open the capsule, sprinkle the powder into food or warm drinks.')}</p>
                </div>
              </div>
               <div className="bg-emerald-50 p-4 rounded-lg mt-4">
                <p className="text-emerald-800 text-sm font-semibold text-center">
                  {t('Rutin Setiap Hari', 'Routine Every Day')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Usage;