import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/nord.css'
import 'highlight.js/lib/common';
import Home from "./pages/Home.vue"
import Paste from "./pages/Paste.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/:slug', component: Paste, name: 'paste' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).use(hljsVuePlugin).mount('#app')
