<script setup>
  import { storeToRefs } from 'pinia';

  import { useAuthStore, useGymsStore } from '@/stores';
  import { fetchWrapper } from '@/utils';
  import { useAlertStore } from '@/stores';
  import { GymCard } from '@/components';


  const authStore = useAuthStore();
  const gymsStore = useGymsStore();

  const { gyms } = storeToRefs(gymsStore);
  const baseUrl = `${import.meta.env.VITE_API_URL}`;

  gymsStore.getAll();

  async function checkin(userId, gymId) {
    const alertStore = useAlertStore();
    try {
      await fetchWrapper.post(`${baseUrl}/user/${userId}/checkin/${gymId}`);
      alertStore.success('Checkin successful!');
    } catch (error) {
      const alertStore = useAlertStore();
      alertStore.error(error);
    }
  }
</script>

<template>
  <h1 class="text-3xl mb-4">Gyms</h1>
  <template v-if="gyms.length">
    <div v-for="gym in gyms" :key="gym.id">
      <GymCard :gym="gym" :userId="authStore.user.id" @checkin="checkin(authStore.user.id, gym.id)"/>
    </div>
  </template>
      
  <div v-if="gyms.loading">
    <span class="text-center">Loading...</span>
  </div>
  <div v-if="gyms.error">
    <span colspan="4" class="text-center">{{ gyms.error }}</span>
  </div>
</template>