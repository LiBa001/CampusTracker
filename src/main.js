import { createApp } from 'vue';
import App from './App.vue';
import router from "@/app-routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './registerServiceWorker'

createApp(App).use(router).mount('#app');
