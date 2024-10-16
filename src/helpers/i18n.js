


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      "welcome": "Welcome to the app",
      "home": "Home",
      "library": "Library",
    }
  },
  ua: {
    translation: {
      "welcome": "Ласкаво просимо до застосунку",
      "home": "Головна",
      "library": "Бібліотека",
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать в приложение",
      "home": "Главная",
      "library": "Библиотека",
    }
  },
  pl: {
    translation: {
      "welcome": "Witamy w aplikacji",
      "home": "Strona główna",
      "library": "Biblioteka",
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a la aplicación",
      "home": "Inicio",
      "library": "Biblioteca",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
