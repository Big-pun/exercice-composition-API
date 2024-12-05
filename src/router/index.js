import { createRouter, createWebHistory } from 'vue-router';
import Ajout from '@/views/Ajout.vue';
import App from '@/App.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/ajout',
    name: 'ajout',
    component: Ajout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;