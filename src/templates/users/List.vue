<script setup>
  import { storeToRefs } from 'pinia';

  import { useUsersStore } from '@/stores';

  const usersStore = useUsersStore();
  const { users } = storeToRefs(usersStore);

  usersStore.getAll();
</script>

<template>
  <h1>Users</h1>
  <table class="w-full max-w-full mb-4 bg-transparent table-auto">
    <thead>
      <tr>
        <th class="w-1/3">Name</th>
        <th class="w-1/3">Email</th>
        <th class="w-1/3">Role</th>
        <th class="w-1/3">Status</th>
        <th class="w-1/3">Created At</th>
        <th class="w-1/3">Updated At</th>
        <th class="w-1/3">Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="users.length">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.updated_at }}</td>
          <td style="white-space: nowrap">
            <router-link :to="`/users/update/${user.id}`" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline py-1 text-xs  bg-blue-600 text-white hover:bg-blue-600 mr-1">Edit</router-link>
          </td>
        </tr>
      </template>
      <tr v-if="users.loading">
        <td colspan="4" class="text-center">Loading...</td>
      </tr>
      <tr v-if="users.error">
        <td colspan="4" class="text-center">{{ users.error }}</td>
      </tr>
    </tbody>      
  </table>
</template>