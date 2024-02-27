import { createApp } from 'vue/dist/vue.esm-bundler';
import ButtonCounter from '../components/ButtonCounter.vue';

const app = createApp();

app.component('ButtonCounter', ButtonCounter);

app.mount('#app');
