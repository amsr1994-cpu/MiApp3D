<template>
  <div class="min-h-screen p-6 pb-32">
    <!-- Cabecera de sección -->
    <header class="mb-8 mt-4">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">Explorar Diseños</h1>
      <p class="text-slate-500 text-sm mt-1">Selecciona un modelo para fabricar localmente</p>
    </header>

    <!-- Filtros rápidos -->
    <div class="flex gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
      <button v-for="cat in categories" :key="cat"
              class="px-4 py-2 bg-white rounded-full text-xs font-bold border border-gray-100 shadow-sm whitespace-nowrap active:scale-95 transition-all">
        {{ cat }}
      </button>
    </div>

    <!-- Rejilla de Productos -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="item in products" :key="item.id"
           class="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-white/60 flex flex-col group active:scale-[0.98] transition-all">

        <!-- Previsualización del Modelo -->
        <div class="h-40 bg-slate-50 flex items-center justify-center relative">
          <span class="text-4xl group-hover:scale-110 transition-transform duration-500">{{ item.icon }}</span>
          <div class="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full text-[9px] font-bold shadow-sm">
            {{ item.material }}
          </div>
        </div>

        <!-- Información -->
        <div class="p-4 flex flex-col flex-grow">
          <h3 class="text-sm font-semibold text-slate-800 leading-tight mb-1">{{ item.name }}</h3>
          <p class="text-[10px] text-slate-400 font-medium uppercase mb-3">{{ item.category }}</p>

          <div class="mt-auto flex justify-between items-center">
            <span class="text-sm font-bold">${{ item.price }}</span>
            <button class="bg-blue-600 text-white p-2 rounded-xl text-xs hover:bg-blue-700 shadow-lg shadow-blue-200">
              ＋
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ['Todos', 'Ingeniería', 'Decoración', 'Gadgets', 'Arte']

const products = [
  { id: 1, name: 'Soporte de Motor', category: 'Ingeniería', price: '12.50', icon: '⚙️', material: 'PETG' },
  { id: 2, name: 'Llavero StartUp', category: 'Marketing', price: '4.00', icon: '🔑', material: 'PLA' },
  { id: 3, name: 'Maceta Geométrica', category: 'Decoración', price: '18.20', icon: '🪴', material: 'Bio-F' },
  { id: 4, name: 'Grip Ergonómico', category: 'Gadgets', price: '9.99', icon: '🎮', material: 'TPU' },
  { id: 5, name: 'Miniatura Héroe', category: 'Arte', price: '15.00', icon: '🛡️', material: 'Resina' },
  { id: 6, name: 'Organizador Cables', category: 'Gadgets', price: '6.50', icon: '🔌', material: 'PLA+' }
]
</script>

<style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
