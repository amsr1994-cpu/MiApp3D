<template>
  <div class="min-h-screen bg-slate-50/50 pb-40">
    <div class="bg-white px-8 pt-16 pb-10 rounded-b-[3rem] shadow-sm border-b border-white">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-4">
          <div
            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-black shadow-lg border-2 border-blue-100"
          >
            {{ auth.user?.name?.charAt(0).toUpperCase() || 'U' }}
          </div>
          <div>
            <h1 class="text-xl font-black text-slate-900">{{ auth.user?.name || 'Usuario' }}</h1>
            <span
              class="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest"
            >
              {{ auth.user?.role || 'Invitado' }}
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <template v-if="auth.user?.role === 'cliente'">
          <div class="bg-blue-50 p-4 rounded-3xl text-center border border-blue-100">
            <p class="text-[9px] text-blue-400 font-bold uppercase">Pedidos</p>
            <p class="text-lg font-black text-blue-700">12</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Puntos</p>
            <p class="text-lg font-black text-slate-900">450</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Favoritos</p>
            <p class="text-lg font-black text-pink-500">8</p>
          </div>
        </template>

        <template v-else-if="auth.user?.role === 'fabricante'">
          <div class="bg-purple-50 p-4 rounded-3xl text-center border border-purple-100">
            <p class="text-[9px] text-purple-400 font-bold uppercase">Cola</p>
            <p class="text-lg font-black text-purple-700">4</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Material</p>
            <p class="text-lg font-black text-slate-900">82%</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Ingresos</p>
            <p class="text-lg font-black text-green-600">450€</p>
          </div>
        </template>

        <template v-else-if="auth.user?.role === 'disenador'">
          <div class="bg-amber-50 p-4 rounded-3xl text-center border border-amber-100">
            <p class="text-[9px] text-amber-500 font-bold uppercase">Modelos</p>
            <p class="text-lg font-black text-amber-700">7</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Ventas</p>
            <p class="text-lg font-black text-slate-900">124</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Royalty</p>
            <p class="text-lg font-black text-blue-600">890€</p>
          </div>
        </template>
      </div>
    </div>

    <div class="p-6 space-y-6">
      <section>
        <h2 class="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3">Cuenta</h2>
        <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-white">
          <button
            class="w-full flex items-center justify-between p-6 hover:bg-slate-50 border-b border-slate-50"
          >
            <div class="flex items-center gap-4">
              <div class="bg-slate-100 p-3 rounded-2xl text-xl">💳</div>
              <span class="font-bold text-slate-700">Métodos de Pago</span>
            </div>
            <span class="text-slate-300">→</span>
          </button>

          <button
            @click="handleLogout"
            class="w-full flex items-center justify-between p-6 hover:bg-red-50 text-red-600 group transition-colors"
          >
            <div class="flex items-center gap-4">
              <div
                class="bg-red-100 p-3 rounded-2xl text-xl group-hover:bg-red-200 transition-colors"
              >
                🔒
              </div>
              <span class="font-bold">Cerrar Sesión</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const handleLogout = () => {
  auth.logout()
  router.push('/auth')
}
</script>
