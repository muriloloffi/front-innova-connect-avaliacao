import { defineStore } from 'pinia';

import { fetchWrapper } from '@/utils';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;
const { apiSignUpRoute } = '@/utils/constants';

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
  }
})