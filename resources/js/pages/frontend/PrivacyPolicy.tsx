import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ open, onOpenChange }) => {
  const { language, direction, isRTL } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`max-w-4xl max-h-[80vh] ${isRTL ? 'text-right' : 'text-left'}`} dir={direction}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-900">
            {translations.privacy.title[language]}
          </DialogTitle>
          <p className="text-sm text-gray-600">
            {translations.privacy.lastUpdated[language]}: {new Date().toLocaleDateString()}
          </p>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Data Collection Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.privacy.sections.dataCollection.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.sections.dataCollection.content[language]}
              </p>
            </section>

            {/* Data Use Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.privacy.sections.dataUse.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.sections.dataUse.content[language]}
              </p>
            </section>

            {/* Data Security Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.privacy.sections.dataSecurity.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.sections.dataSecurity.content[language]}
              </p>
            </section>

            {/* Rights Section */}
            <section>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translations.privacy.sections.rights.title[language]}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {translations.privacy.sections.rights.content[language]}
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                {translations.footer.contact[language]}
              </h3>
              <p className="text-gray-700">
                {language === 'he' && 'לשאלות על מדיניות הפרטיות, אנא פנו אלינו בדוא"ל:'}
                {language === 'ar' && 'للأسئلة حول سياسة الخصوصية، يرجى الاتصال بنا عبر البريد الإلكتروني:'}
                {language === 'en' && 'For questions about our privacy policy, please contact us by email:'}
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