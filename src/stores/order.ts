import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderStatus: 'printing', // 'verified', 'printing', 'shipped', 'delivered'
    itemName: 'Soporte de Motor',
    estimatedTime: '2 horas',
  }),
  actions: {
    updateStatus(newStatus: string) {
      this.orderStatus = newStatus
    }
  }
})
