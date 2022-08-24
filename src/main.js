import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import cookies from '@/cookies/cookies';
import { createPinia } from 'pinia';

createApp(App).use(router, cookies, createPinia()).mount('#app');
// createApp(App).use(router, cookies).mount('#app');
// console.log(cookies);

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
