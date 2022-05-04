import { createRouter, createWebHashHistory } from 'vue-router';
import MainMenu from '../views/MainMenu.vue';
import Battle from '../views/Battle.vue';
import Shop from '../views/Shop.vue';
import Upgrades from '../views/Upgrades.vue';

const routes = [
  {
    path: '/main-menu',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/battle',
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
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'MainMenu' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
