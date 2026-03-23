<template>
  <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 border border-gray-700">
    <img :src="project.image" class="w-full h-48 object-cover" alt="project image" />
    <div class="p-6">
      <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
      <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="t in project.tech" :key="t" class="text-xs font-semibold bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          {{ t }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['project']);
</script>
