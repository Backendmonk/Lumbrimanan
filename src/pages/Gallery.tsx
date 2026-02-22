import React, { useState } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { X, ZoomIn, Image as ImageIcon, PlayCircle } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  // Placeholder data - in production these would be real assets
  const images = [
    { src: 'src/pages/src/gmbrhl2.jpg', category: 'farm',  },
    { src: 'src/pages/src/btl1.jpg', category: 'product',  },
    { src: 'src/pages/src/kg1.jpg', category: 'activity',  },
    { src: 'src/pages/src/gmbrhl1.jpg', category: 'farm',  },
    { src: 'src/pages/src/pc1.jpg', category: 'product',  },
    { src: 'src/pages/src/kg2.jpg', category: 'activity', },
    { src: 'src/pages/src/gmbrhl3.jpg', category: 'farm',},
    { src: 'src/pages/src/pc2.jpg', category: 'product', },
    { src: 'src/pages/src/kg3.jpg', category: 'activity',},
    { src: 'src/pages/src/img3.jpg', category: 'farm', },
    { src: 'src/pages/src/homeKemurnian.jpg', category: 'product', },
    { src: 'https://picsum.photos/seed/activity4/800/600', category: 'activity',  },
  ];

  const videos = [
    {
      id: 'vid1',
      src: 'https://www.youtube.com/embed/zwPhjM305GE',
      titleId: 'Profil Kebun',
      titleEn: 'Farm Profile',
      category: 'Farm Life'
    },
    {
      id: 'vid2',
      src: 'https://www.youtube.com/embed/iuZ4h165B1I',
      titleId: 'Proses Pembuatan',
      titleEn: 'Making Process',
      category: 'Product Making'
    },
    {
      id: 'vid3',
      src: 'https://www.youtube.com/embed/XyNlqQId-nk',
      titleId: 'Kegiatan Komunitas',
      titleEn: 'Community Events',
      category: 'Community Events'
    }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const categories = [
    { id: 'all', labelId: 'Semua', labelEn: 'All' },
    { id: 'farm', labelId: 'Kebun', labelEn: 'Farm' },
    { id: 'product', labelId: 'Produk', labelEn: 'Products' },
    { id: 'activity', labelId: 'Kegiatan', labelEn: 'Activities' },
  ];

  return (
    <div className="pt-24 pb-20 fade-in min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
            <ImageIcon className="w-8 h-8 text-emerald-700" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-emerald-900 mb-6">
            {t('Galeri Kami', 'Our Gallery')}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            {t(
              'Intip keindahan alam, proses produksi yang higienis, dan keceriaan kegiatan komunitas di Lumbrimanan.',
              'Peek into the beauty of nature, hygienic production processes, and the joy of community activities at Lumbrimanan.'
            )}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-emerald-800 text-white shadow-lg transform scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-emerald-700'
              }`}
            >
              {t(cat.labelId, cat.labelEn)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-xl overflow-hidden shadow-sm cursor-pointer aspect-square bg-stone-200"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <ZoomIn className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium truncate"></p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
           <div className="text-center py-20 text-stone-400">
             <p>{t('Tidak ada foto dalam kategori ini.', 'No photos in this category.')}</p>
           </div>
        )}

        {/* Video Section */}
        <div className="border-t border-stone-200 pt-20">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <PlayCircle className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">
              {t('Galeri Video', 'Video Gallery')}
            </h2>
             <p className="text-stone-600 max-w-2xl mx-auto">
              {t(
                'Saksikan langsung bagaimana kami merawat alam dan memproses kebaikan bumi untuk Anda.',
                'Witness firsthand how we care for nature and process the earth\'s goodness for you.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((vid) => (
               <div key={vid.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-stone-100 flex flex-col">
                  <div className="aspect-video bg-stone-900 relative">
                     <iframe 
                       width="100%" 
                       height="100%" 
                       src={vid.src}
                       title={t(vid.titleId, vid.titleEn)}
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                       className="w-full h-full"
                     ></iframe>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">{vid.category}</div>
                    <h3 className="text-xl font-bold text-stone-800">{t(vid.titleId, vid.titleEn)}</h3>
                  </div>
               </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;