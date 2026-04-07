<template>
  <section class="py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100" id="about">
    <div class="container mx-auto px-4">
      <article data-aos="fade-up" data-aos-delay="400" class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Image Column -->
        <figure class="lg:w-5/12 relative">
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
            <img src="../assets/Aboutimg.jpg" alt="À propos de Glamour Clinic" loading="lazy"
              class="w-full h-auto object-cover aspect-[4/5]" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
          </div>

          <!-- Decorative Elements -->
          <span class="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-500 opacity-20 z-0"
            aria-hidden="true"></span>
          <span class="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-pink-600 opacity-20 z-0"
            aria-hidden="true"></span>
        </figure>

        <!-- Content Column -->
        <div data-aos="fade-up" data-aos-delay="600" class="lg:w-7/12">
          <header>
            <h2 id="about-heading" class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              À propos de <span class="text-pink-600">Glamour Clinic</span>
            </h2>
            <p class="text-lg text-gray-600 mb-6">
              Depuis plus de 10 ans, Glamour Clinic s'engage à fournir des soins esthétiques d'excellence à Casablanca. Notre équipe de professionnels certifiés allie expertise médicale et sens artistique pour des résultats naturels et harmonieux. Nous croyons en une approche personnalisée où chaque traitement est adapté à vos besoins spécifiques.
            </p>
          </header>
          <section class="mb-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Notre approche
            </h3>
            <ul class="space-y-3">
              <li v-for="(item, index) in approachItems" :key="index" class="flex items-start">
                <figure class="flex-shrink-0 w-6 h-6 mr-3 mt-1">
                  <i :class="item.icon" class="text-pink-600"></i>
                </figure>
                <p class="text-gray-600">{{ item.text }}</p>
              </li>
            </ul>
          </section>
          <!-- stats Section -->
          <section class="grid grid-cols-2 gap-4 mb-8">
            <article v-for="(item, index) in stats" :key="index"
              class="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <figure class="mr-3">
                <icon :icon="item.icon" class="text-pink-500" aria-hidden="true" />
              </figure>
              <div>
                <strong class="text-xl font-bold text-gray-800">{{
                  item.value
                }}</strong>
                <p claas="text-sm text-gray-600">{{ item.label }}</p>
              </div>
            </article>
          </section>
          <nav>
            <a href="#appointment"
              class="bg-pink-600 hover:bg-pink-700 text-white text-center px-6 py-3 rounded-full inline-block transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2">
              Rencontrer nos spécialistes
            </a>
          </nav>
        </div>
      </article>
      <!-- Mission Statment -->
      <aside class="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
        <span class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40"
          aria-hidden="true"></span>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">Notre mission</h3>
          <blockquote class="text-lg text-gray-700 mb-6">
            Notre mission est de vous aider à révéler votre beauté naturelle dans le respect de votre individualité. Nous nous engageons à utiliser des techniques innovantes et des produits de la plus haute qualité, tout en maintenant les normes de sécurité et d'éthique les plus strictes. Votre bien-être et votre satisfaction sont au cœur de notre démarche.
          </blockquote>
          <figure class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
              <Icon icon="fa-solid:user-md" class="text-pink-600" aria-hidden="true" />
            </div>
            <figcaption>
              <cite class="font-semibold text-gray-800 not-italic">
                Dr.Sarah Johnson
              </cite>
              <p class="text-sm text-gray-600">Directrice médicale & fondatrice</p>
            </figcaption>
          </figure>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const approachItems = ref([
  {
    icon: "fa-solid fa-heart",
    text: "Plans de soins personnalisés, adaptés à vos besoins",
  },
  {
    icon: "fa-solid fa-star",
    text: "Équipements de pointe et techniques modernes",
  },
  {
    icon: "fa-solid fa-user-md",
    text: "Professionnels expérimentés dédiés à votre beauté",
  },
]);

const stats = ref([
  { value: "10+", label: "Années d'expérience", icon: "fa-solid:award" },
  { value: "2.5k+", label: "Clients satisfaits", icon: "fa-solid-heart" },
  { value: "15+", label: "Médecins experts", icon: "fa-solid:user-md" },
  { value: "50+", label: "Soins", icon: "fa-solid:clinic-medical" },
]);
</script>
