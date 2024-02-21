import { defineStore } from 'pinia';

import { fetchWrapper } from '@/utils';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useGymsStore = defineStore({
  id: 'gyms',
  state: () => ({
    gyms: {},
    gym: {}
  }),
  actions: {
    async getAll() {
      this.gym = { loading: true };
      try {
        this.gyms = await fetchWrapper.get(`${baseUrl}/gyms`);
      } catch (error) {
        this.gyms = { error };
      }
    },
    async getById(id) {
      this.gym = { loading: true };
      try {
        this.gym = await fetchWrapper.get(`${baseUrl}/gym/${id}`);
      } catch (error) {
        this.gym = { error };
      }
    },
  }
})