import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home";
import Scanner from "@/components/Scanner";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/scan',
        name: 'Scanner',
        meta: {title: 'CampusTracker | QR Scanner'},
        component: Scanner
    },/*
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" / './home/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./login/Login.vue')
    },
    {
        path: '/guilds',
        name: 'Guilds',
        meta: {title: 'Guilds - SMB'},
        component: () => import('./guilds/Guilds'),
    },
    {
        path: '/guilds/:id',
        name: 'Guild',
        components: {
            default: () => import('./guilds/guild/Guild'),
            extendedNav: () => import('./guilds/guild/ExtendedNav'),
        },
        props: {
            default: true,
            extendedNav: true,
        },
    }*/
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = to.meta.title
    next()
})

export default router;