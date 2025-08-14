// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      search: "Search",
      login: "Login",
      about: "About Us",
      contact: "Contact",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      home: "Home Page",
      analytics: "Analytics",
      report: "Research and Reports",
      help: "Help and Support",
      "data-portal": "National Economy <br /> Data portal",
      "data-world": "Journey into the World of Data",
      faq:"FAQ",
       "user_instructions": "User \ninstructions",
       "contact_form": "Contact \nform"
    },
  },
  az: {
    translation: {
      search: "Axtarış",
      login: "Daxil ol",
      about: "Haqqımızda",
      contact: "Əlaqə",
      terms: "İstifadə Şərtləri",
      privacy: "Gizlilik Siyasəti",
      home: "Ana Səhifə",
      analytics: "Analitika",
      report: "Araşdırma və hesabatlar",
      help: "Yardım və Dəstək",
      "data-portal": "Milli iqtisadiyyatın <br /> Data portalı",
      "data-world": "Data dünyasına səyahət edin",
      faq: "Tez-tez \nverilən suallar",
        "user_instructions": "İstifadəçi \ntəlimatları",
        "contact_form": "Əlaqə \nforması"

        
    },
  },
  ru: {
    translation: {
      search: "Поиск",
      login: "Войти",
      about: "О нас",
      contact: "Контакты",
      terms: "Условия обслуживания",
      privacy: "Политика конфиденциальности",
      home: "Главная страница",
      analytics: "Аналитика",
      report: "Исследования и отчеты",
      help: "Помощь и поддержка",
      "data-portal": "Портал данных <br /> национальной экономики",
      "data-world": "Путешествуйте по миру данных",
      faq: "Часто \nзадаваемые вопросы",
      "user_instructions": "Инструкция \nпользователя",
      "contact_form": "Форма \nобратной связи"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az", // Default dil
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
