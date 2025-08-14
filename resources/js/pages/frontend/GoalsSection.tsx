import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, GraduationCap, Shield, Zap, Scale } from 'lucide-react';

const icons = [Users, GraduationCap, Shield, Zap, Scale];
  const colors = ['text-blue-900', 'text-yellow-600', 'text-blue-800', 'text-yellow-500', 'text-blue-700'];
  const bgColors = ['bg-blue-50', 'bg-yellow-50', 'bg-blue-50', 'bg-yellow-50', 'bg-blue-50'];

export const GoalsSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  
  return (
    <section className="py-16 bg-white" id="section-2">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-blue-900 ${isRTL ? 'text-center' : 'text-center'}`}>
          {translations.goals.title[language]}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {translations.goals.items.map((goal, index) => {
            const Icon = icons[index];
            const colorClass = colors[index];
            const bgColorClass = bgColors[index];
            
            return (
              <Card key={index} className={`${bgColorClass} border-none shadow-md hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className={`pb-4 ${isRTL ? 'text-center' : 'text-center'}`}>
                  <div className={`mx-auto w-16 h-16 ${bgColorClass} rounded-full flex items-center justify-center mb-4 border-2 border-current ${colorClass}`}>
                    <Icon size={32} className={colorClass} />
                  </div>
                  <CardTitle className={`text-xl ${colorClass}`}>
                    {goal.title[language]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                    {goal.description[language]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};