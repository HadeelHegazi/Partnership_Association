import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface CookiePolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ open, onOpenChange }) => {
  const { language, direction, isRTL } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`max-w-4xl max-h-[80vh] ${isRTL ? 'text-right' : 'text-left'}`} dir={direction}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-900">
            {translations.cookies.title[language]}
          </DialogTitle>
          <p className="text-sm text-gray-600">
            {translations.cookies.lastUpdated[language]}: {new Date().toLocaleDateString()}
          </p>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {/* What are Cookies Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.cookies.sections.whatAreCookies.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.cookies.sections.whatAreCookies.content[language]}
              </p>
            </section>

            {/* Types of Cookies Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.cookies.sections.typesOfCookies.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.cookies.sections.typesOfCookies.content[language]}
              </p>
              
              {/* Cookie Types List */}
              <div className="mt-4 space-y-3">
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-l-green-500">
                  <h4 className="font-semibold text-green-800">
                    {language === 'he' && 'עוגיות הכרחיות'}
                    {language === 'ar' && 'ملفات تعريف الارتباط الضرورية'}
                    {language === 'en' && 'Essential Cookies'}
                  </h4>
                  <p className="text-sm text-green-700 mt-1">
                    {language === 'he' && 'נדרשות לתפקוד בסיסי של האתר'}
                    {language === 'ar' && 'مطلوبة للوظائف الأساسية للموقع'}
                    {language === 'en' && 'Required for basic website functionality'}
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-l-blue-500">
                  <h4 className="font-semibold text-blue-800">
                    {language === 'he' && 'עוגיות העדפות'}
                    {language === 'ar' && 'ملفات تعريف الارتباط للتفضيلات'}
                    {language === 'en' && 'Preference Cookies'}
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    {language === 'he' && 'שומרות את הגדרות השפה שלכם'}
                    {language === 'ar' && 'تحفظ إعدادات اللغة الخاصة بكم'}
                    {language === 'en' && 'Save your language settings'}
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-l-yellow-500">
                  <h4 className="font-semibold text-yellow-800">
                    {language === 'he' && 'עוגיות אנליטיקה'}
                    {language === 'ar' && 'ملفات تعريف الارتباط التحليلية'}
                    {language === 'en' && 'Analytics Cookies'}
                  </h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    {language === 'he' && 'עוזרות לנו להבין איך משתמשים באתר (באישורכם)'}
                    {language === 'ar' && 'تساعدنا في فهم كيفية استخدام الموقع (بموافقتكم)'}
                    {language === 'en' && 'Help us understand how the website is used (with your consent)'}
                  </p>
                </div>
              </div>
            </section>

            {/* Managing Cookies Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.cookies.sections.manageCookies.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.cookies.sections.manageCookies.content[language]}
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                {translations.footer.contact[language]}
              </h3>
              <p className="text-gray-700">
                {language === 'he' && 'לשאלות על מדיניות העוגיות, אנא פנו אלינו בדוא"ל:'}
                {language === 'ar' && 'للأسئلة حول سياسة ملفات تعريف الارتباط، يرجى الاتصال بنا عبر البريد الإلكتروني:'}
                {language === 'en' && 'For questions about our cookie policy, please contact us by email:'}
              </p>
              <p className="text-blue-900 font-medium mt-1" dir="ltr">
                privacy@equal-partnership.org
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};