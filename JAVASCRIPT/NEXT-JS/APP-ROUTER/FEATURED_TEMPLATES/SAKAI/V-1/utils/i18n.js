import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import translationEN from '@/public/locales/en/translation.json';
import translationJP from '@/public/locales/jp/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    jp: {
        translation: translationJP,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'jp', // Default language
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;