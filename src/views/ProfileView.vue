<template>
  <div class="min-h-screen p-8 flex flex-col items-center">
    <!-- Avatar estilo Apple -->
    <div class="w-24 h-24 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-full mb-6 shadow-inner flex items-center justify-center text-4xl">
      👤
    </div>

    <h1 class="text-3xl font-bold tracking-tight">Mi Perfil</h1>
    <p class="text-slate-500 mt-2">ProtoMk User</p>

    <div class="w-full mt-10 space-y-4">
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
        <span class="font-medium">Ajustes de cuenta</span>
        <span class="text-slate-300">→</span>
      </div>
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
        <span class="font-medium text-red-500">Cerrar sesión</span>
      </div>
    </div>
  </div>
</template>
