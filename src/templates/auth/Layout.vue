<script setup>
import { useAuthStore } from '@/stores';
import { router } from '@/router';

const authStore = useAuthStore();
if (authStore.user) {
  router.push('/');
}
</script>

<template>
  <div class="container mx-auto sm:px-4">
    <div class="flex flex-wrap">
      <div class="sm:w-2/3 pr-4 pl-4 sm:mx-1/5 mt-5">
        <router-view />
      </div>
    </div>
  </div>
</template>