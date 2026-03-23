<template>
  <div class="pt-32 pb-20 max-w-5xl mx-auto px-6" v-if="project">
    <router-link to="/" class="text-blue-500 hover:text-blue-400 mb-8 inline-block font-bold">
      ← Retour aux projets
    </router-link>

    <h1 class="text-5xl font-black mb-6">{{ project.title }}</h1>

    <div class="grid grid-cols-1 gap-4 mb-12">
      <img :src="project.image" class="w-full rounded-3xl shadow-2xl border border-white/10" alt="Main view">
      <div class="grid grid-cols-2 gap-4">
        <img v-for="img in project.gallery" :key="img" :src="img" class="rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition">
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-12">
      <div class="md:col-span-2">
        <h2 class="text-2xl font-bold mb-4 text-white">À propos du projet</h2>
        <p class="text-gray-400 leading-relaxed">{{ project.longDescription }}</p>
      </div>
      <div class="bg-gray-900/50 p-8 rounded-3xl border border-white/5 h-fit">
        <h3 class="font-bold mb-4 uppercase text-xs tracking-widest text-blue-500">Technologies</h3>
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="t in project.tech" :key="t" class="bg-white/5 px-3 py-1 rounded-full text-sm">{{ t }}</span>
        </div>
        <a :href="project.link" class="block text-center bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition">Voir le site live</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from '../data/projects'
import { useRoute } from 'vue-router'
const route = useRoute()
const project = projects.find(p => p.id === parseInt(route.params.id))
</script>
