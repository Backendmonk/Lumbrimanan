import React, { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';

type Language = 'id' | 'en' | 'ban';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (id: string, en: string, ban?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Language>('id');

  // Update HTML lang attribute for accessibility and potential CSS targeting
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => {
      if (prev === 'id') return 'en';
      if (prev === 'en') return 'ban';
      return 'id';
    });
  };

  // Helper with optional Balinese fallback (defaults to ID if BAN not provided)
  const t = (id: string, en: string, ban?: string) => {
    if (lang === 'en') return en;
    if (lang === 'ban') return ban || id; // Fallback to ID if Balinese trans missing
    return id;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};