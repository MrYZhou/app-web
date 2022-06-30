import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import { useSystemStore } from '@/store/system'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'),
  },
]

// const dynamic: RouteRecordRaw[] = []
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
router.beforeEach((to) => {
  // const systemStore = useSystemStore()
  // const dynamic: RouteRecordRaw[] = systemStore.getDynamicRoute()
})

export default router
