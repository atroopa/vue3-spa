import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import IndexUser from '../pages/users/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: IndexUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
