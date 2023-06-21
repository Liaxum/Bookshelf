import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Styles and Icons for vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';



import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Notification.requestPermission().then((result) => console.log(result));

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');