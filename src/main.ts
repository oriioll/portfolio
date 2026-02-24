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
            },
            hero: {
                subtitle: `Desarrollador de Aplicaciones Web`,
                description: `¡Hola!, soy Oriol, un desarrollador web bla bla bla`
            }
        },
        'en-US': {
            nav: {
                about: 'About me',
                experience: 'Experience',
                projects: 'Projects',
                contact: 'Contact'
            },
            hero: {
                subtitle: `Web Application Developer`,
                description: `Hi!, I'm Oriol, a web developer bla bla bla`
            }
        },
        'cat-ES': {
            nav: {
                about: 'Sobre mi',
                experience: 'Experiència',
                projects: 'Projectes',
                contact: 'Contacte'
            },
            hero: {
                subtitle: `Desenvolupador d'Aplicacions Web`,
                description: `Hola!, soc l'Oriol, un desenvolupador web bla bla bla`
            }
        }
    }
});
const app = createApp(App);
app.use(i18n);

app.mount('#app');
