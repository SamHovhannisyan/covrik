import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

import hyLng from './locales/hy'
import ruLng from './locales/ru'
import enLng from './locales/en'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    hy: {
        translation: hyLng
    },
    ru: {
        translation: ruLng
    },
    en: {
        translation: enLng
    }
};

i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "hy",
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;