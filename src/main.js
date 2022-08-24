import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import cookies from '@/cookies/cookies';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
console.log(pinia);
setTimeout(() => {
	app.use(router, cookies).mount('#app');
}, 500);

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
