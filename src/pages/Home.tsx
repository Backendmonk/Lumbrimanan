import React, { useEffect, useState } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Dna, Droplets, FlaskConical, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const { t, lang } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  const isIndo = lang === 'id';

  // Parallax Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fade-in bg-stone-50 overflow-hidden">
      
      {/* 1. HERO SECTION - PARALLAX & SALES DRIVEN */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        
        {/* Parallax Background Layers */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }} // Moves slow (Background)
        >
           {/* Abstract Gradient Blob 1 */}
           <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-emerald-50/60 rounded-full blur-3xl opacity-60"></div>
           {/* Abstract Gradient Blob 2 */}
           <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 z-20 relative pt-36 pb-20 lg:pt-44 lg:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Side - Moves slightly with scroll */}
            <div 
              className="lg:w-1/2 text-center lg:text-left relative z-10"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Parallax Text
            >
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-amber-200 mb-8 animate-fade-in-up shadow-sm hover:shadow-md transition duration-300">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold tracking-widest text-amber-900 uppercase">
                  {t('Premium Quality • Organic Certified', 'Premium Quality • Organic Certified', 'Kualitas Utama • Sertifikasi Organik')}
                </span>
              </div>
              
              {/* Selling Headline - Dynamic Sizing based on Lang to balance ID text */}
              <h1 className={`${isIndo ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-7xl'} font-serif text-stone-900 mb-8 leading-[1.1] tracking-tight drop-shadow-sm text-balance min-h-[3em] lg:min-h-[2.2em]`}>
                {t('Bantu Pemulihan Tubuh', 'Help Body Recovery', 'Nglancarang Pamulihan Angga')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 to-emerald-700 italic font-bold">
                  {t('Secara Cepat & Alami', 'Fast & Naturally', 'Sacara Gelis & Alami')}
                </span>
              </h1>
              
              {/* Problem/Solution Subheadline - Dynamic Sizing based on Lang */}
              <p className={`${isIndo ? 'text-base md:text-lg' : 'text-lg md:text-xl'} text-stone-600 mb-10 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance min-h-[4em] lg:min-h-[3em]`}>
                {t(
                  'Solusi herbal terpercaya untuk membantu pemulihan Demam, Tipes, dan Kelelahan. Kembalikan vitalitas keluarga Anda dengan ekstrak cacing organik murni.',
                  'Trusted herbal solution to help recover from Fever, Typhoid, and Fatigue. Restore your family vitality with pure organic earthworm extract.',
                  'Tambas herbal sane kapercaya anggen nambakin Pinakit Panas, Tipes, miwah Lesu. Waliang kakuatan angga kulawarga antuk ekstrak cacing organik sujati.'
                )}
              </p>

              {/* Quick Benefits List */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 text-sm font-semibold text-stone-700">
                <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
                   <CheckCircle className="w-5 h-5 text-emerald-600" />
                   <span>{t('Aman di Lambung', 'Safe for Stomach', 'Aman ring Waduk')}</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
                   <CheckCircle className="w-5 h-5 text-emerald-600" />
                   <span>{t('Tanpa Bahan Kimia', 'No Chemicals', 'Tanpa Bahan Kimia')}</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
                   <CheckCircle className="w-5 h-5 text-emerald-600" />
                   <span>{t('Reaksi Cepat', 'Fast Reaction', 'Reaksi Gelis')}</span>
                </div>
              </div>
              
              {/* Strong CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link 
                  to="/produk"
                  className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-4 px-10 rounded-full transition shadow-xl hover:shadow-2xl hover:shadow-emerald-900/20 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  {t('Pesan Paket Hemat', 'Order Value Pack', 'Tumbas Paket Irit')} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/riset"
                  className="bg-white border-2 border-emerald-900/10 text-emerald-900 font-bold py-4 px-10 rounded-full hover:bg-emerald-50 transition flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  {t('Lihat Bukti Khasiat', 'See Efficacy Proof', 'Cingak Bukti Guna')}
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start gap-4 opacity-90">
                 <div className="flex -space-x-3">
                    {/* <img src="https://picsum.photos/seed/user1/100/100" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                    <img src="https://picsum.photos/seed/user2/100/100" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                    <img src="https://picsum.photos/seed/user3/100/100" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-800 shadow-sm">+1k</div> */}
                 </div>
                 {/* <p className="text-xs text-stone-500 font-medium">
                    <span className="font-bold text-stone-900 block text-sm">1.000+ {t('Keluarga', 'Families', 'Kulawarga')}</span> 
                    {t('Telah Membuktikan', 'Have Proven It', 'Sampun Ngabuktiang')}
                 </p> */}
              </div>
            </div>

            {/* Image Side - Product Hero - Parallax Effect */}
            <div className="lg:w-1/2 relative flex justify-center mt-12 lg:mt-0 perspective-1000">
               
               {/* Visual Background Element - Moves opposite to create depth */}
               <div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-amber-200/30 to-emerald-200/30 rounded-full blur-3xl opacity-60"
                 style={{ transform: `translate(-50%, -50%) translateY(${scrollY * -0.1}px)` }}
               ></div>
               
               <div className="relative z-10" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
                 <img 
                    src="src/pages/src/produk1.png " 
                    alt="Lumbrimanan Bottle" 
                   className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition duration-500 ease-in-out relative z-10"
                 />
                 
                 {/* Floating Tag 1 (Right) */}
                 <div 
                    className="absolute bottom-10 -right-4 md:right-0 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-stone-100 z-20 animate-bounce-slow hidden md:block"
                    style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                 >
                    <div className="flex items-center gap-3">
                       <div className="bg-green-100 p-2.5 rounded-full">
                          <Activity className="w-6 h-6 text-green-600" />
                       </div>
                       <div>
                          <p className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">{t('Daya Serap', 'Absorption Rate', 'Daya Serap')}</p>
                          <p className="text-lg font-bold text-stone-900 leading-none mt-0.5">98% Faster</p>
                       </div>
                    </div>
                 </div>

                 {/* Floating Tag 2 (Left) */}
                 <div 
                    className="absolute top-20 -left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-stone-100 z-20 hidden md:block"
                    style={{ transform: `translateY(${scrollY * 0.15}px)` }} // Moves faster
                 >
                    <div className="flex items-center gap-3">
                       <div className="bg-amber-100 p-2.5 rounded-full">
                          <ShieldCheck className="w-6 h-6 text-amber-600" />
                       </div>
                       <div>
                          <p className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">Immune Booster</p>
                          <p className="text-lg font-bold text-stone-900 leading-none mt-0.5">Active ++</p>
                       </div>
                    </div>
                 </div>

               </div>
            </div>

          </div>
        </div>
      </header>

      {/* 2. PROBLEM AWARENESS - EDUCATIONAL */}
      <section className="py-24 bg-stone-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">{t('Tantangan Kesehatan Modern', 'Modern Health Challenges', 'Pikobet Kesehatan Modern')}</h2>
            <p className="text-stone-600 text-lg font-light text-balance">
              {t(
                'Paparan residu kimia dan kurangnya nutrisi mikro dalam pola makan modern dapat mempengaruhi keseimbangan metabolisme tubuh.',
                'Exposure to chemical residues and lack of micro-nutrients in modern diets can affect the body\'s metabolic balance.',
                'Residu kimia lan kakirangan nutrisi mikro ring pola makan modern prasida ngawinang pikobet ring keseimbangan metabolisme angga.'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-emerald-200 hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-stone-100 group-hover:bg-emerald-50 rounded-full flex items-center justify-center mb-6 transition">
                <FlaskConical className="w-7 h-7 text-stone-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{t('Residu Kimia', 'Chemical Residue', 'Residu Kimia')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t(
                  'Bahan kimia dalam rantai makanan dapat membebani organ vital dalam proses detoksifikasi alami tubuh.',
                  'Chemicals in the food chain can burden vital organs in the body\'s natural detoxification process.',
                  'Bahan kimia ring ajeng-ajengan prasida ngabotang organ vital rikala proses detoksifikasi alami.'
                )}
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-emerald-200 hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-stone-100 group-hover:bg-emerald-50 rounded-full flex items-center justify-center mb-6 transition">
                <Dna className="w-7 h-7 text-stone-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{t('Defisiensi Mikro', 'Micro Deficiency', 'Kakirangan Mikro')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t(
                  'Tubuh seringkali kekurangan asam amino esensial dan enzim alami yang diperlukan untuk perbaikan sel.',
                  'The body often lacks essential amino acids and natural enzymes needed for cell repair.',
                  'Angga sering kakirangan asam amino esensial lan enzim alami sane kabuatang anggen ngamecikang sel.'
                )}
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-emerald-200 hover:shadow-lg transition duration-300 group">
              <div className="w-14 h-14 bg-stone-100 group-hover:bg-emerald-50 rounded-full flex items-center justify-center mb-6 transition">
                <Activity className="w-7 h-7 text-stone-600 group-hover:text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{t('Metabolisme Lambat', 'Slow Metabolism', 'Metabolisme Alon')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t(
                  'Penurunan fungsi metabolisme dapat berdampak pada tingkat energi dan daya tahan tubuh sehari-hari.',
                  'Decline in metabolic function can impact daily energy levels and immune system.',
                  'Katemurun fungsi metabolisme prasida mawesana ring tingkat energi lan daya tahan tubuh sarahina.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION - PRODUCT DOMINANT */}
      <section className="py-24 bg-white overflow-hidden relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl opacity-30 transform scale-90"></div>
               <img src="src/pages/src/homeKemurnian.jpg" alt="Lumbrimanan Solution" className="relative z-10 w-full rounded-2xl shadow-2xl" />
            </div>
            
            <div className="md:w-1/2">
               <span className="text-emerald-800 font-bold tracking-widest uppercase text-xs mb-4 block">{t('Solusi Bio-Aktif', 'Bio-Active Solution', 'Solusi Bio-Aktif')}</span>
               <h2 className="text-4xl font-serif text-stone-900 mb-8 leading-tight text-balance">
                 {t('Kemurnian Ekstrak Cacing Organik Terkontrol', 'Purity of Controlled Organic Earthworm Extract', 'Kasucian Ekstrak Cacing Organik Sane Kajaga')}
               </h2>
               
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="shrink-0 mt-1">
                     <ShieldCheck className="w-6 h-6 text-emerald-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-stone-800 text-lg mb-1">{t('Budidaya Tanpa Pestisida', 'Pesticide-Free Cultivation', 'Mabudidaya Tanpa Pestisida')}</h4>
                     <p className="text-stone-600 text-sm leading-relaxed">
                       {t(
                         'Cacing dibudidayakan dalam media organik steril tanpa paparan bahan kimia sintetis untuk menjamin kemurnian ekstrak.',
                         'Worms are cultivated in sterile organic media without exposure to synthetic chemicals to ensure extract purity.',
                         'Cacing kabudidayayang ring media organik steril tanpa keni bahan kimia sintetis anggen nyaga kemurnian ekstrak.'
                       )}
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="shrink-0 mt-1">
                     <Droplets className="w-6 h-6 text-emerald-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-stone-800 text-lg mb-1">{t('Profil Asam Amino Lengkap', 'Complete Amino Acid Profile', 'Profil Asam Amino Jangkep')}</h4>
                     <p className="text-stone-600 text-sm leading-relaxed">
                       {t(
                         'Mengandung asam amino esensial alami yang mudah diserap tubuh untuk mendukung regenerasi jaringan.',
                         'Contains natural essential amino acids that are easily absorbed by the body to support tissue regeneration.',
                         'Madaging asam amino esensial alami sane elah kaserap antuk angga anggen nukung regenerasi jaringan.'
                       )}
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="shrink-0 mt-1">
                     <Activity className="w-6 h-6 text-emerald-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-stone-800 text-lg mb-1">{t('Dukungan Metabolisme', 'Metabolic Support', 'Dukungan Metabolisme')}</h4>
                     <p className="text-stone-600 text-sm leading-relaxed">
                       {t(
                         'Diformulasikan untuk membantu memelihara kesehatan tubuh dan mendukung fungsi fisiologis normal.',
                         'Formulated to help maintain body health and support normal physiological functions.',
                         'Kaformualsiang anggen ngabantu miara kesehatan angga lan nukung fungsi fisiologis normal.'
                       )}
                     </p>
                   </div>
                 </div>
               </div>

               <div className="mt-12 pt-8 border-t border-stone-100">
                 <Link 
                   to="/produk"
                   className="inline-flex items-center text-stone-900 font-bold hover:text-emerald-700 transition"
                 >
                   {t('Lihat Komposisi Lengkap', 'View Full Composition', 'Cingak Komposisi Jangkep')} <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCIENTIFIC AUTHORITY - CREDIBILITY (10%) */}
      <section className="py-24 bg-stone-900 text-stone-300 relative overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3 order-2 lg:order-1">
              <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                {t('Scientific Authority', 'Scientific Authority', 'Otoritas Ilmiah')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight text-balance">
                {t('Inovasi Berbasis Riset Pertanian Organik', 'Innovation Based on Organic Farming Research', 'Inovasi Saking Riset Pertanian Organik')}
              </h2>
              <div className="space-y-6 text-stone-400 font-light text-lg mb-8 leading-relaxed">
                <p>
                  {t(
                    'Lumbrimanan dikembangkan dengan pendekatan ilmiah oleh Prof. Dr. Ir. Ni Luh Kartini, M.S., akademisi Universitas Udayana yang mendedikasikan karirnya untuk bioteknologi tanah dan sistem pertanian organik.',
                    'Lumbrimanan was developed with a scientific approach by Prof. Dr. Ir. Ni Luh Kartini, M.S., a Udayana University academic who dedicated her career to soil biotechnology and organic farming systems.',
                    'Lumbrimanan kakembangang antuk pendekatan ilmiah olih Prof. Dr. Ir. Ni Luh Kartini, M.S., akademisi Universitas Udayana sane mendedikasiang karirnyane ring bioteknologi tanah lan sistem pertanian organik.'
                  )}
                </p>
                <p>
                  {t(
                    'Formula ini adalah hasil dari pemahaman mendalam tentang potensi bio-aktif cacing tanah (Lumbricus Rubellus) yang dibudidayakan dalam ekosistem terkontrol.',
                    'This formula is the result of a deep understanding of the bio-active potential of earthworms (Lumbricus Rubellus) cultivated in a controlled ecosystem.',
                    'Formula puniki wantah pikolih saking pemahaman sane dalem indik potensi bio-aktif cacing tanah (Lumbricus Rubellus) sane kabudidayayang ring ekosistem sane kajaga.'
                  )}
                </p>
              </div>
              
              <Link 
                to="/prof-kartini"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 font-medium text-sm transition"
              >
                {t('Profil Akademik Peneliti', 'Researcher Academic Profile', 'Profil Akademik Peneliti')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 border border-stone-700 transform translate-x-4 translate-y-4 rounded-lg"></div>
                <img 
                  src="src/pages/src/niluhkartini.jpeg" 
                  alt="Prof. Dr. Ir. Ni Luh Kartini" 
                  className="rounded-lg shadow-2xl relative z-10 w-64 md:w-80 hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 bg-emerald-900 text-center relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-balance">
            {t('Investasi Kesehatan Jangka Panjang', 'Long Term Health Investment', 'Investasi Kesehatan Jangka Panjang')}
          </h2>
          <p className="text-emerald-100 mb-10 text-lg font-light text-balance">
            {t(
              'Dukung metabolisme tubuh Anda hari ini dengan nutrisi murni yang teruji ilmiah.',
              'Support your body metabolism today with pure, scientifically tested nutrition.',
              'Dukung metabolisme angga semeton saking mangkin antuk nutrisi murni sane sampun teruji ilmiah.'
            )}
          </p>
          <a 
            href="https://wa.me/6281234567890"
            className="inline-flex items-center gap-3 bg-white text-emerald-900 font-bold py-5 px-12 rounded-full shadow-xl hover:bg-emerald-50 hover:-translate-y-1 transition transform"
          >
            <span>WhatsApp Order</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;