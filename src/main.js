import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import cookies from '@/cookies/cookies';

const pinia = createPinia();
const app = createApp(App);

// must create pinia before router
app.use(pinia);
app.use(router, cookies).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
