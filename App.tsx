import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './utils/LanguageContext';

// Pages
import Home from './pages/Home';
import ProfKartini from './pages/ProfKartini';
import Research from './pages/Research';
import Farming from './pages/Farming';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Floating WhatsApp Button (Softened)
const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/6281234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-emerald-800 hover:bg-emerald-900 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-105 flex items-center justify-center opacity-90 hover:opacity-100"
    aria-label="Consultation"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 filter brightness-0 invert" alt="WhatsApp" />
  </a>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prof-kartini" element={<ProfKartini />} />
              <Route path="/riset" element={<Research />} />
              <Route path="/ekosistem" element={<Farming />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="/Gallery" element={<Gallery />} />
              
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;