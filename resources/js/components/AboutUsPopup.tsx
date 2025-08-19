import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

interface AboutUsPopupProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const aboutUsContent = {
    he: {
        title: "עוד עלינו",
        whoWeAre: {
            title: "מי אנחנו",
            content: "שווים בשותפות – עמותה שנוסדה מתוך אמונה עמוקה כי עתיד החברה בישראל תלוי ביכולתנו – ערבים ויהודים – לחיות יחד בשוויון, בכבוד הדדי ובשותפות אמיתית. העמותה פועלת לבניית גשרים, להסרת מחסומי ניכור וחוסר אמון, וליצירת שפה חדשה של חיים משותפים, אחריות אזרחית וצדק חברתי."
        },
        whatWeDo: {
            title: "מה אנחנו עושים",
            content: "העמותה מפתחת ומובילה תוכניות קהילתיות, חינוכיות וציבוריות שמטרתן:",
            items: [
                "בניית חברה משותפת: מפגשים, יוזמות תרבות ופעילויות שטח שמקרבות בין קהילות.",
                "חינוך לשותפות ולדמוקרטיה: פרויקטים חינוכיים – פורמליים ובלתי פורמליים – לילדים, לנוער ולמבוגרים, להטמעת ערכי סובלנות, קבלת האחר ודיאלוג.",
                "התמודדות עם אלימות ופשיעה: עבודה עם הרשויות, המשטרה, הנהגה מקומית ופעילים אזרחיים למציאת פתרונות מערכתיים.",
                "העצמה קהילתית: ליווי מנהיגות צעירה ותמיכה ביוזמות חברתיות המחזקות את החברה האזרחית.",
                "השפעה על מדיניות ציבורית: פעילות תקשורתית, משפטית ופרלמנטרית להשגת שוויון וצדק חברתי לכולם."
            ]
        },
        whyNow: {
            title: "למה עכשיו",
            content: "המציאות החברתית בישראל מתאפיינת בעלייה ברמת האלימות – במיוחד בחברה הערבית – ובתחושת חוסר ביטחון גוברת. במקביל, האמון בין הקהילות נשחק והפערים החברתיים מעמיקים. במצב זה, אנו מאמינים שהדרך היחידה קדימה היא שותפות אמיצה ואמיתית – המבוססת על עשייה חינוכית, קהילתית ופוליטית, ולא רק על סיסמאות."
        },
        values: {
            title: "הערכים שמנחים אותנו",
            items: [
                "שוויון מלא – לא טובה, אלא זכות יסוד.",
                "כבוד הדדי – בסיס לחיים משותפים.",
                "שותפות אמיצה – איננו מוותרים מול הקשיים.",
                "אחריות אזרחית – אנו נושאים באחריות לחברתנו.",
                "תקווה – משום שהשינוי אפשרי."
            ]
        },
        contact: {
            title: "פרטי התקשרות",
            email: "דוא\"ל",
            phone: "טלפון",
            location: "מיקום",
            social: "רשתות חברתיות"
        }
    },
    ar: {
        title: "المزيد عنا",
        whoWeAre: {
            title: "من نحن",
            content: "שווים בשותפות (متساوون في الشراكة) – جمعية تأسست انطلاقًا من إيمان عميق بأن مستقبل المجتمع في إسرائيل مرتبط بقدرتنا – عربًا ويهودًا – على العيش معًا بالمساواة، الاحترام المتبادل، والشراكة الحقيقية. تعمل الجمعية على بناء جسور، إزالة الحواجز من عدم الثقة والاغتراب، وخلق لغة جديدة للحياة المشتركة، المسؤولية المدنية، والعدالة الاجتماعية."
        },
        whatWeDo: {
            title: "ماذا نفعل",
            content: "الجمعية تطوّر وتقود برامج مجتمعية، تربوية وجماهيرية تهدف إلى:",
            items: [
                "بناء مجتمع مشترك: لقاءات، مبادرات ثقافية، وأنشطة ميدانية تقرّب بين المجتمعات.",
                "التربية على الشراكة والديمقراطية: مشاريع تعليمية – رسمية وغير رسمية – للأطفال، الشباب والبالغين لترسيخ قيم التسامح، قبول الآخر والحوار.",
                "مكافحة العنف والجريمة: عمل مع السلطات، الشرطة، القيادة المحلية والناشطين المدنيين لإيجاد حلول منهجية.",
                "التمكين المجتمعي: مرافقة قيادات شابة ودعم مبادرات اجتماعية تعزّز المجتمع المدني.",
                "التأثير على السياسات العامة: نشاط إعلامي، قانوني وبرلماني لتحقيق مساواة وعدالة اجتماعية للجميع."
            ]
        },
        whyNow: {
            title: "لماذا الآن",
            content: "الواقع الاجتماعي في إسرائيل يتسم بتصاعد العنف، خاصةً في المجتمع العربي، وبشعور متزايد بانعدام الأمان. في الوقت نفسه، الثقة بين المجتمعات تتآكل والفجوات الاجتماعية تتعمّق. في هذا الوضع، نؤمن أن الطريق الوحيدة للأمام هي شراكة جريئة وحقيقية – مبنية على عمل تربوي، مجتمعي وسياسي، وليست مجرد شعارات."
        },
        values: {
            title: "القيم التي تقودنا",
            items: [
                "المساواة الكاملة – ليست مجاملة، بل حق أساسي.",
                "الاحترام المتبادل – أساس للحياة المشتركة.",
                "شراكة جريئة – لا نتنازل أمام الصعاب.",
                "المسؤولية المدنية – نتحمّل مسؤولية مجتمعنا.",
                "الأمل – لأن التغيير ممكن."
            ]
        },
        contact: {
            title: "تفاصيل الاتصال",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            location: "الموقع",
            social: "وسائل التواصل الاجتماعي"
        }
    },
    en: {
        title: "Read More About Us",
        whoWeAre: {
            title: "Who We Are",
            content: "Shavim b'Shutafut (Equal in Partnership) – an association founded on the deep belief that the future of society in Israel depends on our ability – Arabs and Jews – to live together in equality, mutual respect, and genuine partnership. The association works to build bridges, remove barriers of distrust and alienation, and create a new language of shared life, civic responsibility, and social justice."
        },
        whatWeDo: {
            title: "What We Do",
            content: "The association develops and leads community, educational, and public programs aimed at:",
            items: [
                "Building a shared society: Encounters, cultural initiatives, and field activities that bring communities closer together.",
                "Education for partnership and democracy: Formal and informal educational projects for children, youth, and adults to instill values of tolerance, acceptance, and dialogue.",
                "Combating violence and crime: Cooperation with authorities, police, local leadership, and civil activists to find systemic solutions.",
                "Community empowerment: Supporting young leadership and social initiatives that strengthen civil society.",
                "Influencing public policy: Media, legal, and parliamentary advocacy to achieve equality and social justice for all."
            ]
        },
        whyNow: {
            title: "Why Now",
            content: "Israel's social reality is marked by rising violence – especially in Arab society – and a growing sense of insecurity. At the same time, trust between communities is eroding, and social gaps are widening. In this context, we believe the only way forward is through a bold and genuine partnership – built on educational, community, and political action, not just slogans."
        },
        values: {
            title: "Our Guiding Values",
            items: [
                "Full equality – not a favor, but a fundamental right.",
                "Mutual respect – the basis of shared life.",
                "Bold partnership – we do not give up in the face of challenges.",
                "Civic responsibility – we take responsibility for our society.",
                "Hope – because change is possible."
            ]
        },
        contact: {
            title: "Contact Details",
            email: "Email",
            phone: "Phone",
            location: "Location",
            social: "Social Media"
        }
    }
};

