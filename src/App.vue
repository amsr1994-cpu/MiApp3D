<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router' // 1. Importamos useRoute
import BottomNav from './components/BottomNav.vue'

const route = useRoute() // 2. Obtenemos la ruta actual
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <BottomNav v-if="route.name !== 'auth'" />

    <footer
      v-if="route.name !== 'auth'"
      class="fixed bottom-32 w-full text-center opacity-30 pointer-events-none"
    >
      <p class="text-[10px] font-bold tracking-widest uppercase">ProtoMk 2026</p>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
