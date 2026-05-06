<template>
  <div class="min-h-screen flex items-center justify-center p-6 pb-32">
    <div class="w-full max-w-md">
      <header class="flex justify-between items-center mb-8 px-2">
        <h1 class="text-2xl font-semibold tracking-tight">Mi Pedido</h1>
        <div class="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
          <span class="text-[10px] font-bold text-blue-600 tracking-widest uppercase">Premium 3D</span>
        </div>
      </header>

      <main class="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 relative overflow-hidden">
        <div class="flex flex-col items-center mb-10">
          <div class="relative w-40 h-40 mb-8 flex items-center justify-center">
            <div class="absolute inset-0 border-[6px] border-gray-50 rounded-full"></div>
            <div class="absolute inset-0 border-[6px] border-blue-500 rounded-full border-t-transparent animate-spin-slow"></div>
            <span class="text-5xl animate-pulse">⚙️</span>
          </div>
          <div class="text-center">
            <p class="text-blue-500 font-medium text-sm mb-1">Imprimiendo ahora</p>
            <h2 class="text-3xl font-bold tracking-tight">Soporte Motor</h2>
          </div>
        </div>

        <div class="space-y-8 ml-2">
          <div class="flex gap-5">
            <div class="flex flex-col items-center">
              <div class="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              <div class="w-[2px] h-10 bg-gray-100 mt-2"></div>
            </div>
            <div class="-mt-1">
              <p class="text-sm font-semibold">Diseño verificado</p>
              <p class="text-xs text-gray-400">Hoy, 10:30 AM</p>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-2.5 h-2.5 bg-blue-100 rounded-full ring-4 ring-blue-50/50"></div>
            <div class="-mt-1">
              <p class="text-sm font-semibold text-gray-400">En cola de impresión</p>
              <p class="text-xs text-gray-300">Estimado: 2 horas</p>
            </div>
          </div>
        </div>

        <button class="w-full mt-12 bg-black text-white py-4 rounded-2xl font-semibold hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg shadow-black/10">
          Ver modelo en 3D
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
