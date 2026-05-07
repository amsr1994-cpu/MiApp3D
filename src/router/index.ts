import { createRouter, createWebHistory } from 'vue-router'
import TrackingView from '../views/TrackingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/auth', // Esto está perfecto
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
    },
    {
      // ANTES: '/' -> AHORA: '/explore'
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue'),
    },
    {
      // ANTES: '/orders' -> AHORA: '/tracking' (Para que coincida con tu BottomNav)
      path: '/tracking',
      name: 'tracking',
      component: TrackingView,
    },
    {
      path: '/product/:id', // Usamos :id para que sepa qué producto mostrar
      name: 'product-detail',
      component: () => import('../views/ProductDetailView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },

    {
      path: '/print-queue',
      name: 'print-queue',
      component: () => import('../views/PrintQueueView.vue'),
    },
    {
      path: '/my-models',
      name: 'my-models',
      component: () => import('../views/MyModelsView.vue'),
    },
  ],
})

export default router
