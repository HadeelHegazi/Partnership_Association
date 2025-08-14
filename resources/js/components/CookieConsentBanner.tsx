import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, Settings, Info } from 'lucide-react';

interface CookieConsentBannerProps {
  onOpenCookiePolicy: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onOpenCookiePolicy }) => {
  const { language, direction, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieSettings', JSON.stringify({
      essential: true,
      preferences: true,
      analytics: true
    }));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieSettings', JSON.stringify({
      essential: true,
      preferences: false,
      analytics: false
    }));
    setIsVisible(false);
  };

  const handleSaveSettings = (settings: { essential: boolean; preferences: boolean; analytics: boolean }) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-white shadow-lg border-t-4 border-t-blue-900 max-w-6xl mx-auto">
        <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`} dir={direction}>
          {!showSettings ? (
            // Main banner
            <div className="space-y-4">
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {translations.cookies.banner.title[language]}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {translations.cookies.banner.message[language]}
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className={`flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button
                  onClick={handleAcceptAll}
                  className="bg-blue-900 hover:bg-blue-800 text-white"
                >
                  {translations.cookies.banner.accept[language]}
                </Button>
                
                <Button
                  onClick={handleDeclineAll}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  {translations.cookies.banner.decline[language]}
                </Button>
                
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-50"
                >
                  <Settings size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {translations.cookies.banner.settings[language]}
                </Button>
                
                <Button
                  onClick={onOpenCookiePolicy}
                  variant="ghost"
                  className="text-blue-900 hover:bg-blue-50"
                >
                  <Info size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {translations.cookies.banner.learnMore[language]}
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <CookieSettings
              onSave={handleSaveSettings}
              onBack={() => setShowSettings(false)}
              language={language}
              isRTL={isRTL}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

interface CookieSettingsProps {
  onSave: (settings: { essential: boolean; preferences: boolean; analytics: boolean }) => void;
  onBack: () => void;
  language: string;
  isRTL: boolean;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ onSave, onBack, language, isRTL }) => {
  const [settings, setSettings] = useState({
    essential: true,
    preferences: true,
    analytics: false
  });

  const handleToggle = (type: keyof typeof settings) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      key: 'essential' as const,
      title: {
        he: 'עוגיות הכרחיות',
        ar: 'ملفات تعريف الارتباط الضرورية',
        en: 'Essential Cookies'
      },
      description: {
        he: 'נדרשות לתפקוד בסיסי של האתר',
        ar: 'مطلوبة للوظائف الأساسية للموقع',
        en: 'Required for basic website functionality'
      },
      required: true
    },
    {
      key: 'preferences' as const,
      title: {
        he: 'עוגיות העדפות',
        ar: 'ملفات تعريف الارتباط للتفضيلات',
        en: 'Preference Cookies'
      },
      description: {
        he: 'שומרות את הגדרות השפה שלכם',
        ar: 'تحفظ إعدادات اللغة الخاصة بكم',
        en: 'Save your language settings'
      },
      required: false
    },
    {
      key: 'analytics' as const,
      title: {
        he: 'עוגיות אנליטיקה',
        ar: 'ملفات تعريف الارتباط التحليلية',
        en: 'Analytics Cookies'
      },
      description: {
        he: 'עוזרות לנו להבין איך משתמשים באתר',
        ar: 'تساعدنا في فهم كيفية استخدام الموقع',
        en: 'Help us understand how the website is used'
      },
      required: false
    }
  ];

  return (
    <div className="space-y-4">
      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <button
          onClick={onBack}
          className="text-blue-900 hover:text-blue-700 transition-colors"
        >
          <span className={`${isRTL ? '←' : '→'}`}>
            {language === 'he' && 'חזרה'}
            {language === 'ar' && 'العودة'}
            {language === 'en' && 'Back'}
          </span>
        </button>
        <h3 className="text-lg font-semibold text-blue-900">
          {translations.cookies.banner.settings[language]}
        </h3>
      </div>

      <div className="space-y-3">
        {cookieTypes.map((type) => (
          <div key={type.key} className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex-1 ${isRTL ? 'text-right mr-4' : 'text-left ml-4'}`}>
              <h4 className="font-medium text-gray-900">
                {type.title[language as keyof typeof type.title]}
              </h4>
              <p className="text-sm text-gray-600">
                {type.description[language as keyof typeof type.description]}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings[type.key]}
                onChange={() => handleToggle(type.key)}
                disabled={type.required}
                className="sr-only"
              />
              <div className={`w-11 h-6 bg-gray-200 rounded-full peer ${settings[type.key] ? 'bg-blue-600' : ''} ${type.required ? 'opacity-50' : ''}`}>
                <div className={`absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition-all ${settings[type.key] ? 'transform translate-x-5 border-blue-600' : ''}`}></div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className={`flex gap-3 pt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Button
          onClick={() => onSave(settings)}
          className="bg-blue-900 hover:bg-blue-800 text-white"
        >
          {language === 'he' && 'שמירה'}
          {language === 'ar' && 'حفظ'}
          {language === 'en' && 'Save'}
        </Button>
        
        <Button
          onClick={() => onSave({ essential: true, preferences: false, analytics: false })}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          {language === 'he' && 'דחיית הכל'}
          {language === 'ar' && 'رفض الكل'}
          {language === 'en' && 'Reject All'}
        </Button>
      </div>
    </div>
  );
};