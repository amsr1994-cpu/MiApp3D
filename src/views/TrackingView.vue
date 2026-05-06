<script setup lang="ts">
import { ref } from 'vue'
import ModelPlayer from '../components/ModelPlayer.vue'

const showModel = ref(false)
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6 pb-32">
    <div class="w-full max-w-md">
      <!-- ... (Cabecera igual) ... -->

      <main class="bg-white rounded-[2.5rem] p-10 shadow-xl border border-white/60">

        <!-- Si pulsamos el botón, mostramos el visor en lugar del engranaje -->
        <div v-if="!showModel" class="flex flex-col items-center mb-10">
          <!-- Aquí va el engranaje ⚙️ que ya tenías -->
          <div class="relative w-40 h-40 mb-8 flex items-center justify-center">
            <div class="absolute inset-0 border-[6px] border-blue-500 rounded-full border-t-transparent animate-spin-slow"></div>
            <span class="text-5xl">⚙️</span>
          </div>
          <h2 class="text-3xl font-bold tracking-tight">Soporte Motor</h2>
        </div>

        <div v-else class="mb-10 animate-in fade-in zoom-in duration-500">
          <ModelPlayer />
          <p class="text-center text-xs text-slate-400 mt-4 italic">Usa un dedo para rotar, dos para hacer zoom</p>
        </div>

        <!-- Botón que activa la magia -->
        <button @click="showModel = !showModel"
                class="w-full bg-black text-white py-4 rounded-2xl font-semibold shadow-lg active:scale-95 transition-all">
          {{ showModel ? 'Cerrar Vista 3D' : 'Ver modelo en 3D' }}
        </button>
      </main>
    </div>
  </div>
</template>

<style scoped>
  .animate-spin-slow {
    animation: spin 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
