import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {path: "/bobo", component: () => import("@/views/Main.vue")},
  {path: "/login", component: () => import("@/views/Login.vue")},
  {path: "/new-account", component: () => import("@/views/CreateAccount.vue")},
  ],
})

export default router
