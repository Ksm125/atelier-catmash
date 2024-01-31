import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';

export interface I18nResources {
  en: typeof en;
  fr: typeof fr;
}

i18next
  .use(initReactI18next)
  .init({
    interpolation: {
      skipOnVariables: false,
    },
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    load: 'languageOnly',
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
  })
  .then();

export default i18next;
