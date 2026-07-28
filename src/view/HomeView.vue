<template>
  <main
    class="min-h-screen transition-colors duration-700 overflow-x-hidden relative"
    :class="isDark ? 'bg-[#05070a] text-slate-400' : 'bg-gray-50 text-slate-600'"
    @mousemove="handleGlobalMouseMove"
  >
    <!-- NAVBAR -->
    <nav class="fixed top-0 left-0 right-0 z-[90] px-6 md:px-10 py-4 flex justify-between items-center backdrop-blur-md" :class="isDark ? 'bg-[#05070a]/60' : 'bg-gray-50/60'">
      <p class="text-blue-400 font-bold text-[20px]">Sola .</p>
      <div class="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-widest">
        <a href="#about" class="hover:text-blue-500 transition-colors">{{ lang === 'FR' ? 'À propos' : 'About' }}</a>
        <a href="#skills" class="hover:text-blue-500 transition-colors">{{ lang === 'FR' ? 'Compétences' : 'Skills' }}</a>
        <a href="#services" class="hover:text-blue-500 transition-colors">Services</a>
        <a href="#projects" class="hover:text-blue-500 transition-colors">{{ lang === 'FR' ? 'Projets' : 'Projects' }}</a>
        <a href="#contact" class="hover:text-blue-500 transition-colors">Contact</a>
      </div>
      <div class="flex gap-2">
        <button @click="toggleLang" class="glass-btn px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest">
          {{ lang }}
        </button>
        <button @click="isDark = !isDark" class="glass-btn w-8 h-8 flex items-center justify-center text-xs">
          {{ isDark ? '🌙' : '☀️' }}
        </button>
      </div>
    </nav>

    <div v-if="isDark" class="fixed inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-[-10%] left-[-5%] w-[35%] h-[35%] bg-blue-600/5 blur-[100px] rounded-full"
        :style="{ transform: `translate(${mouseX * 0.2}px, ${mouseY * 0.2}px)` }"
      ></div>
    </div>

    <section class="relative min-h-[95vh] flex items-center justify-center px-6 z-10 reveal-on-scroll pt-20">
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

      <div>
        <h1 class="text-5xl md:text-4xl font-black leading-tight tracking-tighter" :class="isDark ? 'text-white' : 'text-slate-900'">
          RAZAFINDRABE<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-extrabold">Danielson Sitrakiniaina.</span>
        </h1>
        <p class="mt-3 text-[11px] font-black uppercase tracking-[0.3em] text-blue-400/80">
          {{ lang === 'FR' ? 'Développeur Fullstack — React • Laravel • Node.js' : 'Fullstack Developer — React • Laravel • Node.js' }}
        </p>
      </div>

      <p class="text-sm max-w-md mx-auto lg:mx-0 leading-relaxed opacity-70 border-l border-blue-500/30 pl-4">
        {{ lang === 'FR'
           ? "Étudiant en Master à l'ENI Fianarantsoa, je conçois des applications web robustes de bout en bout — de la modélisation de la base de données jusqu'à l'interface finale. J'aime particulièrement transformer des besoins métiers complexes en outils simples et fiables au quotidien."
           : "Master's student at ENI Fianarantsoa, I build robust end-to-end web applications — from database design to the final interface. I especially enjoy turning complex business requirements into simple, reliable everyday tools."
        }}
      </p>

      <div class="flex flex-wrap justify-center lg:justify-start gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <img v-for="icon in ['html','css','js','react','nodejs','java','spring','mysql']" :key="icon" :src="`https://skillicons.dev/icons?i=${icon}`" class="w-5 h-5" />
      </div>

      <div class="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
        <a href="/public/CV_Niaina.pdf" target="_blank" download="CV_Niaina.pdf" class="px-8 py-4 bg-blue-600 text-white font-black text-[9px] uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
          {{ lang === 'FR' ? 'Voir mon CV' : 'See my CV' }}
        </a>
        <a href="#contact" class="px-8 py-4 border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] rounded-xl hover:border-blue-500/40 hover:text-blue-400 transition-all" :class="isDark ? 'text-white' : 'text-slate-900'">
          {{ lang === 'FR' ? 'Me contacter' : 'Contact me' }}
        </a>
      </div>
    </div>

    <div class="relative flex justify-center lg:justify-end">
      <div class="absolute -left-4 top-10 z-20 bg-blue-600 p-4 rounded-2xl shadow-2xl animate-float hidden md:block">
        <p class="text-white font-black text-2xl leading-none">1+</p>
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

    <section id="about" class="py-24 px-6 reveal-on-scroll relative">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-12 text-center">
          {{ lang === 'FR' ? 'Mon Parcours' : 'My Journey' }}
        </h2>
        <div class="grid md:grid-cols-12 gap-6">
          <div class="md:col-span-8 bento-card p-10 flex flex-col justify-center">
             <h3 class="text-2xl font-black mb-6" :class="isDark ? 'text-white' : 'text-slate-900'">
                {{ lang === 'FR' ? 'Qui suis-je ?' : 'About me' }}
             </h3>
             <p class="text-sm leading-relaxed opacity-80 mb-4">
                {{ lang === 'FR'
                   ? "Passionné par la résolution de problèmes et la création numérique, je suis actuellement en Master à l'École Nationale d'Informatique (ENI) de Fianarantsoa. Mon approche ne se limite pas à écrire du code ; je cherche avant tout à concevoir des outils qui ont un impact réel sur le quotidien des utilisateurs."
                   : "Passionate about problem-solving and digital creation, I am currently a Master's student at the National School of Computer Science (ENI) in Fianarantsoa. My approach goes beyond writing code; I aim to design tools that have a real impact on users' daily lives."
                }}
             </p>
             <p class="text-sm leading-relaxed opacity-80">
                {{ lang === 'FR'
                   ? "Curieux de nature et autodidacte sur de nombreux aspects, j'aime explorer de nouvelles façons de structurer l'information pour la rendre accessible et élégante. Mon objectif est d'allier la rigueur logique de l'ingénierie à une sensibilité esthétique soignée."
                   : "Curious by nature and self-taught in many areas, I enjoy exploring new ways of structuring information to make it accessible and elegant. My goal is to combine the logical rigor of engineering with a refined aesthetic sensibility."
                }}
             </p>
          </div>
          <div class="md:col-span-4 grid gap-6">
            <div class="bento-card p-8 flex flex-col justify-center">
              <span class="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-2">Formation</span>
              <p class="text-[11px] font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">M2 ENI Fianarantsoa</p>
              <p class="text-[9px] opacity-50">Master en Informatique</p>
            </div>
            <div class="bento-card p-8 flex flex-col justify-center">
              <span class="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-2">Philosophie</span>
              <p class="text-[11px] font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">Simplicité & Qualité</p>
              <p class="text-[9px] opacity-50">L'utilisateur au centre</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPETENCES -->
