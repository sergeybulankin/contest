import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import AboutComponent from "@/components/AboutComponent";

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/about',
        name: 'about',
        component: AboutComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;