import { defineStore } from 'pinia';

export const useAlertStore = defineStore({
  id: 'alert',
  state: () => ({
    alert: null,
  }),
  actions: {
    success(message) {
      this.alert = { message, type: 'bg-green-200 border-green-300 text-green-800' };
    },
    error(message) {
      this.alert = { message, type: 'bg-red-200 border-red-300 text-red-800' };
    },
    clear() {
      this.alert = null;
    },
  }
});