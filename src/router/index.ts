import { createRouter, createWebHistory } from 'vue-router'
import TrackingView from '../views/TrackingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'explore',
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: TrackingView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
