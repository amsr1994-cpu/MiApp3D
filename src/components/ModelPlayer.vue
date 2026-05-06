<template>
  <div class="w-full h-80 bg-slate-50 rounded-[2rem] overflow-hidden relative border border-white shadow-inner">
    <!-- El visualizador de Google -->
    <model-viewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                  alt="Modelo 3D de la pieza"
                  auto-rotate
                  camera-controls
                  ar
                  shadow-intensity="1"
                  class="w-full h-full">
      <!-- Botón de Realidad Aumentada (estilo iOS) -->
      <button slot="ar-button" class="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white">
        📱 Ver en mi espacio
      </button>
    </model-viewer>
  </div>
</template>

<script setup lang="ts">
import '@google/model-viewer';
</script>
