<template>
  <div class="min-h-screen bg-slate-50/50 p-6 pb-40">
    <header class="mb-10 mt-4 px-2">
      <h1 class="text-3xl font-black tracking-tight text-slate-900">Mis Pedidos</h1>
      <p class="text-slate-500 text-sm mt-1">Sigue el estado de tus piezas</p>
    </header>

    <div v-for="order in orders" :key="order.id" class="mb-8">
      <div
        class="bg-white rounded-[3rem] p-8 shadow-sm border border-white relative overflow-hidden"
      >
        <div class="flex justify-between items-start mb-8">
          <div>
            <p class="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
              Orden #{{ order.id }}
            </p>
            <h2 class="text-xl font-bold text-slate-900">{{ order.productName }}</h2>
            <p class="text-xs text-slate-400 mt-1 italic">
              Entrega estimada: <span class="text-slate-900 font-bold">{{ order.eta }}</span>
            </p>
          </div>
          <div class="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden border border-slate-50">
            <img :src="order.image" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="space-y-8 relative">
          <div class="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

          <div v-for="(step, index) in order.steps" :key="index" class="flex gap-6 relative">
            <div
              :class="[
                'w-6 h-6 rounded-full border-4 z-10 transition-all duration-500',
                step.status === 'completed'
                  ? 'bg-blue-600 border-blue-100'
                  : step.status === 'active'
                    ? 'bg-white border-blue-600 animate-pulse'
                    : 'bg-white border-slate-50',
              ]"
            ></div>

            <div
              :class="['flex-grow pb-2', step.status === 'pending' ? 'opacity-30' : 'opacity-100']"
            >
              <h4 class="text-sm font-black text-slate-900">{{ step.title }}</h4>
              <p class="text-[10px] text-slate-500 leading-tight">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const orders = [
  {
    id: '4402-X',
    productName: 'Soporte Motor V8',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=200',
    eta: '12 Mayo, 2026',
    steps: [
      { title: 'Pedido Recibido', desc: 'Tu diseño ha sido validado.', status: 'completed' },
      { title: 'En Impresión', desc: 'Fabricándose en PETG Carbon.', status: 'active' },
      { title: 'Control de Calidad', desc: 'Verificación de tolerancias.', status: 'pending' },
      { title: 'Envío', desc: 'Reparto mediante dron.', status: 'pending' },
    ],
  },
]
</script>
