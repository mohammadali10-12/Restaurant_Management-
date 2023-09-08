import Home from './components/Home.vue';
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import AddRestaurant from './components/AddRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "HomeComp",
        component: Home,
        path: '/'
    },
    {
        name: 'SignUpComp',
        component: Registration,
        path: '/signup'
    },
    {
        name: 'LoginComp',
        component: Login,
        path: '/login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/Add'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/Update/:id'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;