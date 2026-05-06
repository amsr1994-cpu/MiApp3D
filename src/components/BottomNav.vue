<template>
  <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
    <div class="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-2 flex justify-around items-center">

      <router-link to="/" class="nav-item" active-class="active">
        <span class="text-2xl">🔍</span>
        <span class="label">Explorar</span>
      </router-link>

      <router-link to="/orders" class="nav-item" active-class="active">
        <span class="text-2xl">📦</span>
        <span class="label">Pedidos</span>
      </router-link>

      <router-link to="/profile" class="nav-item" active-class="active">
        <span class="text-2xl">👤</span>
        <span class="label">Perfil</span>
      </router-link>

    </div>
  </nav>
</template>

<style scoped>
  /* Esta línea le enseña a este componente qué clases existen en Tailwind v4 */
  @reference "../assets/main.css";

  .nav-item {
    @apply flex flex-col items-center gap-1 p-3 transition-all duration-300 rounded-3xl w-20;
  }

  .label {
    @apply text-[10px] font-bold uppercase tracking-tighter text-slate-400;
  }

  .nav-item span:first-child {
    @apply opacity-40 grayscale transition-all;
  }

  .active {
    @apply bg-blue-50/50;
  }

    .active span:first-child {
      @apply opacity-100 grayscale-0 scale-110;
    }

    .active .label {
      @apply text-blue-600;
    }
</style>
