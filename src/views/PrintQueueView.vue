<template>
  <div class="min-h-screen bg-slate-50/50 p-6 pb-40">
    <header class="mb-8 mt-4 px-2 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-black tracking-tight text-slate-900">Cola de Trabajo</h1>
        <p class="text-slate-500 text-sm mt-1">Gestión de producción en tiempo real</p>
      </div>
      <div
        class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-200"
      >
        Online
      </div>
    </header>

    <section class="mb-10">
      <h2 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-4">
        Imprimiendo ahora
      </h2>
      <div
        class="bg-slate-900 rounded-[3rem] p-8 text-white shadow-2xl relative overflow-hidden group"
      >
        <div
          class="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"
        ></div>

        <div class="relative z-10">
          <div class="flex justify-between items-start mb-6">
            <div>
              <p class="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                Orden #4402
              </p>
              <h3 class="text-2xl font-bold">Soporte Motor V8</h3>
            </div>
            <div class="text-right">
              <p class="text-3xl font-black text-white">
                {{ progress.toFixed(1) }}<span class="text-sm opacity-50">%</span>
              </p>
              <p class="text-[9px] opacity-60 uppercase font-bold">Progreso</p>
            </div>
          </div>

          <div class="w-full h-4 bg-white/10 rounded-full mb-6 overflow-hidden">
            <div
              class="h-full bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500"
              :style="{ width: progress + '%' }"
            ></div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/5 p-4 rounded-3xl border border-white/10">
              <p class="text-[9px] opacity-50 uppercase font-bold mb-1">Tiempo Restante</p>
              <p class="text-sm font-bold">{{ timeLeft }}</p>
            </div>
            <div class="bg-white/5 p-4 rounded-3xl border border-white/10">
              <p class="text-[9px] opacity-50 uppercase font-bold mb-1">Temperatura</p>
              <p class="text-sm font-bold">215°C / 60°C</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-4">
        Próximos trabajos
      </h2>
      <div class="space-y-4">
        <div
          v-for="job in pendingJobs"
          :key="job.id"
          class="bg-white p-5 rounded-[2.5rem] border border-white shadow-sm flex items-center gap-5 group active:scale-[0.98] transition-all"
        >
          <div class="w-16 h-16 bg-slate-100 rounded-2xl overflow-hidden">
            <img :src="job.image" class="w-full h-full object-cover" />
          </div>
          <div class="flex-grow">
            <h4 class="font-bold text-slate-800 text-sm">{{ job.name }}</h4>
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
              {{ job.material }} • {{ job.time }}
            </p>
          </div>
          <button class="bg-slate-50 p-3 rounded-2xl group-hover:bg-blue-50 transition-colors">
            <span class="text-blue-600 font-bold text-xs">Iniciar</span>
          </button>
        </div>
      </div>
    </section>

    <transition name="slide-up">
      <div
        v-if="showNotification"
        class="fixed top-10 left-6 right-6 bg-white/90 backdrop-blur-xl p-4 rounded-[2rem] shadow-2xl border border-blue-100 z-[100] flex items-center gap-4"
      >
        <div
          class="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-200"
        >
          ✅
        </div>
        <div class="flex-grow">
          <h4 class="text-sm font-black text-slate-900">¡Impresión Completada!</h4>
          <p class="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
            Soporte Motor V8 listo para retirar
          </p>
        </div>
        <button
          @click="showNotification = false"
          class="text-slate-300 hover:text-slate-900 p-2 text-xl"
        >
          ✕
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// --- ESTADOS REACTIVOS ---
const progress = ref(72.4)
const timeLeftMinutes = ref(165)
const showNotification = ref(false)

// --- LÓGICA DE TIEMPO ---
const timeLeft = computed(() => {
  const h = Math.floor(timeLeftMinutes.value / 60)
  const m = Math.floor(timeLeftMinutes.value % 60)
  return `${h}h ${String(m).padStart(2, '0')}m`
})

// --- SIMULACIÓN DE IMPRESIÓN ---
// Tipado profesional para evitar el error 'any'
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 0.1
      // Bajamos el tiempo aleatoriamente para simular realidad
      if (Math.random() > 0.8) timeLeftMinutes.value -= 1
    } else {
      progress.value = 100
      showNotification.value = true
      if (interval) clearInterval(interval)
    }
  }, 2000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

// --- DATOS ESTÁTICOS ---
const pendingJobs = [
  {
    id: 1,
    name: 'Grip Ergonómico JoyCon',
    material: 'TPU Flexible',
    time: '4h 20m',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Maceta Self-Water',
    material: 'PLA Eco',
    time: '8h 15m',
    image:
      'https://images.unsplash.com/photo-1599411956134-8c70792374f3?auto=format&fit=crop&q=80&w=200',
  },
]
</script>

<style scoped>
/* Animación de la notificación */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