<section id="skills" class="py-24 px-6 reveal-on-scroll">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">
        {{ lang === 'FR' ? 'Compétences & Outils' : 'Skills & Tools' }}
      </h2>
      <p class="text-sm opacity-50 max-w-lg mx-auto leading-relaxed">
        {{ lang === 'FR'
           ? "Un aperçu des technologies que j'utilise au quotidien pour construire des architectures logicielles fiables."
           : "A look at the technologies I use daily to build reliable software architectures."
        }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div
        v-for="cat in skillCategories"
        :key="cat.title"
        class="group relative p-8 rounded-[35px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
        :class="cat.hoverBorder"
      >
        <div class="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" :class="cat.glow"></div>

        <div class="relative flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" :class="cat.badgeStyle">
            {{ cat.emoji }}
          </div>
          <div>
            <h3 class="text-base font-black" :class="isDark ? 'text-white' : 'text-slate-900'">{{ cat.title }}</h3>
            <p class="text-[10px] opacity-50 mt-1">{{ lang === 'FR' ? cat.descFr : cat.descEn }}</p>
          </div>
        </div>

        <div class="relative flex flex-wrap gap-2">
          <span
            v-for="tool in cat.tools"
            :key="tool.name"
            class="inline-flex items-center gap-1.5 text-[9px] font-bold px-3 py-1.5 rounded-full border transition-all duration-300"
            :class="isDark ? 'border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20' : 'border-slate-900/10 bg-slate-900/[0.02] text-slate-700'"
          >
            <img :src="`https://skillicons.dev/icons?i=${tool.icon}`" class="w-3.5 h-3.5" />
            {{ tool.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="py-20 px-6 z-10 relative reveal-on-scroll overflow-hidden">
  <!-- Glow décoratif en fond -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/[0.04] blur-[100px] rounded-full pointer-events-none"></div>

  <div class="max-w-5xl mx-auto grid lg:grid-cols-3 gap-5 relative">
    <div class="lg:col-span-2 bento-card p-10 md:p-12 min-h-[280px] flex flex-col justify-center relative overflow-hidden group">
      <!-- Grand guillemet décoratif -->
      <span class="absolute top-4 right-8 text-[120px] font-black leading-none opacity-[0.03] select-none" :class="isDark ? 'text-white' : 'text-slate-900'">"</span>

      <div class="relative z-10">
        <div class="inline-flex items-center gap-2 mb-6">
          <span class="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"></span>
          <span class="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">
            {{ lang === 'FR' ? 'Philosophie' : 'Philosophy' }}
          </span>
        </div>

        <h2 class="text-2xl md:text-3xl font-black mb-6 tracking-tight" :class="isDark ? 'text-white' : 'text-slate-900'">
          {{ lang === 'FR' ? "L'art de l'ingénierie" : "The art of engineering" }}
        </h2>

        <p class="text-sm md:text-base leading-relaxed opacity-70 italic font-medium max-w-lg">
          {{ lang === 'FR'
             ? "Je façonne des écosystèmes numériques où la performance technique et l'élégance visuelle ne font qu'un."
             : "I shape digital ecosystems where technical performance and visual elegance merge."
          }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-1 gap-5">
      <div class="bento-card p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/[0.06] group-hover:to-cyan-400/[0.03] transition-all duration-500"></div>
        <span class="relative text-4xl mb-1 group-hover:-translate-y-1 transition-transform duration-500">🚀</span>
        <span class="relative text-4xl font-black text-blue-500 group-hover:scale-110 transition-transform duration-500">10+</span>
        <span class="relative text-[8px] uppercase font-bold tracking-widest mt-2 opacity-60">
          {{ lang === 'FR' ? 'Projets' : 'Projects' }}
        </span>
      </div>

      <div class="bento-card p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/[0.06] group-hover:to-blue-600/[0.03] transition-all duration-500"></div>
        <span class="relative text-4xl mb-1 group-hover:-translate-y-1 transition-transform duration-500">⚡</span>
        <span class="relative text-4xl font-black group-hover:scale-110 transition-transform duration-500" :class="isDark ? 'text-white' : 'text-slate-900'">1+</span>
        <span class="relative text-[8px] uppercase font-bold tracking-widest mt-2 opacity-60">
          {{ lang === 'FR' ? 'Années' : 'Years' }}
        </span>
      </div>
    </div>
  </div>
</section>

    <!-- EXPERIENCE / TIMELINE -->
    <section class="py-24 px-6 reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-center font-bold text-blue-500 text-[30px] mb-16 uppercase tracking-tighter italic">
          {{ lang === 'FR' ? 'Mon Expérience' : 'My Experience' }}
        </h2>
        <div class="relative border-l border-blue-500/20 pl-10 space-y-14">
          <div v-for="item in timeline" :key="item.title" class="relative">
            <span class="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"></span>
            <span class="text-[9px] font-black text-blue-500 uppercase tracking-widest">{{ item.date }}</span>
            <h3 class="text-sm font-black mt-1 mb-2" :class="isDark ? 'text-white' : 'text-slate-900'">{{ item.title }}</h3>
            <p class="text-[11px] opacity-60 leading-relaxed">{{ lang === 'FR' ? item.descFr : item.descEn }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-24 px-6 reveal-on-scroll relative">
      <h2 class="text-center font-bold text-blue-500 text-[30px] mb-5 uppercase tracking-tighter italic">Mes Services</h2>
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

    <section id="projects" class="py-20 px-6 reveal-on-scroll">
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
              <span class="text-[10px] font-bold text-blue-400 opacity-70">{{ p.tech }}</span>
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

    <section id="contact" class="py-32 px-6 reveal-on-scroll relative overflow-hidden">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-8">Un projet en tête ?</h2>
        <h3 class="text-xl md:text-3xl font-black tracking-tighter mb-10" :class="isDark ? 'text-white' : 'text-slate-900'">
  {{ lang === 'FR' ? "DISCUTONS-EN." : "LET'S TALK." }}
</h3>

<form
  v-if="!formSubmitted"
  @submit.prevent="handleSubmit"
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  class="max-w-md mx-auto space-y-4 text-left"
>
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden">
    <label>Ne pas remplir: <input name="bot-field" v-model="form.botField" /></label>
  </p>

  <div>
    <input
      v-model="form.name"
      type="text"
      name="name"
      required
      :placeholder="lang === 'FR' ? 'Votre nom' : 'Your name'"
      class="w-full px-5 py-3.5 rounded-xl text-sm bg-white/[0.03] border border-white/10 focus:border-blue-500/50 outline-none transition-colors"
      :class="isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'"
    />
  </div>

  <div>
    <input
      v-model="form.email"
      type="email"
      name="email"
      required
      placeholder="Email"
      class="w-full px-5 py-3.5 rounded-xl text-sm bg-white/[0.03] border border-white/10 focus:border-blue-500/50 outline-none transition-colors"
      :class="isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'"
    />
  </div>

  <div>
    <textarea
      v-model="form.message"
      name="message"
      required
      rows="5"
      :placeholder="lang === 'FR' ? 'Votre message' : 'Your message'"
      class="w-full px-5 py-3.5 rounded-xl text-sm bg-white/[0.03] border border-white/10 focus:border-blue-500/50 outline-none transition-colors resize-none"
      :class="isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'"
    ></textarea>
  </div>

  <button
    type="submit"
    :disabled="isSubmitting"
    class="w-full px-8 py-4 bg-blue-600 text-white font-black text-[9px] uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {{ isSubmitting ? (lang === 'FR' ? 'Envoi...' : 'Sending...') : (lang === 'FR' ? 'Envoyer' : 'Send') }}
  </button>

  <p v-if="formError" class="text-red-400 text-[11px] text-center">
    {{ lang === 'FR' ? "Une erreur est survenue. Réessaie ou écris-moi directement." : "Something went wrong. Try again or email me directly." }}
  </p>
</form>

<div v-else class="max-w-md mx-auto text-center py-10">
  <p class="text-2xl mb-3">✅</p>
  <p class="text-sm font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">
    {{ lang === 'FR' ? "Message envoyé, merci !" : "Message sent, thank you!" }}
  </p>
  <p class="text-[11px] opacity-50 mt-2">
    {{ lang === 'FR' ? "Je te réponds au plus vite." : "I'll get back to you soon." }}
  </p>
</div>

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
              <a href="https://www.linkedin.com/in/sitrakiniaina-razafindrabe-188627317/" target="_blank" class="text-[10px] font-black uppercase hover:text-blue-500 transition-all">LinkedIn</a>
              <a href="https://github.com/niaina11" target="_blank" class="text-[10px] font-black uppercase hover:text-blue-500 transition-all">Github</a>
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
import video3 from '@/assets/video/video3.mp4'
import image1 from '@/assets/img1.png'
import M2 from '@/assets/video/M2.mp4'
import M2_image from '@/assets/M2.png'

const isDark = ref(true)
const lang = ref('FR')
const mouseX = ref(0)
const mouseY = ref(0)
const selectedProject = ref(null)

const form = ref({ name: '', email: '', message: '', botField: '' })
const isSubmitting = ref(false)
const formSubmitted = ref(false)
const formError = ref(false)

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = async () => {
  isSubmitting.value = true
  formError.value = false
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form.value })
    })
    formSubmitted.value = true
  } catch (err) {
    formError.value = true
  } finally {
    isSubmitting.value = false
  }
}

