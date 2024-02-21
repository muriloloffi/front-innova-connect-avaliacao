<script setup>
  import { storeToRefs } from 'pinia';

  import { useGymsStore } from '@/stores';

  const gymsStore = useGymsStore();
  const { gyms } = storeToRefs(gymsStore);

  // usersStore.getAll();
  gymsStore.getAll();
</script>

<template>
  <h1>Gyms</h1>
  <table class="w-full max-w-full mb-4 bg-transparent table-auto">
    <thead class="table-header-group">
      <tr>
        <th class="border">Name</th>
        <th>Description</th>
        <th>Phone</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="gyms.length">
        <tr v-for="gym in gyms" :key="gym.id">
          <td class="table-cell">{{ gym.name }}</td>
          <td>{{ gym.description }}</td>
          <td>{{ gym.phone }}</td>
          <td>{{ gym.coordinates }}</td>
          <td style="white-space: nowrap; display: flex; justify-content: center;">
            <router-link :to="`/gym/update/${gym.id}`" class="flex align-middle text-center select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline py-1 text-xs bg-blue-600 text-white hover:bg-blue-400 mr-1">Edit</router-link>
          </td>
        </tr>
      </template>
      <tr v-if="gyms.loading">
        <td colspan="4" class="text-center">Loading...</td>
      </tr>
      <tr v-if="gyms.error">
        <td colspan="4" class="text-center">{{ gyms.error }}</td>
      </tr>
    </tbody>      
  </table>
</template>