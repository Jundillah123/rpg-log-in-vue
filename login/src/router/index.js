import { createRouter, createWebHistory } from 'vue-router';

import login from './pages/login.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
