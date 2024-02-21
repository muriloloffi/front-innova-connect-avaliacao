<script setup>
  import { storeToRefs } from 'pinia';

  import { useGymsStore } from '@/stores';

  const gymsStore = useGymsStore();
  const { gyms } = storeToRefs(gymsStore);

  // usersStore.getAll();
  gymsStore.getAll();
</script>

<template>
  <h1 class="text-3xl mb-4">Gyms</h1>
  <div class="shadow rounded border-b border-gray-200">
    <table class="w-full max-w-full mb-4 bg-transparent table-auto">
      <thead class="bg-gray-600 text-white">
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Location</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="gyms.length">
          <tr v-for="gym in gyms" class="odd:bg-white" :key="gym.id">
            <td>{{ gym.name }}</td>
            <td>{{ gym.description }}</td>
            <td>{{ gym.phone }}</td>
            <td>{{ gym.coordinates }}</td>
            <td class="whitespace-nowrap flex justify-center">
              <router-link :to="`/gym/update/${gym.id}`" class="flex justify-center align-middle text-center select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline py-1 text-xs bg-blue-600 text-white hover:bg-blue-400">Edit</router-link>
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
  </div>
</template>