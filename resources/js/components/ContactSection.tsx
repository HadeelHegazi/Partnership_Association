import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'react-toastify';

export const ContactSection: React.FC = () => {
    const { language, direction } = useLanguage();
    const isRTL = direction === 'rtl';

    const { data, setData, errors, processing, post, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('join-us.store'), {
            onSuccess: () => {
                reset();
                toast.success("Form Submited Successfully");
            },
            preserveScroll: true,
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key : string = e.target.name;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setData(key, e.target.value)
    };

    return (
        <section className="bg-blue-50 py-16" id="section-5">
            <div className="container mx-auto px-4">
                <h2 className={`mb-12 text-4xl font-bold text-blue-900 ${isRTL ? 'text-center' : 'text-center'}`}>
                    {translations.contact.title[language]}
                </h2>

                <div className="mx-auto max-w-2xl">
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
                                        value={data.name}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 shadow-md transition-shadow duration-200 focus:shadow-lg"
                                        dir={direction}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="email" className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                                        {translations.contact.form.email[language]}
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 shadow-md transition-shadow duration-200 focus:shadow-lg"
                                        dir="ltr"
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <Label htmlFor="message" className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                                        {translations.contact.form.message[language]}
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="mt-1 shadow-md transition-shadow duration-200 focus:shadow-lg"
                                        dir={direction}
                                    />
                                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                                </div>

                                <div className={`flex flex-col gap-4 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                                    <Button type="submit" disabled={processing} className="flex-1 bg-blue-900 text-white hover:bg-blue-800">
                                        {translations.contact.form.submit[language]}
                                    </Button>

                                    <Button type="button" className="flex-1 bg-yellow-600 text-white hover:bg-yellow-500">
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
