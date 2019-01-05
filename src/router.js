import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('@/views/archive'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/views/books'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about'),
    },
  ],
});
