import './assets/main.css'


import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'notes',
            component: () => import('@/views/ViewNotes.vue')
        },
        {
            path: '/',
            name: 'stats',
            component: () => import('@/views/ViewStats.vue')
        },

    ]
})

createApp(App).use(router).mount('#app')
