import { defineStore } from 'pinia';

import { fetchWrapper } from '@/utils';

import { apiSignUpRoute } from '@/utils';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: {},
    user: {}
  }),
  actions: {
    async signup(user) {
      await fetchWrapper.post(`${baseUrl}${apiSignUpRoute}`, user);
    },
    async getAll() {
      this.users = { loading: true };
      try {
        this.users = await fetchWrapper.get(`${baseUrl}/users`);
      } catch (error) {
        this.users = { error };
      }
    },
    async getById(id) {
      this.user = { loading: true };
      try {
        this.user = await fetchWrapper.get(`${baseUrl}/user/${id}`);
      } catch (error) {
        this.user = { error };
      }
    },
  }
})