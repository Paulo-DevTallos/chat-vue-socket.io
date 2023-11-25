import './assets/main.css';
import './assets/styles.css';

import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(Vue3Lottie, { name: "Vue3Lottie" });
app.mount('#app');
