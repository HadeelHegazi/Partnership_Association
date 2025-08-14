import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Heart, Users, Handshake, Share2 } from 'lucide-react';

const icons = [Heart, Users, Handshake, Share2];
  const colors = ['text-yellow-600', 'text-blue-900', 'text-yellow-500', 'text-blue-800'];
  const borderColors = ['border-l-yellow-600', 'border-l-blue-900', 'border-l-yellow-500', 'border-l-blue-800'];

export const GetInvolvedSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50" id="section-4">
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${isRTL ? 'text-center' : 'text-center'}`}>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            {translations.getInvolved.title[language]}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {translations.getInvolved.items.map((item, index) => {
            const Icon = icons[index];
            const colorClass = colors[index];
            const borderColorClass = isRTL ? borderColors[index].replace('border-l-', 'border-r-') : borderColors[index];
            
            return (
              <Card key={index} className={`bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 ${borderColorClass} ${isRTL ? 'border-l-0 border-r-4' : ''}`}>
                <CardHeader className="pb-4">
                  <div className={`flex items-center gap-3 ${colorClass} ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <Icon size={24} />
                    <CardTitle className="text-lg">
                      {item.title[language]}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {item.description[language]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white px-12 py-4 text-xl shadow-lg"
          >
            {translations.getInvolved.button[language]}
          </Button>
        </div>
      </div>
    </section>
  );
};