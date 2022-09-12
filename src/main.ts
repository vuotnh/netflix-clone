import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import './assets/styles/variables.scss';
import 'font-awesome/css/font-awesome.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import store from './plugins/vuex';
import plugins from './plugins';
import router from './plugins/vue-router';



const app = createApp(App)
app.use(store).use(router).use(plugins.i18n)
.use(plugins.ElementUI, {
    i18n: (key: string) => {
        return plugins.i18n.global.t(key, plugins.i18n.global.locale);
    },
});

router.isReady().then(() => {
    app.mount('#app');
});

