import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';


export const HeroSection: React.FC = () => {
  const { language, direction } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/images/HeroSection.png"
          alt="Diverse community working together"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
          <span>Image not available</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/60"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${direction === 'rtl' ? 'text-center' : 'text-center'}`}>
          {translations.hero.title[language]}
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 leading-relaxed opacity-90 ${direction === 'rtl' ? 'text-center' : 'text-center'}`}>
          {translations.hero.subtitle[language]}
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${direction === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
          <Button 
            size="lg" 
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg shadow-lg"
          >
            {translations.hero.buttons.about[language]}
          </Button>
          
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg shadow-lg"
          >
            {translations.hero.buttons.donate[language]}
          </Button>
        </div>
      </div>
    </section>
  );
};