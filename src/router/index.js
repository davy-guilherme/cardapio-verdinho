import { createRouter, createWebHistory } from 'vue-router'
import Products from '../pages/Products'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
