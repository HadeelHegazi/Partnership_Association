import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <section className="py-16 bg-gray-50" id="section-1">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isRTL ? 'md:order-2 text-right' : 'md:order-1 text-left'}`}>
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">
                {translations.about.whoWeAre.title[language]}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {translations.about.whoWeAre.content[language]}
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                {translations.about.vision.title[language]}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {translations.about.vision.content[language]}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'md:order-1' : 'md:order-2'}`}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="/images/AboutSection.jpg"
                alt="Community members working together"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
