<template>
  <nav class="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <router-link to="/" class="text-2xl font-black tracking-tighter text-white group">
        NIAINA<span class="text-blue-500 group-hover:ml-1 transition-all">.</span>
      </router-link>

      <div class="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
        <router-link to="/" class="hover:text-white transition">Accueil</router-link>
        <a href="#projects" class="hover:text-white transition">Projets</a>
        <a href="#about" class="hover:text-white transition">À propos</a>
        <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold transition">
          Contact
        </a>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2 focus:outline-none">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="['h-0.5 w-full bg-white transition-all', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['h-0.5 w-full bg-white transition-all', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['h-0.5 w-full bg-white transition-all', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </div>

    <transition name="menu-slide">
      <div v-if="isMenuOpen" class="fixed inset-0 top-20 bg-[#0f172a] z-40 md:hidden flex flex-col p-8 gap-6 text-xl font-bold">
        <router-link @click="isMenuOpen = false" to="/">Accueil</router-link>
        <a @click="isMenuOpen = false" href="#projects">Projets</a>
        <a @click="isMenuOpen = false" href="#about">À propos</a>
        <a @click="isMenuOpen = false" href="#contact" class="text-blue-500">Contact</a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
.menu-slide-enter-active, .menu-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.menu-slide-enter-from, .menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
