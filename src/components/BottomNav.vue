<template>
  <nav
    class="fixed bottom-6 left-6 right-6 h-20 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 shadow-2xl flex items-center justify-around px-4 z-50"
  >
    <router-link
      v-for="item in menuItems"
      :key="item.path"
      :to="item.path"
      class="flex flex-col items-center gap-1 group transition-all"
      v-slot="{ isActive }"
    >
      <div
        :class="[
          'p-2 rounded-2xl transition-all duration-300',
          isActive
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110'
            : 'text-slate-400 group-hover:bg-slate-100',
        ]"
      >
        <span class="text-2xl">{{ item.icon }}</span>
      </div>
      <span
        :class="[
          'text-[10px] font-bold tracking-tight transition-all',
          isActive
            ? 'text-blue-600 opacity-100'
            : 'text-slate-400 opacity-0 group-hover:opacity-100',
        ]"
      >
        {{ item.name }}
      </span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()

// Definimos los botones según el rol del usuario
const menuItems = computed(() => {
  const role = auth.user?.role || 'cliente'

  const baseMenu = [{ name: 'Perfil', path: '/profile', icon: '👤' }]

  if (role === 'admin') {
    return [
      { name: 'Red', path: '/admin-network', icon: '🌐' },
      { name: 'Validar', path: '/admin-verify', icon: '⚖️' },
      ...baseMenu,
    ]
  }

  if (role === 'fabricante') {
    return [
      { name: 'Cola', path: '/print-queue', icon: '⚙️' },
      { name: 'Taller', path: '/workshop', icon: '🏭' },
      ...baseMenu,
    ]
  }

  if (role === 'disenador') {
    return [
      { name: 'Diseños', path: '/my-models', icon: '🎨' },
      { name: 'Ventas', path: '/earnings', icon: '📈' },
      ...baseMenu,
    ]
  }

  // Por defecto: Menú de Cliente
  return [
    { name: 'Explorar', path: '/explore', icon: '🚀' },
    { name: 'Pedidos', path: '/tracking', icon: '📦' },
    ...baseMenu,
  ]
})
</script>
