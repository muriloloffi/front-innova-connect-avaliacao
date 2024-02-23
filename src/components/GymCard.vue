<script setup>

defineProps({ gym: Object });
defineEmits(['checkin']);

</script>

<template>

  <div class="max-w-full bg-white rounded overflow-hidden shadow-lg my-5">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ gym.name }}</div>
      <p class="text-gray-700 text-base">{{ gym.description }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href="tel:{{ gym.phone }}">📞 {{ gym.phone }}</span>
      <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ gym.coordinates[0] }}</span> -->
      <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ gym.coordinates[1] }}</span> -->
    </div>
    <div class="px-6 pt-4 pb-2">
      <button @click="$emit('checkin')" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkin</button>
    </div>
  </div>

</template>