const handleGlobalMouseMove = (e) => {
  mouseX.value = (e.clientX - window.innerWidth / 2) / 25
  mouseY.value = (e.clientY - window.innerHeight / 2) / 25
}

const toggleLang = () => { lang.value = lang.value === 'FR' ? 'EN' : 'FR' }
const openProject = (p) => { selectedProject.value = p }

const skillCategories = [
  {
    title: 'Frontend Architecture',
    descFr: 'Interfaces dynamiques, réactives et modulaires.',
    descEn: 'Dynamic, reactive and modular interfaces.',
    emoji: '🖥️',
    badgeStyle: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    hoverBorder: 'hover:border-blue-500/20',
    glow: 'bg-blue-500',
    tools: [
      { name: 'React.js', icon: 'react' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'JavaScript', icon: 'js' },
    ]
  },
  {
    title: 'Backend Architecture',
    descFr: 'Systèmes résilients, extensibles et optimisés.',
    descEn: 'Resilient, scalable and optimized systems.',
    emoji: '🧩',
    badgeStyle: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/20',
    glow: 'bg-cyan-400',
    tools: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Express.js', icon: 'express' },
    ]
  },
  {
    title: 'Bases de données',
    descFr: 'Modélisation rigoureuse et intégrité des données.',
    descEn: 'Rigorous modeling and data integrity.',
    emoji: '🗄️',
    badgeStyle: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    hoverBorder: 'hover:border-purple-500/20',
    glow: 'bg-purple-500',
    tools: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' },
    ]
  },
  {
    title: 'DevOps & Workflows',
    descFr: 'Déploiement continu et qualité du code.',
    descEn: 'Continuous deployment and code quality.',
    emoji: '⚙️',
    badgeStyle: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    hoverBorder: 'hover:border-amber-500/20',
    glow: 'bg-amber-500',
    tools: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Git', icon: 'git' },
      { name: 'Clean Architecture', icon: 'idea' },
    ]
  },
]

