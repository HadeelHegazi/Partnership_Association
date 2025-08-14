import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const WhyNowSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <section className="relative py-20" id="section-3">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/WhyNowSection.png"
          alt="People joining hands in unity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-yellow-500/70"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 ${isRTL ? 'text-center' : 'text-center'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          {translations.whyNow.title[language]}
        </h2>

        <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
          {translations.whyNow.content[language]}
        </p>
      </div>
    </section>
  );
};
