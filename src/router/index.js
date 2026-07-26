import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {path: "/", component: () => import("@/views/Main.vue")},
  {path: "/login", component: () => import("@/views/Login.vue")},
  {path: "/new-account", component: () => import("@/views/CreateAccount.vue")},
  {path: "/search", component: () => import("@/views/Booklist.vue")},
  {path: "/my/library", component: () => import("@/views/MyLibrary.vue")},

  {path: "/my/library/:libraryId", component: () => import("@/views/MeBookMemoList.vue")},
  {path: "/my/library/:libraryId/memo", component: () => import("@/views/MemoPage.vue")},
  ],
})

export default router
