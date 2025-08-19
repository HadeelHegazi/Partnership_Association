import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AboutUsPopup } from './AboutUsPopup';

export const HeroSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/HeroSection.png"
          alt="Diverse community working together"
          className="w-full h-full object-cover"
        />
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
            onClick={() => setAboutUsOpen(true)}
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

      {/* About Us Popup */}
      <AboutUsPopup open={aboutUsOpen} onOpenChange={setAboutUsOpen} />
    </section>
  );
};
