<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Importamos useRoute
import ModelPlayer from '../components/ModelPlayer.vue'

const router = useRouter()
const route = useRoute() // Definimos la variable route

// 1. PRIMERO definimos la base de datos
const productsDatabase: Record<string, { name: string; price: number; modelUrl: string }> = {
  '1': {
    name: 'Soporte Motor V8',
    price: 19.9,
    modelUrl: '/models/model1.glb',
  },
  '2': {
    name: 'Segunda Pieza Pro',
    price: 25.0,
    modelUrl: '/models/model2.glb',
  },
}

// 2. DESPUÉS usamos la base de datos en el computed
const currentProduct = computed(() => {
  const id = route.params.id as string
  // Usamos el producto '1' como "paracaídas" si el ID no existe
  return productsDatabase[id] || productsDatabase['1']
})

// --- EL RESTO DE TUS VARIABLES ---
const showModel = ref(false)
const selectedMaterial = ref('PLA Eco')
const showCheckout = ref(false)
const paymentStatus = ref<'idle' | 'processing' | 'success'>('idle')

const materialPrices: Record<string, number> = {
  'PLA Eco': 19.9,
  'PETG Carbon': 29.9,
  'Nylon PA12': 45.0,
}

const currentPrice = computed(() => materialPrices[selectedMaterial.value] || 0)

const startPayment = () => {
  paymentStatus.value = 'processing'
  setTimeout(() => {
    paymentStatus.value = 'success'
    setTimeout(() => {
      showCheckout.value = false
      router.push('/tracking')
    }, 2000)
  }, 2500)
}
</script>

<template>
  <div class="min-h-screen bg-[#F5F5F7] p-6 pb-40 relative">
    <div
      :class="[
        'w-full max-w-lg mx-auto transition-all duration-500',
        showCheckout ? 'scale-95 blur-sm' : '',
      ]"
    >
      <button
        @click="$router.back()"
        class="mb-6 text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
      >
        ← Volver
      </button>

      <main class="bg-white rounded-[3rem] p-8 shadow-2xl border border-white">
        <div v-if="!showModel" class="flex flex-col items-center py-10">
          <div class="relative w-48 h-48 mb-12 flex items-center justify-center">
            <div class="absolute inset-0 border-[8px] border-blue-600/10 rounded-full"></div>
            <div
              class="absolute inset-0 border-[8px] border-blue-600 rounded-full border-t-transparent animate-spin-slow"
            ></div>
            <span class="text-6xl">⚙️</span>
          </div>
          <h2 class="text-4xl font-black text-slate-900 tracking-tight">Soporte V8</h2>
        </div>

        <div v-else class="mb-10 animate-in fade-in zoom-in duration-700">
          <ModelPlayer v-if="currentProduct" :src="currentProduct?.modelUrl" />
          <div class="mt-6 flex justify-between items-center">
            <h2 class="text-2xl font-black text-slate-900">{{ currentProduct?.name }}</h2>
            <p class="text-2xl font-black text-blue-600">{{ currentPrice.toFixed(2) }}€</p>
          </div>
        </div>

        <button
          @click="showModel = !showModel"
          class="w-full bg-blue-600 text-white py-5 rounded-[1.8rem] font-bold shadow-xl mb-4"
        >
          {{ showModel ? 'Cerrar 3D' : 'Explorar en 3D' }}
        </button>

        <button
          v-if="showModel"
          @click="showCheckout = true"
          class="w-full bg-slate-900 text-white py-5 rounded-[1.8rem] font-bold shadow-xl animate-in slide-in-from-bottom-2"
        >
          Encargar Fabricación
        </button>
      </main>
    </div>

    <transition name="sheet">
      <div v-if="showCheckout" class="fixed inset-0 z-[100] flex items-end">
        <div
          @click="paymentStatus === 'idle' ? (showCheckout = false) : null"
          class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        ></div>

        <div
          class="relative w-full bg-white rounded-t-[3rem] p-10 pb-16 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
        >
          <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"></div>

          <div v-if="paymentStatus === 'idle'">
            <div class="flex justify-between items-center mb-8">
              <h3 class="text-2xl font-black text-slate-900">Confirmar Pedido</h3>
              <span class="text-2xl">💳</span>
            </div>

            <div class="space-y-4 mb-10">
              <div class="flex justify-between text-sm">
                <span class="text-slate-400 font-bold uppercase">Producto</span>
                <span class="font-black text-slate-900">Soporte V8 ({{ selectedMaterial }})</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-400 font-bold uppercase">Envío</span>
                <span class="font-black text-green-600">GRATIS (Dron)</span>
              </div>
              <div class="h-px bg-slate-100 w-full"></div>
              <div class="flex justify-between text-xl">
                <span class="font-black text-slate-900">Total</span>
                <span class="font-black text-blue-600">{{ currentPrice.toFixed(2) }}€</span>
              </div>
            </div>

            <button
              @click="startPayment"
              class="w-full bg-slate-900 text-white py-6 rounded-3xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              <span>Pagar con FaceID</span>
              <span class="text-xl">📷</span>
            </button>
          </div>

          <div
            v-else-if="paymentStatus === 'processing'"
            class="py-12 flex flex-col items-center animate-in fade-in"
          >
            <div
              class="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6"
            ></div>
            <p class="font-bold text-slate-400 uppercase tracking-widest text-xs">
              Verificando Pago...
            </p>
          </div>

          <div
            v-else-if="paymentStatus === 'success'"
            class="py-12 flex flex-col items-center animate-in zoom-in"
          >
            <div
              class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl shadow-xl shadow-green-100 mb-6"
            >
              ✓
            </div>
            <p class="font-black text-slate-900 text-xl">¡Pago Completado!</p>
            <p class="text-slate-400 text-sm mt-1">Redirigiendo a seguimiento...</p>
          </div>
        </div>
      </div>
    </transition>
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

/* Animación del Panel (Sheet) */
.sheet-enter-active,
.sheet-leave-active {
  transition: all 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
}
</style>
