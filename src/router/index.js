import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Cart1View from '@/views/Cart1View.vue'
import Cart2View from '@/views/Cart2View.vue'
import Cart3View from '@/views/Cart3View.vue'
import Cart4View from '@/views/Cart4View.vue'

const title = '空腹蟲'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: `${title}-首頁`
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: `${title}-登入`
      }
    },
    {
      path: '/cart1',
      name: 'cart1',
      component: Cart1View,
      meta: {
        title: `${title}-購物車第一頁`
      }
    },
    {
      path: '/cart2',
      name: 'cart2',
      component: Cart2View,
      meta: {
        title: `${title}-購物車第二頁`
      }
    },
    {
      path: '/cart3',
      name: 'cart3',
      component: Cart3View,
      meta: {
        title: `${title}-購物車第三頁`
      }
    },
    {
      path: '/cart4',
      name: 'cart4',
      component: Cart4View,
      meta: {
        title: `${title}-購物車第四頁`
      }
    }
  ]
})



export default router
