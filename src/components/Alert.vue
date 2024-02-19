<script setup>
import { storeToRefs } from 'pinia';
import { useAlertStore } from '@/stores';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
</script>

<template>
  <div v-if="alert" class="container mx-auto sm:px-4">
    <div class="m-6">
      <div class="relative px-3 py-3 mb-4 border rounded" :class="alert.type"> 
        <button @click="alertStore.clear()" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded px-3 leading-normal no-underline text-blue-700 bg-transparent absolute top-0 bottom-0 right-0 py-3">×</button>
        {{ alert.message }}
      </div>
    </div>
  </div>
</template>