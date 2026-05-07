<template>
  <div class="min-h-screen p-6 pb-40 bg-slate-50/50">
    <header class="mb-8 mt-4 px-2">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">Explorar Diseños</h1>
      <p class="text-slate-500 text-sm mt-1">Manufactura bajo demanda con media dinámica</p>
    </header>

    <div class="flex gap-2 overflow-x-auto pb-6 mb-2 no-scrollbar px-2">
      <button
        v-for="cat in categories"
        :key="cat"
        class="px-5 py-2 bg-white rounded-full text-xs font-bold border border-gray-100 shadow-sm whitespace-nowrap active:scale-95 transition-all hover:bg-slate-50"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="item in products"
        :key="item.id"
        @click="$router.push(`/product/${item.id}`)"
        class="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-white flex flex-col group active:scale-[0.99] transition-all duration-300 cursor-pointer"
      >
        <div class="h-64 w-full relative overflow-hidden bg-slate-900">
          <template v-if="item.type === 'video'">
            <video
              :src="item.mediaUrl"
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            ></video>
          </template>

          <template v-else>
            <img
              :src="item.mediaUrl"
              :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </template>

          <div
            class="absolute top-5 right-5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-white shadow-lg border border-white/20 uppercase tracking-tight"
          >
            {{ item.material }}
          </div>
        </div>

        <div class="p-6 flex flex-col flex-grow">
          <p class="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-1">
            {{ item.category }}
          </p>
          <h3 class="text-lg font-bold text-slate-900 leading-tight mb-4">{{ item.name }}</h3>

          <div class="mt-auto flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-[10px] text-slate-400 font-bold uppercase">Desde</span>
              <span class="text-xl font-extrabold text-slate-900">${{ item.price }}</span>
            </div>
            <button
              class="bg-slate-950 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg active:scale-90"
            >
              <span class="text-3xl font-light mb-1">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ['Todos', 'Ingeniería', 'Hogar', 'Gaming', 'Arte']

const products = [
  {
    id: 1,
    type: 'image',
    name: 'Figura Pokebol',
    category: 'Utilidades',
    price: '12.90',
    mediaUrl: 'https://i.imgur.com/kHCZkfL.jpeg',
    material: 'PETG Carbon',
  },
  {
    id: 2,
    type: 'image',
    name: 'Lampara Cúbica',
    category: 'Hogar',
    price: '15.00',
    mediaUrl: 'https://i.imgur.com/7cC92dR.jpeg',
    material: 'PLA Eco',
  },
  {
    id: 3,
    type: 'image',
    name: 'Figura Resina',
    category: 'Decoración',
    price: '12.50',
    mediaUrl: 'https://i.imgur.com/apeY6Bw.jpeg',
    material: 'Resina',
  },
  {
    id: 4,
    type: 'image',
    name: 'Llavero Personalizado',
    category: 'Utilidades',
    price: '8.00',
    mediaUrl: 'https://i.imgur.com/91ObvKR.jpeg',
    material: 'PA12 Nylon',
  },
  {
    id: 5,
    type: 'video',
    name: 'Figura Personalizada',
    category: 'Utilidades',
    price: '8.00',
    mediaUrl: 'https://i.imgur.com/FEucagi_lq.mp4',
    material: 'PA12 Nylon',
  },
]
</script>

<style scoped>
/* Ocultar barra de scroll en los filtros */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