const timeline = [
  {
    date: '2025 — 2026',
    title: 'Automatisation de repartition des tâches pour les operateur Room || DIRICKX GUARD',
    descFr: "Conception d'un module complet de planification (React + Laravel + Node.js) : rotation d'équipes sur 7 jours, équilibrage des affectations, traçabilité via logs JSON.",
    descEn: 'Full planning module (React + Laravel + Node.js): 7-day team rotation logic, assignment balancing, JSON-based traceability.'
  },
  {
    date: '2024 — 2025',
    title: 'Grid Cluster — Microservices MERN || Projet d\'études ENI Fianarantsoa',
    descFr: "Architecture microservices déployée avec Docker & Kubernetes, autoscaling via HPA et tests de charge k6.",
    descEn: 'MERN microservices architecture deployed with Docker & Kubernetes, HPA autoscaling and k6 load testing.'
  },
  {
    date: '2023 — 2024',
    title: 'Conception et réalisation d\'une application web pour la gestion d\'état civil || Commune urbaine Ambalavao',
    descFr: "Analyse des besoins, modélisation de la base de données et développement d'une application web sécurisée pour la gestion des registres d'état civil.",
    descEn: 'Requirements analysis, database modeling, and development of a secure web application for civil registry management.'
},
{
    date: '2022 — 2023',
    title: 'Conception et réalisation d\'une application web pour la gestion de congé des employés || TELESOURCIA Antananarivo',
    descFr: "Étude des besoins métier pour la gestion des cycles de congés annuels et des motifs d'absence.",
    descEn: 'Analysis of business needs for managing annual leave cycles and absence reasons.'
}

]

