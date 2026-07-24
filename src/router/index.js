import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {path: "/", component: () => import("@/views/Main.vue")},
  {path: "/login", component: () => import("@/views/Login.vue")},
  {path: "/new-account", component: () => import("@/views/CreateAccount.vue")},
  {path: "/book/list", component: () => import("@/views/Booklist.vue")},
  ],
})

export default router
