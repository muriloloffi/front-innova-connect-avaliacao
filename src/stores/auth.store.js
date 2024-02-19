import { defineStore } from 'pinia';

import { fetchWrapper } from '@/_helpers';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const user = await fetchWrapper.post(`$baseUrl/signin`, { username, password });

        this.user = user;

        localStorage.setItem('user', JSON.stringify(user));

        // TODO: redirect to returnUrl || routing
      } catch (error) {
        // TODO: display alert
        console.log(error);
      }
    }
  },
  logout() {
    this.user = null;
    localStorage.removeItem('user');

    // TODO: redirect to returnUrl

  }
});