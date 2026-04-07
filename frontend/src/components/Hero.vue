<script setup>
import { ref } from "vue";
const stats = ref([
  { value: "2500", label: "Clients satisfaits" },
  { value: "15+", label: "Spécialistes" },
  { value: "50", label: "Soins" },
  { value: "10+", label: "Années" },
]);
</script>

<template>
  <header class="relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100" id="home">
    <article
      class="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 md:py-28 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
      <!-- Hero content -->
      <section class="w-full lg:w-1/2 text-center lg:text-left">
        <hgroup data-aos="fade-up" data-aos-delay="500">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Sublimez votre
            <mark class="text-pink-600 bg-transparent">Beauté</mark> naturelle
          </h1>
          <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Découvrez l'excellence en soins esthétiques à Casablanca. Notre clinique allie expertise médicale et approche personnalisée pour sublimer votre beauté naturelle. Des soins innovants prodigués par des professionnels expérimentés dans un cadre élégant et chaleureux.
          </p>
        </hgroup>
        <!-- CTA Button -->
        <nav data-aos="fade-up" data-aos-delay="600"
          class="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mb-12">
          <a href="#appointment"
            class="bg-pink-600 hover:bg-pink-700 text-white text-center px-8 py-3 rounded-full transition shadow-lg">
            Réserver une consultation
          </a>
          <a href="#services"
            class="border border-pink-600 text-pink-600 hover:bg-pink-50 text-center px-8 py-3 rounded-full transition"
            aria-label="Découvrir nos services">
            Découvrir nos services
          </a>
        </nav>
        <!-- Stats Section -->
        <aside data-aos="fade-up" data-aos-delay="800" class="py-4">
          <ul class="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-center">
            <li v-for="(Stat, index) in stats" :key="index" class="w-1/2 sm:w-auto">
              <strong class="text-2xl font-bold text-pink-600">{{
                Stat.value
                }}</strong>
              <small class="block text-sm text-gray-600">{{
                Stat.label
                }}</small>
            </li>
          </ul>
        </aside>
      </section>

      <!-- Hero image -->
      <figure data-aos="fade-up" data-aos-delay="700" class="w-full lg:w-1/2 flex justify-center relative">
        <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <span class="bg-pink-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 absolute -top-10 -left-10 opacity-20"
            arial-hidden="true"></span>
          <span
            class="bg-purple-400 rounded-full w-44 h-48 sm:w-64 sm:h-64 absolute -bottom-10 -right-10 opacity-20"></span>
          <img src="../assets/hero.jpg" alt="Femme souriante après un soin esthétique"
            class="relative z-10 rounded-full shadow-2xl w-full object-cover"
            width="400"
            height="400"
            loading="eager"/>
        </div>
      </figure>
    </article>
  </header>
</template>
