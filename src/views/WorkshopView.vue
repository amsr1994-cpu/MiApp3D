<template>
  <div class="min-h-screen bg-slate-50/50 p-6 pb-40">
    <header class="mb-10 mt-4 px-2 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-black tracking-tight text-slate-900">Mi Taller</h1>
        <p class="text-slate-500 text-sm mt-1">Historial de manufactura y métricas</p>
      </div>
      <div
        class="bg-slate-900 text-white px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-lg"
      >
        Nodo Activo
      </div>
    </header>

    <section class="grid grid-cols-2 gap-4 mb-10">
      <div class="bg-white p-6 rounded-[2.5rem] shadow-sm border border-white">
        <p class="text-[9px] font-bold text-slate-400 uppercase mb-2">Total Piezas</p>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-black text-slate-900">142</span>
          <span class="text-[10px] text-green-500 font-bold">+12 este mes</span>
        </div>
      </div>
      <div class="bg-white p-6 rounded-[2.5rem] shadow-sm border border-white">
        <p class="text-[9px] font-bold text-slate-400 uppercase mb-2">Eficiencia</p>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-black text-blue-600">98<span class="text-lg">%</span></span>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-4">
        Piezas Producidas
      </h2>

      <div class="grid grid-cols-1 gap-4">
        <div
          v-for="item in productionHistory"
          :key="item.id"
          class="bg-white p-4 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-5 group active:scale-[0.98] transition-all"
        >
          <div
            class="w-20 h-20 bg-slate-100 rounded-[1.8rem] overflow-hidden flex-shrink-0 border border-slate-50"
          >
            <img
              :src="item.image"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div class="flex-grow">
            <h4 class="font-bold text-slate-800 text-sm mb-1">{{ item.name }}</h4>
            <div class="flex items-center gap-3">
              <span
                class="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold uppercase"
              >
                {{ item.material }}
              </span>
            </div>
          </div>

          <div class="text-right pr-2">
            <p class="text-[9px] text-slate-400 font-bold uppercase mb-0.5">Cantidad</p>
            <p class="text-2xl font-black text-slate-900 leading-none">x{{ item.quantity }}</p>
          </div>
        </div>
      </div>
    </section>

    <button
      class="w-full mt-10 bg-slate-100 border-2 border-dashed border-slate-200 py-6 rounded-[2.5rem] text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-white hover:border-blue-200 hover:text-blue-500 transition-all"
    >
      + Calibrar Nueva Máquina
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const productionHistory = ref([
  {
    id: 1,
    name: 'Soporte Motor V8',
    material: 'PETG Carbon',
    quantity: 45,
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Grip JoyCon Pro',
    material: 'TPU Flexible',
    quantity: 82,
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Maceta Self-Water',
    material: 'PLA Eco',
    quantity: 15,
    image:
      'https://images.unsplash.com/photo-1599411956134-8c70792374f3?auto=format&fit=crop&q=80&w=200',
  },
])
</script>
