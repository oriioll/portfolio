import { createApp } from 'vue'
import './styles/root.css'
import App from './App.vue'
import { createI18n, type I18n } from 'vue-i18n';

//Add i8n plugin and object with translations
const i18n: I18n = createI18n({
    legacy: false,
    locale: 'es-ES',
    fallbackLocale: 'es-ES',
    messages: {
        'es-ES': {
            nav: {
                about: 'Sobre mi',
                experience: 'Experiencia',
                projects: 'Proyectos',
                contact: 'Contacto'
            }
        },
        'en-US': {
            nav: {
                about: 'About me',
                experience: 'Experience',
                projects: 'Projects',
                contact: 'Contact'
            }
        },
        'cat-ES': {
            nav: {
                about: 'Sobre mi',
                experience: 'Experiència',
                projects: 'Projectes',
                contact: 'Contacte'
            }
        }
    }
});
const app = createApp(App);
app.use(i18n);

app.mount('#app');
