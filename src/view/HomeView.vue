<template>
  <main
    class="min-h-screen transition-colors duration-700 overflow-x-hidden relative"
    :class="isDark ? 'bg-[#05070a] text-slate-400' : 'bg-gray-50 text-slate-600'"
    @mousemove="handleGlobalMouseMove"
  >
  <div class="mt-4 ml-10">
    <p class="text-blue-400 font-bold text-[20px]">Sola .</p>
  </div>
    <div v-if="isDark" class="fixed inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-blue-600/5 blur-[100px] rounded-full"
        :style="{ transform: `translate(${mouseX * 0.2}px, ${mouseY * 0.2}px)` }"
      ></div>
    </div>

    <div class="fixed top-5 right-5 z-[100] flex gap-2">
      <button @click="toggleLang" class="glass-btn px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest">
        {{ lang }}
      </button>
      <button @click="isDark = !isDark" class="glass-btn w-8 h-8 flex items-center justify-center text-xs">
        {{ isDark ? '🌙' : '☀️' }}
      </button>
    </div>

    <section class="relative min-h-[95vh] flex items-center justify-center px-6 z-10 reveal-on-scroll">
      <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
        <div class="absolute top-[15%] left-[5%] animate-float-slow"><img src="https://skillicons.dev/icons?i=java" class="w-7 h-7" /></div>
        <div class="absolute top-[10%] right-[15%] animate-float" style="animation-delay: 1s"><img src="https://skillicons.dev/icons?i=spring" class="w-7 h-7" /></div>
        <div class="absolute bottom-[25%] left-[10%] animate-float" style="animation-delay: 2s"><img src="https://skillicons.dev/icons?i=mysql" class="w-8 h-8" /></div>
        <div class="absolute bottom-[15%] right-[20%] animate-float-slow"><img src="https://skillicons.dev/icons?i=nodejs" class="w-8 h-8" /></div>
      </div>

      <div class="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[8px] font-black uppercase tracking-[0.2em]">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            {{ lang === 'FR' ? 'Disponible pour missions' : 'Available for work' }}
          </div>
          <h1 class="text-5xl md:text-4xl font-black leading-tight tracking-tighter" :class="isDark ? 'text-white' : 'text-slate-900'">
            FULLSTACK<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-extrabold">DEVELOPER.</span>
          </h1>
          <p class="text-sm max-w-sm mx-auto lg:mx-0 leading-relaxed opacity-70 border-l border-blue-500/30 pl-4">
            {{ lang === 'FR' ? "Je transforme vos idées complexes en interfaces fluides." : "I turn complex ideas into fluid interfaces." }}
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <img v-for="icon in ['html','css','js','react','nodejs','java','spring','mysql']" :key="icon" :src="`https://skillicons.dev/icons?i=${icon}`" class="w-5 h-5" />
          </div>
          <div class="pt-4 flex justify-center lg:justify-start">
            <a href="../assets/upload/CV2025.pdf" class="px-8 py-4 bg-blue-600 text-white font-black text-[9px] uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
              {{ lang === 'FR' ? 'Voir mon CV' : 'See my CV' }}
            </a>

          </div>
        </div>

        <div class="relative flex justify-center lg:justify-end">
          <div class="absolute -left-4 top-10 z-20 bg-blue-600 p-4 rounded-2xl shadow-2xl animate-float hidden md:block">
            <p class="text-white font-black text-2xl leading-none">2+</p>
            <p class="text-[7px] text-white/80 uppercase font-black tracking-tighter">Ans Exp.</p>
          </div>
          <div class="relative w-full max-w-[280px] aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group bg-[#0a0c10]">
            <img
              src="@/assets/Niaina.jpeg"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              :style="{ transform: `translate(${mouseX * 0.04}px, ${mouseY * 0.04}px)` }"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 z-10 relative reveal-on-scroll">
      <div class="max-w-5xl mx-auto grid lg:grid-cols-3 gap-5">
        <div class="lg:col-span-2 bento-card p-10 min-h-[250px] flex flex-col justify-center">
          <h2 class="text-xl font-bold mb-4 underline decoration-blue-500 decoration-4 underline-offset-4" :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ lang === 'FR' ? "L'ART DE L'INGÉNIERIE" : "THE ART OF ENGINEERING" }}
          </h2>
          <p class="text-xs md:text-sm leading-relaxed opacity-70 italic font-medium">
            {{ lang === 'FR' ? "Je façonne des écosystèmes numériques où la performance technique et l'élégance visuelle ne font qu'un." : "I shape digital ecosystems where technical performance and visual elegance merge." }}
          </p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-1 gap-5">
          <div class="bento-card p-6 flex flex-col items-center justify-center text-center group">
            <span class="text-4xl font-black text-blue-500 group-hover:scale-110 transition-transform">15+</span>
            <span class="text-[8px] uppercase font-bold tracking-widest mt-2">Projets</span>
          </div>
          <div class="bento-card p-6 flex flex-col items-center justify-center text-center group">
            <span class="text-4xl font-black group-hover:scale-110 transition-transform" :class="isDark ? 'text-white' : 'text-slate-900'">2+</span>
            <span class="text-[8px] uppercase font-bold tracking-widest mt-2">Années</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 reveal-on-scroll relative">
      <h2 class="text-center font-bold text-blue-50 text-[30px] mb-5">Mes Services</h2>
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div v-for="(s, index) in enrichedServices" :key="s.title" class="p-8 rounded-[40px] border border-white/5 bg-white/[0.02] hover:bg-blue-600/[0.03] transition-all duration-500 group relative overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-[0.02] group-hover:opacity-[0.05] font-black">0{{ index + 1 }}</div>
          <div class="text-4xl mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">{{ s.icon }}</div>
          <h3 class="text-sm font-black mb-4 uppercase tracking-widest" :class="isDark ? 'text-white' : 'text-slate-900'">{{ s.title }}</h3>
          <p class="text-[11px] opacity-60 leading-relaxed mb-6">{{ lang === 'FR' ? s.fullDescFr : s.fullDescEn }}</p>
          <div class="flex gap-2">
            <span v-for="tag in s.tags" :key="tag" class="text-[7px] font-black px-2 py-1 bg-blue-500/10 text-blue-500 rounded uppercase">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 reveal-on-scroll">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-black mb-12 text-center uppercase tracking-widest" :class="isDark ? 'text-white' : 'text-slate-900'">Réalisations.</h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div v-for="p in projects" :key="p.id" @click="openProject(p)" class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-[35px] aspect-video bg-slate-900 mb-6 border border-white/5 shadow-lg group-hover:border-blue-500/50 transition-all duration-500">
              <img :src="p.img" class="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/20 backdrop-blur-sm">
                <span class="px-6 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl">Visionner la démo</span>
              </div>
            </div>
            <div class="flex justify-between items-center px-4">
              <h3 class="text-md font-black uppercase tracking-tighter" :class="isDark ? 'text-white' : 'text-slate-900'">{{ p.title }}</h3>
              <span class="text-[8px] font-bold text-blue-500 opacity-50">{{ p.tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <transition name="fade">
      <div v-if="selectedProject" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-[#05070a]/95 backdrop-blur-xl" @click="selectedProject = null"></div>
        <div class="relative w-full max-w-5xl bg-[#0a0c10] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
          <div class="w-full md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px]">
            <video v-if="selectedProject.videoType === 'local'" :src="selectedProject.videoUrl" autoplay loop muted controls class="w-full h-full object-cover absolute inset-0"></video>
            <iframe v-else :src="selectedProject.videoUrl" class="w-full h-full absolute inset-0" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="w-full md:w-2/5 p-10 overflow-y-auto custom-scrollbar">
            <button @click="selectedProject = null" class="absolute top-6 right-8 text-white/20 hover:text-white transition-colors text-2xl">×</button>
            <h2 class="text-3xl font-black text-white mb-6 uppercase tracking-tighter">{{ selectedProject.title }}</h2>
            <p class="text-xs leading-relaxed text-slate-400 mb-8">{{ lang === 'FR' ? selectedProject.descFr : selectedProject.descEn }}</p>
            <div class="space-y-4 mb-10">
              <h4 class="text-[9px] font-black text-blue-500 uppercase tracking-widest">Technologies clés</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="f in ['Docker', 'Cloud', 'Secure Auth']" :key="f" class="text-[8px] text-white/40 border border-white/10 px-2 py-1 rounded-md">{{ f }}</span>
              </div>
            </div>
            <a :href="selectedProject.link" class="block w-full bg-blue-600 text-white text-center py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all">Visiter le site</a>
          </div>
        </div>
      </div>
    </transition>

    <section class="py-32 px-6 reveal-on-scroll relative overflow-hidden">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-8">Un projet en tête ?</h2>
        <a href="razafindrabesitrakiniaina11@gmail.com" class="group relative inline-block">
          <h3 class="text-2xl md:text-5xl font-black tracking-tighter transition-all duration-500 group-hover:text-blue-600" :class="isDark ? 'text-white' : 'text-slate-900'">
            {{ lang === 'FR' ? "DISCUTONS-EN." : "LET'S TALK." }}
          </h3>
          <div class="h-1.5 w-0 bg-blue-600 mx-auto group-hover:w-full transition-all duration-500"></div>
        </a>

        <div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-white/5 pt-16">
          <div class="space-y-4">
            <h4 class="text-[8px] font-bold uppercase tracking-widest opacity-40">Contact Direct</h4>
            <p class="text-[11px] font-bold tracking-widest hover:text-blue-500 transition-colors cursor-pointer">razafindrabesitrakiniaina11@gmail.com</p>
            <p class="text-[11px] font-bold tracking-widest">+261 34 83 132 14</p>
          </div>
          <div class="space-y-4">
            <h4 class="text-[8px] font-bold uppercase tracking-widest opacity-40">Localisation</h4>
            <p class="text-[11px] font-bold tracking-widest uppercase">Fianarantsoa, Madagascar</p>
            <p class="text-[9px] opacity-40 italic">Heure Locale: UTC+3</p>
          </div>
          <div class="space-y-4">
            <h4 class="text-[8px] font-bold uppercase tracking-widest opacity-40">Réseaux</h4>
            <div class="flex justify-center md:justify-start gap-6">
              <a href="#" class="text-[10px] font-black uppercase hover:text-blue-500 transition-all">LinkedIn</a>
              <a href="#" class="text-[10px] font-black uppercase hover:text-blue-500 transition-all">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-12 px-6 border-t border-white/5 bg-white/[0.01]">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-xl shadow-blue-600/30">N</div>
          <div>
            <span class="block text-[10px] font-black uppercase tracking-widest" :class="isDark ? 'text-white' : 'text-slate-900'">Niaina Digital</span>
            <span class="text-[7px] uppercase opacity-40 font-bold tracking-widest italic">Fullstack Architect</span>
          </div>
        </div>
        <div class="text-[8px] font-bold uppercase opacity-20 tracking-[0.2em]">
          &copy; 2026 — Conçu avec Vue.js 3 & Tailwind CSS
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import testVideo from '@/assets/video/video.mp4'
import video2 from '@/assets/video/video2.mp4'

const isDark = ref(true)
const lang = ref('FR')
const mouseX = ref(0)
const mouseY = ref(0)
const selectedProject = ref(null)

const handleGlobalMouseMove = (e) => {
  // Calcul optimisé pour un mouvement fluide
  mouseX.value = (e.clientX - window.innerWidth / 2) / 25
  mouseY.value = (e.clientY - window.innerHeight / 2) / 25
}

const toggleLang = () => { lang.value = lang.value === 'FR' ? 'EN' : 'FR' }
const openProject = (p) => { selectedProject.value = p }

const enrichedServices = [
  {
    title: 'Frontend Development',
    icon: '💻',
    fullDescFr: "Interfaces modernes, performantes et ultra-réactives utilisant Vue 3 et React. Focus sur l'UX et le SEO.",
    fullDescEn: "Modern, high-performance, and ultra-responsive interfaces using Vue 3 and React. Focus on UX and SEO.",
    tags: ['Vue 3', 'Tailwind', 'GSAP']
  },
  {
    title: 'Backend Engineering',
    icon: '⚙️',
    fullDescFr: "Architecture robuste avec Node.js et Spring Boot. Création d'APIs sécurisées et hautement scalables.",
    fullDescEn: "Robust architecture with Node.js and Spring Boot. Building secure and highly scalable APIs.",
    tags: ['Node', 'Spring', 'Docker']
  },
  {
    title: 'Database & DevOps',
    icon: '🗄️',
    fullDescFr: "Optimisation de bases de données SQL et déploiement continu. Gestion de l'infrastructure cloud.",
    fullDescEn: "SQL database optimization and continuous deployment. Cloud infrastructure management.",
    tags: ['MySQL', 'Postgres', 'AWS']
  }
]

const projects = [
  {
    id: 1,
    title: 'Nexus Dashboard',
    tech: 'VUE 3 • NODE',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    videoUrl: testVideo,
    videoType: 'local',
    descFr: 'Une interface de gestion analytique complète avec visualisation de données en temps réel.',
    descEn: 'A complete analytical management interface with real-time data visualization.'
  },
  {
    id: 2,
    title: 'Etat civil',
    tech: 'React Ts • Spring-boot • PostgreSQL',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4VST-KkLj12Z6hgM9UkPoOVM4sSbSR8XMA&s',
    videoUrl: video2,
    videoType: 'local',
    descFr: 'Développement d\'une application Fullstack enterprise-grade dédiée à la numérisation et à la gestion des actes d\'état civil (Naissances, Décès, Mariages). Le projet répond à une problématique réelle : automatiser la rédaction d\'actes juridiques complexes tout en respectant les normes administratives et linguistiques malgaches.',
    descEn: 'Enterprise-grade fullstack application for digitizing and managing civil status records (births, deaths, marriages). The project addresses a real-world challenge: automating the drafting of complex legal documents while adhering to administrative and linguistic standards in Malagasy.'
  },
  {
    id: 3,
    title: 'E-Luxe Concept',
    tech: 'FLUTTER • FIREBASE',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    descFr: 'Expérience e-commerce haut de gamme développée pour une fluidité maximale sur mobile.',
    descEn: 'High-end e-commerce experience developed for maximum mobile fluidity.'
  },
  {
    id: 4,
    title: 'E-Luxe Concept',
    tech: 'FLUTTER • FIREBASE',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'embed',
    descFr: 'Expérience e-commerce haut de gamme développée pour une fluidité maximale sur mobile.',
    descEn: 'High-end e-commerce experience developed for maximum mobile fluidity.'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-active') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style>
@import "tailwindcss";
@reference "tailwindcss";

.glass-btn { @apply rounded-lg border border-white/10 bg-white/5 backdrop-blur-md transition-all active:scale-90 hover:bg-white/10; }
.bento-card { @apply rounded-[35px] border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-blue-500/20; }
.reveal-on-scroll { opacity: 0; transform: translateY(30px); transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
.reveal-on-scroll.is-active { opacity: 1; transform: translateY(0); }

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
@keyframes float-slow { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(5deg); } }
.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 8s ease-in-out infinite; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

body { @apply m-0 p-0 overflow-x-hidden bg-[#05070a]; font-family: 'Inter', sans-serif; cursor: default; }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-thumb { @apply bg-blue-600/20 rounded-full hover:bg-blue-600/40; }
.custom-scrollbar::-webkit-scrollbar { width: 3px; }
.custom-scrollbar::-webkit-scrollbar-thumb { @apply bg-white/10; }
</style>
