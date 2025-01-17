import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import store from '@/store';
// import RegisterPage from '@/components/RegisterPage.vue';






const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      guest: true
  }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true
  }
  },
  {
  path: '/about',
  name: 'about',
  component:() => import("../views/AboutView.vue"),
  meta: {
    requireAuth: true
  },
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from,  next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if(store.state.userdata == null ){
    next('/')
    }
  }
  if (to.matched.some((record) => record.meta.guest)){
    if(store.state.userdata !== null){
      next('/home')
    }
  }
  next()
});


export default router