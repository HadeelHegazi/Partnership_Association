import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const ContactSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-100" id="section-5">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-blue-900 ${isRTL ? 'text-center' : 'text-center'}`}>
          {translations.contact.title[language]}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className={`text-2xl text-blue-900 ${isRTL ? 'text-center' : 'text-center'}`}>
                {translations.contact.title[language]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" dir={direction}>
                <div>
                  <Label htmlFor="name" className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {translations.contact.form.name[language]}
                  </Label>
                                     <Input
                     id="name"
                     name="name"
                     type="text"
                     value={formData.name}
                     onChange={handleInputChange}
                     required
                     className="mt-1 shadow-md focus:shadow-lg transition-shadow duration-200"
                     dir={direction}
                   />
                </div>
                
                <div>
                  <Label htmlFor="email" className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {translations.contact.form.email[language]}
                  </Label>
                                     <Input
                     id="email"
                     name="email"
                     type="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     required
                     className="mt-1 shadow-md focus:shadow-lg transition-shadow duration-200"
                     dir="ltr"
                   />
                </div>
                
                <div>
                  <Label htmlFor="message" className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {translations.contact.form.message[language]}
                  </Label>
                                     <Textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     rows={4}
                     className="mt-1 shadow-md focus:shadow-lg transition-shadow duration-200"
                     dir={direction}
                   />
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button 
                    type="submit" 
                    className="bg-blue-900 hover:bg-blue-800 text-white flex-1"
                  >
                    {translations.contact.form.submit[language]}
                  </Button>
                  
                  <Button 
                    type="button"
                    className="bg-yellow-600 hover:bg-yellow-500 text-white flex-1"
                  >
                    {translations.contact.form.donate[language]}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};