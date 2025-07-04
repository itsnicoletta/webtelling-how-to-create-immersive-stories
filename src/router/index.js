import { createRouter, createWebHistory } from 'vue-router'
import Layer01 from '../views/Layer01.vue'

const routes = [
    { path: '/', component: Layer01 }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router