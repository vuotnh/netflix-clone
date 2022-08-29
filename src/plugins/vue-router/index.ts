import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { routers } from './routers';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {top: 0};
    },
});

export default router;
