import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { footerLogoConfig, footerLogoStyles } from '../config/logos';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenCookiePolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onOpenCookiePolicy }) => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Organization Info */}
          <div className={isRTL ? 'md:order-3' : 'md:order-1'}>
            <div className="mb-8 flex justify-center">
              {/* Logo Image */}
              <div className={footerLogoStyles.container}>
                <img 
                  src={footerLogoConfig.src}
                  alt={footerLogoConfig.alt}
                  className={footerLogoStyles.image}
                  onError={(e) => {
                    // Fallback to text if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback text logo (hidden by default, shows if image fails) */}
                <h2 className={footerLogoStyles.fallbackText}>
                  {footerLogoConfig.fallbackText}
                </h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {language === 'he' && 'ארגון המקדם שותפות וחיים משותפים בין יהודים וערבים בישראל'}
              {language === 'ar' && 'جمعية تعزز الشراكة والعيش المشترك بين اليهود والعرب في البلاد'}
              {language === 'en' && 'Organization promoting partnership and shared life between Jews and Arabs in Israel'}
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${isRTL ? 'md:order-1' : 'md:order-2'}`}>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">
              {translations.footer.quickLinks[language]}
            </h3>
            <ul className="space-y-2">
              {translations.header.nav[language].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#section-${index}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              
              {/* Privacy and Cookie Policy Links */}
              <li className="pt-2 border-t border-gray-700 mt-4">
                <button 
                  onClick={onOpenPrivacyPolicy}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {translations.footer.privacy[language]}
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCookiePolicy}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {translations.footer.cookies[language]}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={isRTL ? 'md:order-2' : 'md:order-3'}>
            <h3 className="font-bold text-lg mb-4 text-blue-400">
              {translations.footer.contact[language]}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-300">info@equal-partnership.org</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300" dir="ltr">+972-50-123-4567</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-300">
                  {language === 'he' && 'ישראל'}
                  {language === 'ar' && 'إسرائيل'}
                  {language === 'en' && 'Israel'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 {translations.footer.copyright[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};