import { createWebHistory, createRouter } from 'vue-router'

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import WalletPage from './components/WalletPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/wallet/:uuid', component: WalletPage}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router