const enrichedServices = [
  {
    title: 'Frontend Development',
    icon: '💻',
    fullDescFr: "Interfaces modernes, performantes et ultra-réactives. Focus sur l'UX.",
    fullDescEn: "Modern, high-performance, and ultra-responsive interfaces. Focus on UX .",
    tags: ['Vue 3', 'Tailwind', 'React(js ou ts)']
  },
  {
    title: 'Backend Engineering',
    icon: '⚙️',
    fullDescFr: "Architecture robuste avec Node.js et Spring Boot ou Laravel. Création d'APIs sécurisées et hautement scalables.",
    fullDescEn: "Robust architecture with Node.js and Spring Boot or Laravel. Building secure and highly scalable APIs.",
    tags: ['Node', 'Spring', 'Laravel', 'Docker']
  },
  {
    title: 'Database',
    icon: '🗄️',
    fullDescFr: "Optimisation de bases de données SQL et déploiement continu.",
    fullDescEn: "SQL database optimization and continuous deployment. Cloud infrastructure management.",
    tags: ['MySQL', 'Postgres' ]
  }
]

const projects = [
  {
  id: 1,
  title: 'Répartition automatisée des tâches',
  tech: 'React • Laravel • Node.js • MySQL',
  img: M2_image,
  videoUrl: M2,
  videoType: 'local',
  descFr: "Application web permettant de gérer les plannings et d'automatiser la répartition des tâches des agents Room selon des règles métier. Elle intègre la génération automatique des plannings, l'assignation manuelle, la traçabilité des affectations et l'exportation des plannings au format Excel.",
  descEn: "A web application for managing schedules and automating task assignment for Room agents based on business rules. It features automatic schedule generation, manual task assignment, assignment tracking, and Excel schedule export."
},
  {
    id: 2,
    title: 'Etat civil',
    tech: 'React Ts • Spring-boot • PostgreSQL',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4VST-KkLj12Z6hgM9UkPoOVM4sSbSR8XMA&s',
    videoUrl: video2,
    videoType: 'local',
    descFr: 'Développement d\'une application Fullstack dédiée à la numérisation et à la gestion des actes d\'état civil. Automatisation de la rédaction d\'actes juridiques complexes.',
    descEn: 'Fullstack application for digitizing and managing civil status records. Automation of complex legal document drafting.'
  },
  {
    id: 3,
    title: 'Projet SID(Système d\'Information Décisionnel)',
    tech: 'React • Node Js • MySQL',
    img: image1,
    videoUrl: video3,
    videoType: 'local',
    descFr: 'Orchestrateur ETL & Dashboard Analytique Temps Réel : Une plateforme décisionnelle (BI) de bout en bout où une API Node.js automatise et séquence l\'exécution de flux ETL Talend complexes pour alimenter un entrepôt de données (MySQL) modélisé en étoile. Les indicateurs de performance clés (KPIs) et les analyses croisées sont restitués instantanément sur un dashboard web moderne et réactif développé en React.',
    descEn: 'Real-Time ETL Orchestrator & Analytical Dashboard: An end-to-end Business Intelligence (BI) platform where a Node.js API automates and sequences complex Talend ETL workflows to populate a star-schema MySQL data warehouse. Critical KPIs and cross-dimensional insights are instantly rendered on a modern, responsive React web dashboard.'
  },
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

html { scroll-behavior: smooth; }

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
