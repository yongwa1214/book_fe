import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {path: "/", component: () => import("@/views/Main.vue")},
  {path: "/login", component: () => import("@/views/Login.vue")},
  {path: "/new-account", component: () => import("@/views/CreateAccount.vue")},
  {path: "/search", component: () => import("@/views/Booklist.vue")},
  {path: "/my/library", component: () => import("@/views/MyLibrary.vue")},
  ],
})

export default router
