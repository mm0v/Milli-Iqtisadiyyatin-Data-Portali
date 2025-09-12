// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      search: "Search",
      login: "Login",
      register: "Register",
      aboutUs: "About Us",
      contact: "Contact",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      home: "Home Page",
      analytics: "Analytics",
      reports: "Research and Report",
      help: "Help and Support",
      "data-portal": "National Economy <br /> Data portal",
      "data-world": "Journey into the World of Data",
      accessibility: {
        menuTitle: "Accessibility Menu",
        darkMode: "Dark Mode",
        voiceAccess: "Voice Access",
        magnifier: "Magnifier",
        language: "Language"
      },
      chatBot: {
        contactUs: "Contact us...",
        message: "What types of statistics and visualization tools are available on the national economy data portal?"
      },
      about: {
        heroTitle: "Who Are We?",
        paragraph: "The National Economy Data Portal is an innovative information platform created by the Center for Analysis and Coordination of the Fourth Industrial Revolution (4SIM). The portal aims to bring together open, reliable, and real-time updated data on the Azerbaijani economy in a single place, expand analytical capabilities, and support decision-making processes.",
        goal: {
          title: "Purpose",
          description: "The National Economy Data Portal aims to provide government agencies, businesses, investors, and researchers with reliable information by increasing the transparency and accessibility of data on the Azerbaijani economy. The portal will enable them to monitor economic trends, make data-based decisions, and formulate effective policies."
        },
        mission: {
          title: "Mission",
          description: "To form an open and systematic information environment for the national economy based on modern data analytics methods and digital technologies. The portal will contribute to a deeper and more accurate understanding of economic processes by ensuring the collection and visualization of data on a single platform and expanding analytical capabilities."
        }
      },
      analytic: {
        indicators: "Economic indicators",
        demonstrators: "International indicators",
        infobase: "Open database",
        macro: "Macro and Microeconomic Indicators",
        sectors: "Economic Indicators by Sectors",
        demo: "Demographic Indicators",
        state: "State services indicators",
        crime: "Crime and Legal Violations Indicators",
        market: "Labor Market Indicators",
        global: "Global Innovation Index",
        aiIndex: "Artificial Intelligence Readiness Index",
        eGov: "E-Government Development Index",
        visualization: "If you want your data to be visualized, you can contact us.",
        allData: "All Data",
        health: "Health",
        tourism: "Tourism",
        energy: "Energy",
        demographic_indicators: "Demographic Indicators",
        agriculture: "Agriculture",
        economic_map: "Interactive Economic Map",
        statistical_calendar: "Statistical Calendar",
        open_data_policy: "Azerbaijan Open Data Policy",
        data_request: "Dataset Request"
      },
      report: {
        publications: "Academic Publications",
        reports: "Reports",
        download: "Download",
        restrictionEconomical: "Sign up for more economical researches",
        filter: {
          title: "Filter",
          date: "Date",
          field: "Field",
          author: "Author"
        }
      },
      auth: {
        password: "Password",
        confirmPass: "Confirm Password",
        alert: "Use 8 or more characters, including symbols",
        number: "Number",
        workPlace: "WorkPlace",
        photo: "Photo",
        photoSize: " MB file size limit. Formats: JPEG, PNG",
        policy: "By creating an account, you agree to our <1>Terms of Service</1> and <3>Privacy Policy</3>.",
        verify: "Please check the box to continue.",
        notRobot: "I'm not a robot",
        login: {
          subTitle: "Don't have an Account? <1>Create Account</1>",
          userName: "E-mail or userName",
          password: "Password",
          forgotPass: "Forgot Password",
          remember: "Remember Me",
          signIn: "Sign In",
          orContinue: "or Continue with Google",
          continue: "Continue with Google"
        },
        register: {
          name: "Name",
          surname: "Surname",
          eMail: "E-mail",
          haveAccount: "Already have an account? <1>Sign in</1>",
          signUp: "Sign Up",
        },
        forgotPass: {
          title: "Forgot Your Password?",
          subTitle: "Don't worry! We'll send you a link to reset your password.",
          eMail: "Enter your email address",
          send: "Send Again"
        },
        details: {
          title: "Welcome",
          subTitle: "Please fill in the required fields",
          date: "Date",
          complete: "Complete Account",
        },
        newPassword: {
          title: "Create new password",
          updatedTitle: "Your password has been updated!",
          save: "Save",
          close: "Close",
        },
      }
    },
  },
  az: {
    translation: {
      search: "Axtarış",
      login: "Daxil ol",
      register: "Hesab Yarat",
      aboutUs: "Haqqımızda",
      contact: "Əlaqə",
      terms: "İstifadə Şərtləri",
      privacy: "Gizlilik Siyasəti",
      home: "Ana Səhifə",
      analytics: "Analitika",
      reports: "Araşdırma və hesabatlar",
      help: "Yardım və Dəstək",
      "data-portal": "Milli iqtisadiyyatın <br /> Data portalı",
      "data-world": "Data dünyasına səyahət edin",
      accessibility: {
        menuTitle: "Əlçatanlıq Menyusu",
        darkMode: "Qaranlıq rejim",
        voiceAccess: "Səsli giriş",
        magnifier: "Böyüdücü",
        language: "Dil"
      },
      chatBot: {
        contactUs: "Bizə Yazın...",
        message: "Milli iqtisadiyyatın data portalında hansı statistika növləri və vizuallaşdırma alətləri var?"
      },
      about: {
        heroTitle: "Biz Kimik?",
        paragraph: "Milli İqtisadiyyatın Data Portalı, Dördüncü Sənaye İnqilabının Təhlili və Koordinasiya Mərkəzi (4SİM) tərəfindən yaradılan innovativ məlumat platformasıdır. Portalın məqsədi Azərbaycan iqtisadiyyatı üzrə açıq, etibarlı və real vaxt rejimində yenilənən məlumatları vahid məkanda cəmləşdirmək, analitik imkanları genişləndirmək və qərarvermə proseslərini dəstəkləməkdir.",
        goal: {
          title: "Məqsəd",
          description: " Milli İqtisadiyyatın Data Portalı Azərbaycan iqtisadiyyatına dair məlumatların şəffaflığını və əlçatanlığını artıraraq dövlət qurumlarını, biznesləri, investorları və tədqiqatçıları etibarlı məlumatlarla təmin etməyi hədəfləyir. Portal vasitəsilə iqtisadi trendləri izləmək, data əsaslı qərarlar vermək və effektiv siyasət formalaşdırmaq mümkün olacaq."
        },
        mission: {
          title: "Missiya",
          description: "Müasir data analitika metodları və rəqəmsal texnologiyalar əsasında milli iqtisadiyyata dair açıq və sistemli məlumat mühitini formalaşdırmaqdır. Portal, məlumatların vahid platformada toplanmasını, vizuallaşdırılmasını və analitik imkanların genişləndirilməsini təmin edərək, iqtisadi proseslərin daha dərin və dəqiq anlaşılmasına töhfə verəcək."
        },
      },
      analytic: {
        indicators: "İqtisadi göstəricilər",
        demonstrators: "Beynəlxalq göstəricilər",
        infobase: "Açıq Məlumat Bazası",
        macro: "Makro və mikro iqtisadi göstəricilər",
        sectors: "Sektorlar üzrə iqtisadi göstəricilər",
        demo: "Demoqrafik göstəricilər",
        state: "Dövlət xidmətləri üzrə göstəricilər",
        crime: "Cinayətkarlıq və hüquqpozmalar üzrə göstəricilər",
        market: "Əmək bazarı üzrə göstəricilər",
        global: "Qlobal innovasiyal indeksi",
        aiIndex: "Süni intellekt hazırlıq indeksi",
        eGov: "Elektron hökumətin inkişafı indeksi",
        visualization: "Məlumatlarınızın vizuallaşdırılmasını istəyirsinizsə, bizə müraciət edə bilərsiniz.",
        allData: "Bütün datalar",
        health: "Səhiyyə",
        tourism: "Turizm",
        energy: "Enerji",
        demographic_indicators: "Demoqrafik göstəricilər",
        agriculture: "Kənd təsərrüfatı",
        economic_map: "Xəritə üzrə iqtisadi göstəricilər",
        statistical_calendar: "Statistik təqvim",
        open_data_policy: "Azərbaycan açıq məlumat siyasəti",
        data_request: "Dataset sorğusu"
      },
      report: {
        publications: "Akademik Nəşrlər",
        reports: "Hesabatlar",
        download: "Yüklə",
        restrictionEconomical: "Daha çox iqtisadi tədqiqatlar üçün qeydiyyatdan keçin",
        filter: {
          title: "Filter",
          date: "Tarix",
          field: "Sektor",
          author: "Müəllif"
        }
      },
      auth: {
        verify: "Zəhmət olmasa, davam etmək üçün qutunu işarələyin.",
        password: "Şifrə",
        confirmPass: "Şifrəni təsdiqlə",
        alert: "8 və ya daha çox simvoldan istifadə edin",
        number: "Nömrə",
        workPlace: "İş yeri",
        photo: "Şəkil",
        photoSize: " MB-dan çox olmamalıdır. JPEG, PNG formatında",
        policy: "Hesab yaratmaqla Siz <1>İstifadə Şərtləri</1> və <3>Gizlilik Siyasəti</3> ilə razılaşırsınız.",
        notRobot: "Mən Robot Deyiləm",
        login: {
          title: "Daxil ol",
          subTitle: "Hesabın yoxdur? <1>Hesab Yarat</1>",
          userName: "E-mail və ya istifadəçi adı",
          password: "Şifrə",
          forgotPass: "Şifrəni unutdum",
          remember: "Yadda saxla",
          signIn: "Daxil ol",
          orContinue: "və ya Google ilə davam edin",
          continue: "Google ilə davam edin",
        },
        register: {
          name: "Ad",
          surname: "Soyad",
          eMail: "E-mail",
          haveAccount: "Hesabın var? <1>Daxil ol</1>",
          signUp: "Qeydiyyatdan keç",

        },
        forgotPass: {
          title: "Şifrəni unutmusunuz?",
          subTitle: "Təssüflənməyin! Biz sizin şifrənizi yenidən göndərəcəyik və yeni bir şifrə yaratmaq üçün link göndərəcəyik",
          eMail: "E-mail ünvanınızı qeyd edin",
          send: "Yenidən Göndər",
        },
        details: {
          title: "Xoş gəlmisiniz",
          subTitle: "Zəhmət olmasa vacib olan xanaları doldurardız",
          date: "Tarix",
          complete: "Hesabı Tamamla",
        },
        newPassword: {
          title: "Yeni şifrə yarat",
          updatedTitle: "Şifrəniz Yeniləndi!",
          save: "Yadda saxla",
          close: "Bağla",
        },
      }
    },
  },
  ru: {
    translation: {
      search: "Поиск",
      login: "Войти",
      register: "Регистрация",
      aboutUs: "О нас",
      contact: "Контакты",
      terms: "Условия обслуживания",
      privacy: "Политика конфиденциальности",
      home: "Главная страница",
      analytics: "Аналитика",
      reports: "Исследования и отчеты",
      help: "Помощь и поддержка",
      "data-portal": "Портал данных <br /> национальной экономики",
      "data-world": "Путешествуйте по миру данных",
      accessibility: {
        menuTitle: "Меню доступности",
        darkMode: "Темный режим",
        voiceAccess: "Голосовой доступ",
        magnifier: "Лупа",
        language: "Язык"
      },
      chatBot: {
        contactUs: "Свяжитесь с нами...",
        message: "Какие типы статистики и инструменты визуализации доступны на портале данных по национальной экономике?",
      },
      about: {
        heroTitle: "Кто мы??",
        paragraph: "Национальный экономический портал данных – это инновационная информационная платформа, созданная Центром анализа и координации четвёртой промышленной революции (4SIM). Цель портала – объединение открытых, достоверных и обновляемых в режиме реального времени данных об экономике Азербайджана в едином пространстве, расширение аналитических возможностей и поддержка процессов принятия решений.",
        goal: {
          title: "Цель",
          description: "Национальный портал экономических данных призван повысить прозрачность и доступность данных об экономике Азербайджана и предоставить государственным органам, бизнесу, инвесторам и исследователям достоверную информацию. Портал позволит им отслеживать экономические тенденции, принимать решения на основе данных и разрабатывать эффективную политику."
        },
        mission: {
          title: "Миссия",
          description: "Формирование открытого и системного информационного пространства национальной экономики на основе современных методов анализа данных и цифровых технологий. Портал будет способствовать более глубокому и точному пониманию экономических процессов, обеспечивая сбор и визуализацию данных на единой платформе и расширяя аналитические возможности."
        },
      },
      analytic: {
        indicators: "Экономические показатели",
        demonstrators: "Международные показатели",
        infobase: "Открытая база данных",
        macro: "Макро- и микроэкономические показатели",
        sectors: "Экономические показатели по секторам",
        demo: "Демографические показатели",
        state: "Показатели государственных услуг",
        crime: "Показатели преступности и нарушений закона",
        market: "Показатели рынка труда",
        global: "Глобальный индекс инноваций",
        aiIndex: "Индекс готовности к искусственному интеллекту",
        eGov: "Индекс развития электронного правительства",
        visualization: "Если вы хотите визуализировать свои данные, вы можете связаться с нами.",
        allData: "Все данные",
        health: "Здоровье",
        tourism: "Туризм",
        energy: "Энергия",
        demographic_indicators: "Демографические показатели",
        agriculture: "Аграрная сфера",
        economic_map: "Интерактивная экономическая карта",
        statistical_calendar: "Статистический календарь",
        open_data_policy: "Политика открытых данных Азербайджана",
        data_request: "Запрос на набор данных",
      },
      report: {
        publications: "Академические публикации",
        reports: "Отчеты",
        download: "Скачать",
        restrictionEconomical: "Зарегестрируйтесь для большего количества экономических исследований",
        filter: {
          title: "Фильтр",
          date: "Дата",
          field: "Область",
          author: "Автор"
        }
      },
      auth: {
        password: "Пароль",
        confirmPass: "Подтвердите пароль",
        alert: "Используйте 8 или более символов, включая специальные знаки",
        number: "Номер",
        workPlace: "Место работы",
        photo: "Фото",
        photoSize: " МБ - максимальный размер файла. Форматы: JPEG, PNG.",
        policy: "Создавая аккаунт, вы соглашаетесь с <1>Условиями использования</1> и <3>Политикой конфиденциальности</3>.",
        verify: "Пожалуйста, установите флажок, чтобы продолжить.",
        notRobot: "Я не робот",
        login: {
          subTitle: "Нет аккаунта? <1>Создать аккаунт</1>",
          userName: "E-mail или имя пользователя",
          password: "Пароль",
          forgotPass: "Забыли пароль?",
          remember: "Запомнить меня",
          signIn: "Войти",
          orContinue: "или продолжить с Google",
          continue: "Продолжить с Google"
        },
        register: {
          name: "Имя",
          surname: "Фамилия",
          eMail: "E-mail",
          haveAccount: "Уже есть аккаунт? <1>Войти</1>",
          signUp: "Зарегистрироваться",
        },
        forgotPass: {
          title: "Забыли пароль?",
          subTitle: "Не переживайте! Мы отправим вам ссылку для сброса пароля.",
          eMail: "Введите свой адрес электронной почты",
          send: "Отправить повторно"
        },
        details: {
          title: "Добро пожаловать",
          subTitle: "Пожалуйста, заполните обязательные поля.",
          date: "Дата",
          complete: "Завершить аккаунт",
        },
        newPassword: {
          title: "Создать новый пароль",
          updatedTitle: "Ваш пароль был обновлен!",
          save: "Сохранить",
          close: "Закрыть",
        },
      }
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
