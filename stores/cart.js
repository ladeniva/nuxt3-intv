import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    quantity: 0,
  }),
  getters: {
    cartItemsNo: (state) => state.quantity,
  },
  actions: {
    increment() {
      this.quantity++;
    },
  },
});
