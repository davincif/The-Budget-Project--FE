import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import { en_US } from './langs/en-US';
import { es_ES } from './langs/es-ES';
import { pt_BR } from './langs/pt-BR';
import { pt_PT } from './langs/pt-PT';
import router from './router';

const i18n = createI18n({
  legacy: false,
  locale: 'pt-br',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': en_US.messages,
    'pt-BR': pt_BR.messages,
    'pt-PT': pt_PT.messages,
    'es-ES': es_ES.messages,
  },
});
const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);

app.mount('#app');
