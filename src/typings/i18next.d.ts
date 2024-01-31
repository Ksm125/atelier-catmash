import { I18nResources } from '../translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: I18nResources['en' | 'fr'];
  }
}
