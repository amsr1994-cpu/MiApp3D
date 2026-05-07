<script setup lang="ts">
import { ref, computed } from 'vue'
import ModelPlayer from '../components/ModelPlayer.vue'

// --- ESTADOS ---
const showModel = ref(false)
const selectedMaterial = ref('PLA Eco')

// --- LÓGICA DE PRECIOS ---
// Definimos los precios con un tipo estricto para que TypeScript no se queje
const materialPrices: Record<string, number> = {
  'PLA Eco': 19.9,
  'PETG Carbon': 29.9,
  'Nylon PA12': 45.0,
}

// Calculamos el precio. Añadimos un "|| 0" por seguridad para TS
const currentPrice = computed(() => materialPrices[selectedMaterial.value] || 0)
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F7] p-6 pb-40">
    <div class="w-full max-w-lg mx-auto">
      <button
        @click="$router.back()"
        class="mb-6 text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
      >
        ← Volver al catálogo
      </button>

      <main class="bg-white rounded-[3rem] p-8 shadow-2xl shadow-slate-200/50 border border-white">
        <div v-if="!showModel" class="flex flex-col items-center py-10">
          <div class="relative w-48 h-48 mb-12 flex items-center justify-center">
            <div class="absolute inset-0 border-[8px] border-blue-600/10 rounded-full"></div>
            <div
              class="absolute inset-0 border-[8px] border-blue-600 rounded-full border-t-transparent animate-spin-slow"
            ></div>
            <span class="text-6xl filter drop-shadow-lg text-slate-800">⚙️</span>
          </div>
          <div class="text-center">
            <p class="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              Ingeniería Avanzada
            </p>
            <h2 class="text-4xl font-black text-slate-900 tracking-tight">Soporte V8</h2>
            <p class="text-slate-400 text-sm mt-2 max-w-[200px] mx-auto leading-relaxed">
              Alta resistencia térmica para motores de competición.
            </p>
          </div>
        </div>

        <div v-else class="mb-10 animate-in fade-in zoom-in slide-in-from-bottom-8 duration-700">
          <ModelPlayer />
          <div class="mt-6 flex justify-between items-center px-2">
            <div>
              <h2 class="text-2xl font-black text-slate-900">Soporte Motor V8</h2>
              <p class="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                Vista Previa de Manufactura
              </p>
            </div>
            <p class="text-2xl font-black text-blue-600">{{ currentPrice.toFixed(2) }}€</p>
          </div>
        </div>

        <div
          v-if="showModel"
          class="space-y-6 mb-10 animate-in fade-in slide-in-from-bottom-4 delay-300"
        >
          <div>
            <p class="text-[10px] font-bold text-slate-400 uppercase mb-3 ml-1">
              Material de fabricación
            </p>
            <div class="flex gap-2">
              <button
                v-for="(price, mat) in materialPrices"
                :key="mat"
                @click="selectedMaterial = mat"
                :class="[
                  'px-4 py-2 rounded-xl text-xs font-bold transition-all',
                  selectedMaterial === mat
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-500',
                ]"
              >
                {{ mat }}
              </button>
            </div>
          </div>
        </div>

        <button
          @click="showModel = !showModel"
          class="w-full bg-blue-600 text-white py-5 rounded-[1.8rem] font-bold shadow-xl shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          <span>{{ showModel ? 'Cerrar Vista Realista' : 'Explorar en 3D' }}</span>
          <span v-if="!showModel">🧊</span>
        </button>

        <button
          v-if="showModel"
          class="w-full mt-4 bg-slate-900 text-white py-5 rounded-[1.8rem] font-bold shadow-xl active:scale-95 transition-all"
        >
          Encargar Fabricación
        </button>
      </main>
    </div>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
