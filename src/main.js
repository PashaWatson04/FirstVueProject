import './assets/main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '../src/assets/form.css'

import App from './App.vue'

import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import FormQt from './pages/FormQt.vue'
// import autoAnimate from '@formkit/auto-animate' <-------- Я МУСОР

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/formQt', name: 'FormQt', component: FormQt }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
