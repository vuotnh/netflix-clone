import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { routers } from './routers';
import MainLayout from '../../layout/MainLayout.vue';
import ReadBookPage from '../../features/readBookPage/pages/ReadBookPage.vue';
import HomePage from '../../features/homePage/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/home'
    }, 
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "/home",
                name: "HomePage",
                component: HomePage,
            }
        ]
    },
    {
        path: '/read-book/:id',
        component: ReadBookPage,
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
