import { useState } from "react";
import IconAccordion from "/report/IconAccordion.png";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    faqs: FAQItem[];
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openSection, setOpenSection] = useState<number | null>(null);

    const sections: FAQSection[] = [
        {
            title: "Ümumi istifadə",
            faqs: [
                {
                    question: "Milli İqtisadiyyatın Data Portalı nədir?",
                    answer: "Portal, Azərbaycan iqtisadiyyatına dair açıq və etibarlı məlumatları təqdim edən rəqəmsal platformadır. Burada sektorlar üzrə statistikalar, analitik hesabatlar və beynəlxalq göstəricilər bir yerdə toplanır."
                },
                {
                    question: "Portalı istifadə etmək üçün qeydiyyat mütləqdirmi?",
                    answer: "Xeyr. Qonaq istifadəçilər açıq məlumatlara baxa bilərlər. Ancaq bəzi funksiyalar (məlumat yükləmə, şəxsi analitika, abunəliklər) üçün qeydiyyat tələb olunur."
                },
                {
                    question: "Sayt hansı dilləri dəstəkləyir?",
                    answer: "Hazırda Azərbaycan, İngilis və Rus dilləri dəstəklənir. Dil dəyişimi sağ yuxarı küncdə yerləşən dil menyusundan həyata keçirilir."
                },
            ],
        },
        {
            title: "Hesab və şifrə",
            faqs: [
                {
                    question: "Şifrəmi unutdum, necə bərpa edə bilərəm?",
                    answer: " Giriş səhifəsindəki “Şifrəni unutdum” linkinə klikləyin və e-poçt ünvanınızı daxil edin. Bərpa linki göndəriləcək"
                },
                {
                    question: "Hesabım bloklanıb, nə etməliyəm?",
                    answer: "3 uğursuz giriş cəhdindən sonra hesab təhlükəsizlik məqsədilə bloklanır. Admin panelindən aktivləşdirmə üçün əlaqə forması ilə müraciət edin."
                },
                {
                    question: "E-poçt ünvanımı necə dəyişə bilərəm?",
                    answer: "Profil → Hesab ayarları bölməsinə keçin və yeni e-poçt ünvanınızı daxil edin. Təsdiq üçün e-poçt göndəriləcək."
                },
                {
                    question: "Premium abunəliyə necə keçə bilərəm?",
                    answer: "Profilinizdə “Abunəliklərim” bölməsinə daxil olub plan seçə və ödəniş edə bilərsiniz."
                },
            ],
        },
        {
            title: "Məlumatlar və analitika",
            faqs: [
                {
                    question: "Analitik hesabatlara necə baxa bilərəm?",
                    answer: "Sol menyudan “Analitika” və ya “Araşdırma və Hesabatlar” bölməsini seçərək dashboard-lara baxa və PDF/Excel formatında yükləyə bilərsiniz (icazəniz varsa)."
                },
                {
                    question: "Tableau dashboard-ları niyə açılmır?",
                    answer: " İnternet bağlantınızı və brauzer dəstəyini yoxlayın. Əgər hələ də problem yaşanırsa, texniki dəstəyə yazın."
                },
                {
                    question: "Analitik məlumatları necə paylaşa bilərəm?",
                    answer: "Yalnız açıq (public) hesabatlar üçün paylaşım linki mövcuddur. Məhdud hesabatlar paylaşılmır."
                },
                {
                    question: "Məlumatlar hansı tezliklə yenilənir?",
                    answer: "Əksər dashboard-lar real vaxtda və ya gündəlik yenilənir. Yenilənmə tezliyi hesabatın növündən asılıdır."
                },
            ],
        },
        {
            title: "Təhlükəsizlik",
            faqs: [
                {
                    question: "Analitik hesabatlara necə baxa bilərəm?",
                    answer: " Yükləmələr log olunur, lakin şəxsi məlumatlarınız gizli saxlanılır və üçüncü tərəflərlə paylaşılmır."
                },
            ],
        },
        {
            title: "Texniki dəstək",
            faqs: [
                {
                    question: "Saytda texniki nasazlıq baş verərsə nə etməliyəm?",
                    answer: "Əlaqə formasını dolduraraq texniki komandaya müraciət edə bilərsiniz. Chatbot da ilkin cavab verə bilər."
                },
                {
                    question: "Chatbot necə işləyir?",
                    answer: "Chatbot sadə sualları avtomatik cavablandırır. Əgər cavab tapa bilməzsə, sizi canlı dəstəyə yönləndirir."
                },
                {
                    question: "Portal mobil cihazlarda işləyirmi?",
                    answer: "Bəli. Portal tam responsive dizayna malikdir və bütün cihazlarda istifadə oluna bilir."
                },
                {
                    question: "PDF və Excel sənədləri yüklənmir, nə edə bilərəm?",
                    answer: "Brauzerinizin pop-up və yükləmə icazələrini yoxlayın. Problem davam edərsə, texniki dəstəyə yazın."
                },
            ],
        },
    ];


    const toggleAccordion = (sectionIndex: number, faqIndex: number) => {
        if (openSection === sectionIndex && openIndex === faqIndex) {
            setOpenSection(null);
            setOpenIndex(null);
        } else {
            setOpenSection(sectionIndex);
            setOpenIndex(faqIndex);
        }
    };

    return (
        <div className="md:w-[90%] px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
            <div className="w-[830px]">
                <h1 className="text-2xl sm:text-4xl font-medium mb-10 text-[#F9F9F9]">Tez-tez verilən suallar</h1>

                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-10">
                        <h3 className="text-3xl md:text-4xl lg:text-[36px] text-white mb-6">{section.title}</h3>
                        {section.faqs.map((faq, faqIndex) => {
                            const isOpen = openSection === sectionIndex && openIndex === faqIndex;

                            return (
                                <div
                                    key={faqIndex}
                                    className="mt-6 border rounded-[8px] cursor-pointer text-white"
                                    style={{ borderColor: "#373641" }}
                                    onClick={() => toggleAccordion(sectionIndex, faqIndex)}
                                >
                                    <div className="flex justify-between items-center p-5">
                                        <h3 className="text-[20px]">{faq.question}</h3>
                                        <img
                                            className={`w-7 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            src={IconAccordion}
                                            alt="IconAccordion"
                                        />
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-500`} style={{ maxHeight: isOpen ? "500px" : "0px" }}>
                                        <p className="text-[20px] bg-[#65558F6E] p-5">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
