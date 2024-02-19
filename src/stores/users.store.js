import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';
import { useAuthStore } from '@/stores';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;
const { apiSignUpRoute } = '@/_helpers/constants';

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: {},
    user: {}
  }),
  actions: {
    async signup(user) {
      await fetchWrapper.post(apiSignUpRoute, user);
    },
    async getAll() {
      this.users = { loading: true };
      try {
        this.users = await fetchWrapper.get(baseUrl);
      } catch (error) {
        this.users = { error };
      }
    },
    async getById(id) {
      this.user = { loading: true };
      try {
        this.user = await fetchWrapper.get(`${baseUrl}/${id}`);
      } catch (error) {
        this.user = { error };
      }
    },
    async update(id, params) {
      await fetchWrapper.put(`${baseUrl}/${id}`, params);
      
      const authStore = useAuthStore();
      if (id === authStore.user.id) {
        const user = { ...authStore.user, ...params };
        localStorage.setItem('user', JSON.stringify(user));
        authStore.user = user;
      }
    },
  }
})