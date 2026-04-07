<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Clinic information -->
        <section class="lg:col-span-2">
          <header class="flex items-center mb-6">
            <Icon
              icon="fa-solid:clinic-medical"
              class="text-3xl text-pink-500 mr-3"
              aria-hidden="true"
            />
            <h2 class="text-2xl font-bold">Glamour Clinic</h2>
          </header>
          <p class="text-gray-400 mb-6">
            Clinique esthétique de référence, dédiée à sublimer votre beauté grâce à
            des soins de pointe et un accompagnement personnalisé à Casablanca.
          </p>
          <nav aria-label="Liens des réseaux sociaux">
            <ul class="flex space-x-4">
              <li v-for="(item, index) in sociallinks" :key="index">
                <a
                  :href="item.href"
                  class="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                  :aria-label="item.label"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon :icon="item.icon" class="text-lg" />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <!-- Quick links -->
        <section>
          <h3
            class="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500"
          >
            Liens rapides
          </h3>
          <nav aria-label="Liens rapides">
            <ul class="space-y-3">
              <li v-for="(link, index) in quicklinks" :key="index">
                <a
                  :href="link.href"
                  class="text-gray-400 hover:text-pink-500 transition duration-300 flex items-center"
                >
                  <Icon icon="mdi:chevron-right" class="mr-2" />
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <!-- Contact info -->
        <address class="not-italic">
          <h3
            class="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500"
          >
            Nous contacter
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in contactInfo"
              :key="index"
              class="flex items-start"
            >
              <Icon
                :icon="item.icon"
                class="text-pink-500 mr-3 mt-1 flex-shrink-0"
              />
              <component
                :is="item.content.type"
                v-bind="item.content.props"
                class="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                {{ item.content.text }}
              </component>
            </li>
          </ul>
        </address>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Glamour Clinic. Tous droits réservés.
        </p>
        <nav aria-label="Liens légaux">
          <ul class="flex space-x-6 text-sm">
            <li v-for="(link, index) in legalLinks" :key="index">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
       <a href="https://Edson-lawson.vercel.app" target="_blank" rel="noopener" class="sweep-link inline-block py-4 text-white hover:text-pink-500 transition-colors duration-300 relative">
                            Developed by Edson Lawson
                        </a>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";

const sociallinks = ref([
  { icon: "fa-brands:facebook-f", label: "Facebook", href: "https://facebook.com" },
  { icon: "fa-brands:twitter", label: "Twitter", href: "https://twitter.com" },
  { icon: "fa-brands:instagram", label: "Instagram", href: "https://instagram.com" },
  { icon: "fa-brands:linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "fa-brands:youtube", label: "YouTube", href: "https://youtube.com" },
]);

const quicklinks = ref([
  { text: "Accueil", href: "#" },
  { text: "À propos", href: "#about" },
  { text: "Nos services", href: "#services" },
  { text: "Nos spécialistes", href: "#specialists" },
  { text: "Contact", href: "#contact" },
  { text: "Prendre rendez-vous", href: "#appointment" },
]);

const contactInfo = ref([
  {
    icon: "material-symbols:location-on",
    content: {
      type: "a",
      props: {
        href: "https://maps.google.com",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      text: "123 Avenue de la Beauté, Casablanca",
    },
  },
  {
    icon: "fa-solid:phone-alt",
    content: {
      type: "a",
      props: {
        href: "tel:+1235566223",
      },
      text: "+123 556 6223",
    },
  },
  {
    icon: "fa-solid:envelope",
    content: {
      type: "a",
      props: {
        href: "mailto:info@glamourclinic.com",
      },
      text: "info@glamourclinic.com",
    },
  },
]);

const legalLinks = ref([
  { text: "Politique de confidentialité", href: "#privacy" },
  { text: "Conditions d'utilisation", href: "#terms" },
  { text: "Politique de cookies", href: "#cookies" },
]);

const currentYear = computed(() => new Date().getFullYear());
</script>
