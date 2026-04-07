<template>
  <section
    class="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    id="specialists"
  >
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <header
        class="text-center mb-16 relative"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <span
          class="absolute -top-10 -left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-pink-100 opacity-30 z-0"
          aria-hidden="true"
        ></span>
        <h2
          id="specialists-heading"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10"
        >
          Découvrez notre <span class="text-pink-600">équipe d'experts</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
          Nos spécialistes certifiés allient expertise médicale et sens
          artistique.
        </p>
        <span
          class="absolute -bottom-6 right-1/4 h-16 w-16 rounded-full bg-purple-100 opacity-20 z-0"
          aria-hidden="true"
        ></span>
      </header>
      <!-- Specialists Grid -->
      <ul
        data-aos="fade-up"
        data-aos-delay="500"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
      >
        <li
          v-for="doctor in specialists"
          :key="doctor.id"
          class="group relative"
        >
          <figure class="relative h-80 overflow-hidden">
            <img
              :src="doctor.image"
              :alt="doctor.name"
              class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span
              class="absolute inset-0 bg-gradient-to-t from-black/60 to transparent"
              aria-hidden="true"
            ></span>
            <aside
              class="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm"
              :aria-label="`note : ${doctor.rating} étoiles`"
            >
              <Icon
                v-for="i in 5"
                :key="i"
                :icon="i <= doctor.rating ? 'mdi:star' : 'mdi:star-outline'"
                class="text-yellow-400 inline"
              />
              <span class="ml-1 text-sm font-medium"
                >{{ doctor.rating }}.0</span
              >
            </aside>
          </figure>

          <div class="p-6 relative -mt-10">
            <div class="bg-pink-50 rounded-lg shadow-md p-6">
              <header>
                <h3 class="text-xl font-bold text-gray-800 mb-1">
                  {{ doctor.name }}
                </h3>
                <p class="text-pink-600 font-medium mb-3">{{ doctor.role }}</p>
              </header>
              <p class="text-gray-600 mb-4">{{ doctor.bio }}</p>
              <ul class="flex flex-wrap gap-2 mb-4">
                <li v-for="(spec, i) in doctor.specialties" :key="i">
                  <span
                    class="bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {{ spec }}
                  </span>
                </li>
              </ul>

              <figure
                class="absolute -top-6 left-6 bg-pink-600 text-white p-3 rounded-full shadow-lg"
                aria-hidden="true"
              >
                <Icon icon="mdi:format-quote-open" class="text-lg" />
              </figure>
            </div>
          </div>
          <article></article>
        </li>
      </ul>

      <!-- CTA Section -->
      <aside
        class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <span
          class="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-200 opacity-20"
          aria-hidden="true"
        ></span>
        <span
          class="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-200 opacity-20"
          aria-hidden="true"
        ></span>
        <div class="relative z-10">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Prêt(e) à consulter nos spécialistes ?
          </h3>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Réservez une consultation personnalisée pour discuter de vos objectifs
            esthétiques et des options de traitement.
          </p>
          <nav class="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#appointment"
              class="bg-pink-600 hover:bg-pink-700 text-white text-center px-6 py-3 rounded-full inline-block transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
            >
              Réserver une consultation
            </a>
            <a
              href="#contact"
              class="border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              aria-label="Nous contacter"
            >
              Nous contacter
            </a>
          </nav>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Image1 from "@assets/specialistsimg.jpg";
import Image2 from "@assets/specialistsimg1.jpg";
import Image3 from "@assets/specialistsimg2.jpg";

const specialists = ref([
  {
    id: 1,
    name: "Dr. Anne Johnson",
    role: "Chirurgienne plastique",
    image: Image1,
    bio: "Avec plus de 15 ans d'expérience en chirurgie esthétique, le Dr Johnson s'est spécialisée dans les techniques de rajeunissement du visage. Diplômée de l'Université de Paris et formée aux États-Unis, elle est reconnue pour son approche artistique et ses résultats naturels.",
    rating: 5,
    specialties: ["Lifting", "Rhinoplastie", "Blépharoplastie"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Dermatologue",
    image: Image2,
    bio: "Dermatologue certifié avec une expertise en médecine esthétique, le Dr Chen a développé des protocoles innovants pour les traitements au laser et les injections. Sa double formation en dermatologie médicale et esthétique lui permet d'offrir des solutions complètes et personnalisées à ses patients.",
    rating: 4,
    specialties: ["Traitement laser", "Botox", "Comblement"],
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    role: "Médecin esthétique",
    image: Image3,
    bio: "Pionnière dans les traitements non chirurgicaux de rajeunissement, le Dr Rodriguez est une experte reconnue en médecine esthétique. Avec plus de 12 ans d'expérience internationale, elle combine des techniques innovantes pour des résultats spectaculaires et naturels, en mettant l'accent sur le bien-être global de ses patients.",
    rating: 5,
    specialties: ["CoolSculpting", "Ultherapy", "Fils tenseurs"],
  },
]);
</script>
