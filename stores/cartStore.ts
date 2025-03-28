import { defineStore } from 'pinia'

interface CartItem {
  id: number
  title: string
  slug: string
  price: number
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((count: number, item: CartItem) => count + item.quantity, 0)
    },

    subtotal: (state) => {
      return state.items.reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
      )
    },

    isEmpty: (state) => state.items.length === 0
  },

  actions: {
    addItem(item: Omit<CartItem, 'quantity'> & { quantity?: number }) {
      const existingItemIndex = this.items.findIndex((i: CartItem) => i.id === item.id)

      if (existingItemIndex !== -1) {
        // Item already exists, increase quantity
        this.items[existingItemIndex].quantity += item.quantity || 1
      } else {
        // Add new item to cart
        this.items.push({
          ...item,
          quantity: item.quantity || 1
        })
      }
    },

    removeItem(index: number) {
      this.items.splice(index, 1)
    },

    updateQuantity(index: number, quantity: number) {
      if (quantity > 0) {
        this.items[index].quantity = quantity
      }
    },

    clearCart() {
      this.items = []
    }
  },

  persist: import.meta.client ? { storage: localStorage } : false
})
