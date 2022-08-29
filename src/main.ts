import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import 'font-awesome/css/font-awesome.css';
import store from './plugins/vuex';
import plugins from './plugins';
import router from './plugins/vue-router';


const app = createApp(App)
app.use(store).use(router)
app.mount('#app')
