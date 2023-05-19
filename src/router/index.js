import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/NewPage.vue')
      },
      {
        path: 'a',
        component: () => import('../views/componentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/componentB.vue')
      },
      {
        // 動態路由設定 id 可以自己取
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
