import { createRouter, createWebHistory } from 'vue-router'
import LoadingPage from '../views/LoadingPage.vue'
import Layer01 from '../views/Layer01.vue'

const routes = [
    { 
        path: '/', 
        name: 'Loading',
        component: LoadingPage 
    },
    { 
        path: '/layer01', 
        name: 'Layer01',
        component: Layer01 }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router