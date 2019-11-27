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
      path: '/yesterday',
      name: 'yesterday',
      component: () => import('./views/room/Yesterday.vue'),
    },
    {
      path: '/tomorrow',
      name: 'tomorrow',
      component: () => import( './views/room/Tomorrow.vue'),
    },
    {
      path: '/today',
      name: 'today',
      component: () => import('./views/room/Today.vue'),
    }
  ],
});
