// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            alias:'/home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/compteur',
            name: 'compteur',
            component: () => import('../views/exercices/compteur.vue')
        },
                {
            path: '/binding',
            name: 'binding',
            component: () => import('../views/exercices/binding.vue')
        }
    ]
});

export default router;