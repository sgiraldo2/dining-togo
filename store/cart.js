import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(item) {
      const found = this.items.find(i => i.id === item.id)
      if (found) {
        found.quantity += item.quantity
      } else {
        this.items.push(item)
      }
    },
    removeItem(id) {
      const index = this.items.findIndex(i => i.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    removeAllItems() {
      this.items = []
    },
    increaseItemQuantity(id) {
      const found = this.items.find(i => i.id === id)
      if (found) {
        found.quantity++
      }
    },
    decreaseItemQuantity(id) {
      const found = this.items.find(i => i.id === id)
      if (found && found.quantity > 1) {
        found.quantity--
      }
    }
  },
  getters: {
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0)
    }
  }
})

export const useOrderStore = defineStore('order', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(item) {
      const found = this.items.find(i => i.id === item.id)
      if (found) {
        found.quantity += item.quantity
      } else {
        this.items.push(item)
      }
    },
    removeItem(id) {
      const index = this.items.findIndex(i => i.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    removeAllItems() {
      this.items = []
    }
  },
  getters: {
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0)
    }
  }
})

export const useFavoriteStore = defineStore('favoriteItems', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(item) {
      const found = this.items.find(i => i.id === item.id)
      if (found) {
        found.quantity += item.quantity
      } else {
        this.items.push(item)
      }
    },
    removeItem(id) {
      const index = this.items.findIndex(i => i.id === id)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    removeAllItems() {
      this.items = []
    }
  },
  getters: {
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0)
    }
  }
})