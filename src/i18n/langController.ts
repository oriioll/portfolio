//Add i8n plugin and object with translations
import { createI18n, type I18n } from 'vue-i18n';

//import each language object
import es from './lang/es';
import en from './lang/en';
import cat from './lang/cat';
export const i18n: I18n = createI18n({
    legacy: false,
    locale: 'es-ES',
    fallbackLocale: 'es-ES',
    messages: {
        'es-ES': es,
        'en-US': en,
        'cat-ES': cat
    }
});