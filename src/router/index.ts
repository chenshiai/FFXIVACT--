import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Config from '../views/Config.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/config',
    name: 'config',
    component: Config,
    meta: {
      keepAlive: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
