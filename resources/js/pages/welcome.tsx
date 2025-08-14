import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GoalsSection } from '@/components/GoalsSection';
import { WhyNowSection } from '@/components/WhyNowSection';
import { GetInvolvedSection } from '@/components/GetInvolvedSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';
import { CookiePolicy } from '@/components/CookiePolicy';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { Header } from '@/components/Header';
import { ToastContainer } from 'react-toastify';

export default function Welcome() {
    const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
    const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false);

    return (
        <>
            <ToastContainer/>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <LanguageProvider>
                <div className="min-h-screen bg-white">
                    <Header />
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <GoalsSection />
                        <WhyNowSection />
                        <GetInvolvedSection />
                        <ContactSection />
                    </main>
                    <Footer onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)} onOpenCookiePolicy={() => setCookiePolicyOpen(true)} />

                    {/* Privacy and Cookie Policy Modals */}
                    <PrivacyPolicy open={privacyPolicyOpen} onOpenChange={setPrivacyPolicyOpen} />
                    <CookiePolicy open={cookiePolicyOpen} onOpenChange={setCookiePolicyOpen} />

                    {/* Cookie Consent Banner */}
                    <CookieConsentBanner onOpenCookiePolicy={() => setCookiePolicyOpen(true)} />
                </div>
            </LanguageProvider>
        </>
    );
}
