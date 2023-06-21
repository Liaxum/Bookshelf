import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shelf',
      name: 'shelf',
      component: HomeView
    },
    {
      path: '/collection',
      name: 'collection',
      component: HomeView
    },
    {
      path: '/friends',
      name: 'friends',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },
  ]
})

export default router
