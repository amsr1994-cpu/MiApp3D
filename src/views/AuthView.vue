<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div
      class="w-full max-w-md bg-white rounded-[3rem] shadow-2xl shadow-blue-100 p-10 border border-white"
    >
      <div class="text-center mb-10">
        <div
          class="inline-block bg-blue-600 text-white p-4 rounded-[1.5rem] mb-4 shadow-lg shadow-blue-200"
        >
          <span class="text-3xl font-black">3D</span>
        </div>
        <h1 class="text-3xl font-black text-slate-900 tracking-tight">Bienvenido</h1>
        <p class="text-slate-400 text-sm mt-2">Únete a la red de manufactura 2026</p>
      </div>

      <div class="space-y-3 mb-8">
        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">
          ¿Cómo quieres participar?
        </p>
        <div class="grid grid-cols-1 gap-3">
          <button
            v-for="role in roles"
            :key="role.id"
            @click="selectedRole = role.id"
            :class="[
              'flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left',
              selectedRole === role.id
                ? 'border-blue-600 bg-blue-50/50'
                : 'border-slate-50 bg-white',
            ]"
          >
            <span class="text-2xl">{{ role.icon }}</span>
            <div>
              <p class="font-bold text-sm text-slate-900">{{ role.title }}</p>
              <p class="text-[10px] text-slate-500 leading-tight">{{ role.desc }}</p>
            </div>
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Nombre completo"
          class="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all font-medium text-sm text-slate-900"
        />

        <input
          type="email"
          placeholder="Email"
          class="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all font-medium text-sm text-slate-900"
        />

        <button
          @click="handleAuth"
          class="w-full bg-slate-950 text-white py-5 rounded-2xl font-bold shadow-xl active:scale-95 transition-all mt-4"
        >
          Comenzar como {{ selectedRole }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore, type UserRole } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

// 2. CREAMOS LA VARIABLE: Ahora sí existe 'username'
const username = ref('')
const selectedRole = ref<UserRole>('cliente')

interface RoleOption {
  id: UserRole
  title: string
  icon: string
  desc: string
}

const roles: RoleOption[] = [
  { id: 'cliente', title: 'Comprador', icon: '🛍️', desc: 'Encarga piezas.' },
  { id: 'disenador', title: 'Diseñador', icon: '🎨', desc: 'Sube modelos 3D.' },
  { id: 'fabricante', title: 'Fabricante', icon: '⚙️', desc: 'Imprime pedidos.' },
]

const handleAuth = () => {
  if (username.value && username.value.trim()) {
    auth.login(username.value, selectedRole.value)

    // Control de tráfico por rol
    if (selectedRole.value === 'fabricante') {
      router.push('/print-queue')
    } else if (selectedRole.value === 'disenador') {
      // 🚀 ¡Añadimos esta ruta para el diseñador!
      router.push('/my-models')
    } else {
      router.push('/explore')
    }
  }
}
</script>
