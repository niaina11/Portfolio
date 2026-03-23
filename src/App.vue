<template>
  <div class="min-h-screen bg-[#0f172a] text-gray-200 selection:bg-blue-500/30">
    <!-- <NavbarCard /> -->

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
      <p>© 2026 Niaina Dev — Built with Vue 3 & Tailwind</p>
    </footer>
  </div>
</template>

<script setup>
// C'est ici qu'on fait le lien !
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
