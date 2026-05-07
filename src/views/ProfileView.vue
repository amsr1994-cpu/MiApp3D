<template>
  <div class="min-h-screen bg-slate-50/50 pb-40">
    <div class="bg-white px-8 pt-16 pb-10 rounded-b-[3rem] shadow-sm border-b border-white">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
              alt="Avatar"
            />
          </div>
          <div>
            <h1 class="text-xl font-black text-slate-900">Alex Rivera</h1>
            <span
              class="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-widest"
              >Admin</span
            >
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <template v-if="currentRole === 'admin'">
          <div class="bg-blue-50 p-4 rounded-3xl text-center border border-blue-100">
            <p class="text-[9px] text-blue-400 font-bold uppercase">Usuarios</p>
            <p class="text-lg font-black text-blue-700">1.2k</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Ventas</p>
            <p class="text-lg font-black text-slate-900">$8k</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Alertas</p>
            <p class="text-lg font-black text-red-500">3</p>
          </div>
        </template>

        <template v-else-if="currentRole === 'maker'">
          <div class="bg-purple-50 p-4 rounded-3xl text-center border border-purple-100">
            <p class="text-[9px] text-purple-400 font-bold uppercase">Cola</p>
            <p class="text-lg font-black text-purple-700">4</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Material</p>
            <p class="text-lg font-black text-slate-900">82%</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-3xl text-center border border-slate-100">
            <p class="text-[9px] text-slate-400 font-bold uppercase">Ganancia</p>
            <p class="text-lg font-black text-green-600">$450</p>
          </div>
        </template>
      </div>
    </div>

    <div class="p-6 space-y-6">
      <section v-if="currentRole === 'admin'" class="animate-in fade-in slide-in-from-bottom-4">
        <h2 class="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3">
          Gestión Global
        </h2>
        <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-white">
          <button
            class="w-full flex items-center justify-between p-6 hover:bg-slate-50 border-b border-slate-50"
          >
            <div class="flex items-center gap-4">
              <div class="bg-blue-100 p-3 rounded-2xl text-xl">👥</div>
              <div class="text-left">
                <p class="font-bold text-slate-700">Validar Fabricantes</p>
                <p class="text-[10px] text-slate-400">2 solicitudes pendientes</p>
              </div>
            </div>
            <span class="text-blue-500 font-black">!</span>
          </button>
          <button class="w-full flex items-center justify-between p-6 hover:bg-slate-50">
            <div class="flex items-center gap-4">
              <div class="bg-slate-100 p-3 rounded-2xl text-xl">📊</div>
              <span class="font-bold text-slate-700">Métricas de Red</span>
            </div>
            <span class="text-slate-300">→</span>
          </button>
        </div>
      </section>

      <section>
        <h2 class="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3">
          Ajustes Personales
        </h2>
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
            class="w-full flex items-center justify-between p-6 hover:bg-red-50 text-red-600 group"
          >
            <div class="flex items-center gap-4">
              <div class="bg-red-100 p-3 rounded-2xl text-xl group-hover:bg-red-200">🔒</div>
              <span class="font-bold">Cerrar Sesión</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// El rol inicial es 'admin', pero puede cambiar con el selector
const currentRole = ref('admin')
</script>
