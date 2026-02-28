import { createApp } from 'vue'
import './styles/root.css'
import App from './App.vue'
import { i18n } from './i18n/langController.ts';
const app = createApp(App);
app.use(i18n);

app.mount('#app');
