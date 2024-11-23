import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
