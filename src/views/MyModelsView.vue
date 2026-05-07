<template>
  <div class="min-h-screen bg-slate-50 p-6 pb-40">
    <header class="mb-8 mt-4">
      <h1 class="text-3xl font-black text-slate-900">Mis Diseños</h1>
      <p class="text-slate-500 text-sm">Gestiona tu portfolio y ganancias</p>
    </header>

    <div
      class="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl mb-8 relative overflow-hidden"
    >
      <div class="relative z-10">
        <p class="text-blue-100 text-xs font-bold uppercase tracking-widest mb-2">
          Regalías acumuladas
        </p>
        <h2 class="text-4xl font-black">1.240,50€</h2>
        <button
          class="mt-6 bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold text-xs shadow-lg active:scale-95 transition-all"
        >
          Retirar Fondos
        </button>
      </div>
      <span class="absolute -bottom-10 -right-10 text-[120px] opacity-10">🎨</span>
    </div>

    <section>
      <h2 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-4">
        Mis Archivos STL
      </h2>
      <div class="space-y-4">
        <div
          v-for="i in 2"
          :key="i"
          class="bg-white p-5 rounded-[2rem] border border-white shadow-sm flex items-center gap-4"
        >
          <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl">
            🧊
          </div>
          <div class="flex-grow">
            <h4 class="font-bold text-slate-800 text-sm">Soporte Motor V{{ i + 7 }}</h4>
            <p class="text-[10px] text-slate-400 font-bold uppercase">124 Impresiones • Activo</p>
          </div>
          <p class="font-black text-blue-600">4.90€/u</p>
        </div>
      </div>
    </section>

    <button
      class="fixed bottom-28 right-6 bg-slate-950 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl font-light active:scale-90 transition-all z-50"
    >
      +
    </button>
  </div>
</template>
