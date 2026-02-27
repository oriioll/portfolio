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
                stack: 'Tecnologías'
            },
            hero: {
                subtitle: `Desarrollador de Aplicaciones Web`,
                description: `¡Hola! Soy Oriol, estudiante del CFGS Desarrollo de Aplicaciones Web (DAWe) en Barcelona. Me enfoco en construir soluciones eficientes y bien estructuradas, priorizando siempre la lógica para ser capaz de adaptarme a cualquier entorno. Soy una persona analítica, autodidacta y en constante aprendizaje para seguir creciendo profesionalmente.`,
                openCv: 'Abrir CV'
            }
        },
        'en-US': {
            nav: {
                about: 'About me',
                experience: 'Experience',
                projects: 'Projects',
                stack: 'Tech Stack'
            },
            hero: {
                subtitle: `Web Application Developer`,
                description: `"Hi! I'm Oriol, a Higher Vocational Training student in Web Application Development (DAWe) from Barcelona. I'm focused on building efficient and well-structured solutions, always prioritizing logic to be able to adapt to any environment. I am an analytical, self-taught person, constantly learning to keep growing professionally.`,
                openCv: 'Open CV'
            }
        },
        'cat-ES': {
            nav: {
                about: 'Sobre mi',
                experience: 'Experiència',
                projects: 'Projectes',
                stack: 'Tecnologies'
            },
            hero: {
                subtitle: `Desenvolupador d'Aplicacions Web`,
                description: `Hola! Sóc l'Oriol, estudiant del CFGS Desenvolupament d'Aplicacions Web (DAWe) a Barcelona. M'enfoco a construir solucions eficients i ben estructurades, prioritzant sempre la lògica per ser capaç d'adaptar-me a qualsevol entorn. Sóc una persona analítica, autodidacta i en constant aprenentatge per seguir creixent professionalment.`,
                openCv: 'Obrir CV'
            }
        }
    }
});
const app = createApp(App);
app.use(i18n);

app.mount('#app');
