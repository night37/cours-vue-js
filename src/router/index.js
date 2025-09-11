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
            path: '/lessons/databinding',
            name: 'lesson-databinding',
            component: () => import('../views/lessons/data-binding.vue')
        },
                {
            path: '/tp/databinding',
            name: 'tp-databinding',
            component: () => import('../views/tp/data-binding.vue')
        },
        {
            path: '/compteur',
            name: 'compteur',
            component: () => import('../views/exercices/compteur.vue')
        },
        {
            path: '/exercices/dynamic-styling',
            name: 'dynamic-styling',
            component: () => import('../views/exercices/dynamic-styling.vue')
        },
                        {
            path: '/exercices/dynamic-input-styling',
            name: 'dynamic-input-styling',
            component: () => import('../views/exercices/dynamic-input-styling.vue')
        }

        
    ]
});
export default router;