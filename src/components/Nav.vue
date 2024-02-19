<script setup>
import { useAuthStore } from '@/stores';
const authStore = useAuthStore();
</script>

<template>
  <nav v-show="authStore.user" class="relative flex flex-wrap items-center content-between py-3 px-4 flex-no-wrap text-white bg-gray-900">
    <div class="flex flex-wrap list-reset pl-0 mb-0">
      <router-link to="/" class="inline-block py-2 px-4 no-underline">Home</router-link>
      <router-link to="/users" class="inline-block py-2 px-4 no-underline">Users</router-link>
      <button @click="authStore.logout()" class="inline-block align-middle text-center select-none border whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline font-normal text-blue-700 bg-transparent">Logout</button>
    </div>
  </nav>
</template>