import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import QueueView from '../views/QueueView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/queue',
            name: 'queue',
            component: QueueView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
    ],
});

export default router;
