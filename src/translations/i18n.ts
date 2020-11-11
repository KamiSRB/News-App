import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    debug: false,
    fallbackLng: 'en-US',
    react: {
      useSuspense: false,
      nsMode: 'fallback', // Needed in case of using multiple namespaces. Otherwise, it would use only the first one
    },
  });

export default i18n;
