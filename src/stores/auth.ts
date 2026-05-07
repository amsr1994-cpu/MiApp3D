import { defineStore } from 'pinia'
import { ref } from 'vue'

// Definimos los 4 pilares de tu marketplace
export type UserRole = 'cliente' | 'disenador' | 'fabricante' | 'admin'

export const useAuthStore = defineStore('auth', () => {
  // Tipamos el usuario para que solo acepte esos roles
  const user = ref<{ name: string; role: UserRole } | null>(null)
  const isLoggedIn = ref(false)

  // Quitamos el 'any' y ponemos 'UserRole'
  function login(name: string, role: UserRole) {
    user.value = { name, role }
    isLoggedIn.value = true
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
  }

  return { user, isLoggedIn, login, logout }
})
