<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const navLinks = ref([
  { label: "Accueil", href: "home" },
  { label: "Services", href: "services" },
  { label: "À propos", href: "about" },
  { label: "Nos spécialistes", href: "specialists" },
  { label: "Contact", href: "contact" },
]);

const isMenuOpen = ref(false);
const activeSection = ref("home");
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour détecter la section active
const updateActiveSection = () => {
  const sections = navLinks.value.map((link) => link.href);
  const scrollPosition = window.scrollY + 100; // Offset pour déclencher avant d'arriver à la section

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i];
      break;
    }
  }
};

// Fonction pour vérifier si un lien est actif
const isActive = (href) => {
  return activeSection.value === href;
};

// Fonction pour détecter le scroll et appliquer la transparence
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  updateActiveSection();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Vérifier la section active et l'état du scroll au chargement
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-pink-100 to-purple-100'
    ]"
  >
    <div class="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a
        href="#"
        class="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
      >
        <img src="../assets/Glamour-icone.png" alt="" class="w-25 h-25">
      </a>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6" aria-label="Navigation principale">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="`#${link.href}`"
          :class="[
            'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded px-3 py-2',
            isActive(link.href)
              ? 'text-pink-600 font-semibold '
              : 'text-gray-700 hover:text-pink-600',
          ]"
          >{{ link.label }}</a
        >
      </nav>
      <!-- appointment Button (desktop) -->
      <div class="hidden md:block">
        <a
          href="#appointment"
          class="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
        >
          Prendre rendez-vous
        </a>
      </div>
      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
        @click="toggleMenu"
        aria-label="Ouvrir le menu"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="mobile-menu"
      >
        <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <aside
      v-if="isMenuOpen"
      id="mobile-menu"
      class="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0 z-40"
      aria-label="Mobile menu"
    >
      <nav aria-label="Navigation mobile">
        <ul class="flex flex-col space-y-4">
          <li v-for="(link, index) in navLinks" :key="index">
            <a
              :href="`#${link.href}`"
              :class="[
                'block transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded',
                isActive(link.href)
                  ? 'text-pink-600 font-semibold bg-pink-50'
                  : 'text-gray-700 hover:text-pink-600',
              ]"
              @click="toggleMenu"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="#appointment"
              class="block bg-pink-600 hover:bg-pink-700 text-white text-center px-4 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
              @click="toggleMenu"
            >
              Prendre rendez-vous
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </header>
</template>