export const AboutUsPopup: React.FC<AboutUsPopupProps> = ({ open, onOpenChange }) => {
    const { language, direction } = useLanguage();
    const isRTL = direction === 'rtl';
    const content = aboutUsContent[language];

    const handleJoinUs = () => {
        // Scroll to join us section
        const joinUsSection = document.getElementById('section-4');
        if (joinUsSection) {
            joinUsSection.scrollIntoView({ behavior: 'smooth' });
        }
        onOpenChange(false);
    };

    const handleDonate = () => {
        // Scroll to join us section (where donate button is)
        const joinUsSection = document.getElementById('section-4');
        if (joinUsSection) {
            joinUsSection.scrollIntoView({ behavior: 'smooth' });
        }
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[1400px] max-w-[1400px] max-h-[90vh] overflow-y-auto p-8" dir={direction}>
                <DialogHeader className="relative mb-8">
                    <DialogTitle className={`text-4xl font-bold text-blue-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {content.title}
                    </DialogTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-0 right-0 h-10 w-10 p-0"
                        onClick={() => onOpenChange(false)}
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </DialogHeader>

                <div className="space-y-10">
                    {/* Who We Are */}
                    <section>
                        <h3 className={`text-3xl font-bold text-blue-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whoWeAre.title}
                        </h3>
                        <p className={`text-gray-700 leading-relaxed text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whoWeAre.content}
                        </p>
                    </section>

                    {/* What We Do */}
                    <section>
                        <h3 className={`text-3xl font-bold text-blue-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whatWeDo.title}
                        </h3>
                        <p className={`text-gray-700 mb-6 text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whatWeDo.content}
                        </p>
                        <ul className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whatWeDo.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="text-yellow-600 font-bold mt-1 text-xl">•</span>
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Why Now */}
                    <section>
                        <h3 className={`text-3xl font-bold text-blue-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whyNow.title}
                        </h3>
                        <p className={`text-gray-700 leading-relaxed text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.whyNow.content}
                        </p>
                    </section>

                    {/* Values */}
                    <section>
                        <h3 className={`text-3xl font-bold text-blue-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.values.title}
                        </h3>
                        <ul className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.values.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="text-yellow-600 font-bold mt-1 text-xl">•</span>
                                    <span className="text-gray-700 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <section className="pt-8 border-t border-gray-200">
                        <h3 className={`text-3xl font-bold text-blue-800 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {content.contact.title}
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Mail size={24} className="text-blue-600" />
                                    <div>
                                        <p className="text-base text-gray-600 font-medium">{content.contact.email}</p>
                                        <p className="text-gray-800 font-semibold text-lg">info@equal-partnership.org</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone size={24} className="text-blue-600" />
                                    <div>
                                        <p className="text-base text-gray-600 font-medium">{content.contact.phone}</p>
                                        <p className="text-gray-800 font-semibold text-lg" dir="ltr">+972-50-123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin size={24} className="text-blue-600" />
                                    <div>
                                        <p className="text-base text-gray-600 font-medium">{content.contact.location}</p>
                                        <p className="text-gray-800 font-semibold text-lg">
                                            {language === 'he' ? 'ישראל' : language === 'ar' ? 'إسرائيل' : 'Israel'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="space-y-6">
                                <h4 className={`text-xl font-semibold text-blue-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {content.contact.social}
                                </h4>
                                <div className={`flex gap-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors p-4 rounded-lg hover:bg-blue-50"
                                    >
                                        <Facebook size={28} />
                                        <span className="font-medium text-lg">Facebook</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-yellow-600 hover:text-yellow-800 transition-colors p-4 rounded-lg hover:bg-yellow-50"
                                    >
                                        <Instagram size={28} />
                                        <span className="font-medium text-lg">Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Action Buttons */}
                    <section className="pt-8 border-t border-gray-200">
                        <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                            <Button 
                                onClick={handleJoinUs}
                                size="lg" 
                                className="bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white px-12 py-4 text-xl shadow-lg"
                            >
                                {language === 'he' ? 'הצטרפו אלינו' : language === 'ar' ? 'انضموا إلينا' : 'Join Us'}
                            </Button>
                            
                            <Button 
                                onClick={handleDonate}
                                size="lg" 
                                className="bg-yellow-600 hover:bg-yellow-500 text-white px-12 py-4 text-xl shadow-lg"
                            >
                                {language === 'he' ? 'תרמו' : language === 'ar' ? 'تبرعوا' : 'Donate'}
                            </Button>
                        </div>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
};
