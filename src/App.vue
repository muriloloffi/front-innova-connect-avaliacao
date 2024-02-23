<script setup>
import { Nav, Alert } from '@/components';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
  <div class="app-container" :class="authStore.user && 'bg-gray-100'">
    <Nav />
    <Alert />
    <div class="container mx-auto sm:px-4 pt-4 pb-4 max-w-5xl">
      <router-view />
    </div>
  </div>
</template>


<style scoped>
</style>
