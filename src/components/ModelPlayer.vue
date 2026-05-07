<template>
  <div
    class="w-full aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-inner relative"
  >
    <model-viewer
      :src="src"
      alt="Modelo 3D dinámico"
      auto-rotate
      camera-controls
      ar
      class="w-full h-full"
    >
      <template v-slot:poster>
        <div class="flex items-center justify-center h-full w-full bg-slate-50">
          <div
            class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          ></div>
        </div>
      </template>
    </model-viewer>

    <div
      class="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white z-10"
    >
      <span class="text-[10px] font-black uppercase text-slate-800">AR Ready</span>
      <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Definimos la "prop" para recibir la URL del modelo desde el padre
defineProps<{
  src: string
}>()
</script>

<style scoped>
model-viewer {
  --progress-bar-color: #2563eb;
  background-color: transparent;
}
</style>
