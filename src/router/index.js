import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ProjectDetail from '../view/ProjectDetail.vue' // Nouvelle page

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projet/:id', name: 'project-detail', component: ProjectDetail, props: true },
  ],
  // Cette fonction permet de revenir en haut de page lors d'un changement de route
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
