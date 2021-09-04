import { createRouter, createWebHashHistory } from 'vue-router';
import Battle from '../views/Battle.vue';
import Shop from '../views/Shop.vue';
import Upgrades from '../views/Upgrades.vue';

const routes = [
  {
      path: '/',
      name: 'Battle',
      component: Battle
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/upgrades',
    name: 'Upgrades',
    component: Upgrades
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
