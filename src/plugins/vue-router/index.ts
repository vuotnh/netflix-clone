import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { routers } from './routers';
import MainLayout from '../../layout/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/home'
    }, 
    {
        path: "/home",
        component: MainLayout,
        children: []
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
