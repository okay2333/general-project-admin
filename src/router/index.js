import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
