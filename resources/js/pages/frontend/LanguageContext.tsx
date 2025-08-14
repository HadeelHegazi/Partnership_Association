import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'he' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');
  
  const direction = language === 'en' ? 'ltr' : 'rtl';
  const isRTL = direction === 'rtl';

  // Apply direction to document element when language changes
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, isRTL }}>
      <div dir={direction} className={`min-h-screen ${isRTL ? 'font-sans' : ''}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};