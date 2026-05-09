<template>
  <section class="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100" id="contact">
    <div class="container mx-auto px-4">
      <!-- Section header -->
      <header class="text-center mb-16 relative" data-aos="fade-up" data-aos-delay="400">
        <span
          class="absolute -top-10 -left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-pink-100 opacity-30 z-0"
          aria-hidden="true"></span>
        <h2 id="specialists-heading" class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
          Contactez <span class="text-pink-600">notre clinique</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
          Contactez-nous pour réserver votre consultation ou poser vos questions
          sur nos services.
        </p>
        <span class="absolute -bottom-6 right-1/4 h-16 w-16 rounded-full bg-purple-100 opacity-20 z-0"
          aria-hidden="true"></span>
      </header>

      <!-- Main  Content -->
      <main class="flex flex-col lg:flex-row gap-12">
        <!-- Contact info -->
        <aside class="lg:w-2/5">
          <section class="bg-white rounded-2xl shadow-xl p-8 h-full">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Nous contacter</h2>
            <address class="space-y-6">
              <article v-for="(item, index) in contactItems" :key="index" class="flex items-start">
                <figure class="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <icon :icon="item.icon" class="text-pink-600 text-xl" />
                </figure>
                <div>
                  <h3 class="font-semibold text-gray-800 mb-1">
                    {{ item.title }}
                  </h3>
                  <div v-html="item.content" class="text-gray-600"></div>
                </div>
              </article>
            </address>
            <figure class="mt-8 rounde-xl overflow-hidden shadow-md">
              <img src="@assets/contactimg.jpg" alt="Bâtiment de Glamour Clinic"
                class="w-full h-48 object-cover hover:scale-10s transition-transform duration-500" width="400"
                loading="lazy" />
            </figure>
          </section>
        </aside>

        <!-- Contact form -->
        <section class="lg:w-3/5">
          <div id="appointment"></div>
          <div class="bg-white rounded-2xl shadow-2xl p-8 h-full">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              Envoyez-nous un message
            </h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Message de succès/erreur -->
              <div v-if="formState.message" 
                   :class="['p-4 rounded-lg', formState.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
                {{ formState.message }}
              </div>

              <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-2">Nom Complet <span class="text-red-500">*</span></label>
                  <input 
                    v-model="formData.name"
                    type="text" 
                    id="name"
                    name="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Votre nom complet" 
                    required 
                    :class="{'border-red-500': formState.errors.name}"
                  />
                  <p v-if="formState.errors.name" class="mt-1 text-sm text-red-600">{{ formState.errors.name }}</p>
                </div>
                <div>
                  <label for="phone" class="block text-gray-700 font-medium mb-2">Téléphone <span class="text-red-500">*</span></label>
                  <input 
                    v-model="formData.phone"
                    type="tel" 
                    id="phone" 
                    name="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="+212 6 12 34 56 78" 
                    required
                    :class="{'border-red-500': formState.errors.phone}"
                  />
                  <p v-if="formState.errors.phone" class="mt-1 text-sm text-red-600">{{ formState.errors.phone }}</p>
                </div>
              </fieldset>
              
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Email <span class="text-red-500">*</span></label>
                <input 
                  v-model="formData.email"
                  type="email" 
                  id="email" 
                  name="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="votre@email.com" 
                  required
                  :class="{'border-red-500': formState.errors.email}"
                />
                <p v-if="formState.errors.email" class="mt-1 text-sm text-red-600">{{ formState.errors.email }}</p>
              </div>
              
              <div>
                <label for="service" class="block text-gray-700 font-medium mb-2">Service qui vous intéresse <span class="text-red-500">*</span></label>
                <select 
                  v-model="formData.service"
                  id="service" 
                  name="service"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                  :class="{'border-red-500': formState.errors.service}"
                >
                  <option value="">Sélectionnez un service</option>
                  <option v-for="s in services" :key="s.value" :value="s.value">
                    {{ s.label }}
                  </option>
                </select>
                <p v-if="formState.errors.service" class="mt-1 text-sm text-red-600">{{ formState.errors.service }}</p>
              </div>
              
              <div>
                <label for="message" class="block text-gray-700 font-medium mb-2">Votre message <span class="text-red-500">*</span></label>
                <textarea 
                  v-model="formData.message"
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Décrivez-nous votre demande ou posez-nous vos questions..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent min-h-[120px]"
                  required
                  :class="{'border-red-500': formState.errors.message}"
                ></textarea>
                <p v-if="formState.errors.message" class="mt-1 text-sm text-red-600">{{ formState.errors.message }}</p>
              </div>
              
              <div class="pt-2">
                <button 
                  type="submit" 
                  class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto flex items-center justify-center"
                  :disabled="formState.isSubmitting"
                  :class="{'opacity-70 cursor-not-allowed': formState.isSubmitting}"
                  aria-label="Envoyer le message"
                >
                  <span v-if="formState.isSubmitting" class="inline-block animate-spin mr-2">
                    <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span>{{ formState.isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <!-- google map -->
      <figure class="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.12%2C51.50%2C-0.10%2C51.52&layer=mapnik"
          width="100%" height="450" style="border:0" allowfullscreen="" loading="lazy" title="Carte de localisation de la clinique"
          class="rounded-2xl" aria-label="Carte montrant l'emplacement de la clinique"></iframe>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const formState = reactive({
  isSubmitting: false,
  message: "",
  success: false,
  errors: {},
});

const validateForm = () => {
  const errors = {};
  let isValid = true;

  if (!formData.name.trim()) {
    errors.name = "Le nom est requis";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email) {
    errors.email = "L'email est requis";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Veuillez entrer un email valide";
    isValid = false;
  }

  if (!formData.phone) {
    errors.phone = "Le numéro de téléphone est requis";
    isValid = false;
  }

  if (!formData.service) {
    errors.service = "Veuillez sélectionner un service";
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = "Le message est requis";
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères";
    isValid = false;
  }

  formState.errors = errors;
  return isValid;
};

const getRecaptchaToken = async () => {
  try {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    if (!siteKey) return null;
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return null;
    await new Promise((resolve) => grecaptcha.ready(resolve));
    return await grecaptcha.execute(siteKey, { action: "contact" });
  } catch {
    // Mode démo : reCAPTCHA optionnel
    return null;
  }
};

const handleSubmit = async () => {
  formState.message = "";
  formState.success = false;
  formState.errors = {};

  if (!validateForm()) return;

  try {
    formState.isSubmitting = true;

    const recaptchaToken = await getRecaptchaToken();

    const apiBase = import.meta.env.VITE_API_URL || '';
    const resp = await fetch(`${apiBase}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        recaptchaToken,
      }),
    });

    const data = await resp.json().catch(() => null);

    if (!resp.ok) {
      if (data?.errors) {
        formState.errors = data.errors;
        return;
      }

      if (data?.details === "low_score") {
        formState.message = "Votre requête a été bloquée (anti-spam). Réessayez plus tard.";
        formState.success = false;
        return;
      }

      formState.message = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";
      formState.success = false;
      return;
    }

    if (data?.ok) {
      formState.message = "Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.";
      formState.success = true;
      formData.name = "";
      formData.email = "";
      formData.phone = "";
      formData.service = "";
      formData.message = "";
    } else {
      formState.message = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";
      formState.success = false;
    }
  } catch (_err) {
    formState.message = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";
    formState.success = false;
  } finally {
    formState.isSubmitting = false;
  }
};

const contactItems = ref([
  {
    icon: "fa-solid:map-marker-alt",
    title: "Notre Adresse",
    content: "<p>123 Avenue de la Beauté<br/>Quartier Médical<br/>Casablanca 20000</p>",
  },
  {
    icon: "fa-solid:phone-alt",
    title: "Téléphone",
    content:
      "<p>Rendez-vous: <a href='tel:+212522123456' class='hover:text-pink-600'>+212 522 123 456</a><br/>Urgences: <a href='tel:+212600123456' class='hover:text-pink-600'>+212 600 123 456</a></p>",
  },
  {
    icon: "fa-solid:envelope",
    title: "Email",
    content:
      "<p><a href='mailto:contact@glamourclinic.ma' class='hover:text-pink-600'>contact@glamourclinic.ma</a><br/><a href='mailto:rdv@glamourclinic.ma' class='hover:text-pink-600'>rdv@glamourclinic.ma</a></p>",
  },
  {
    icon: "fa-solid:clock",
    title: "Horaires",
    content:
      "<p>Lundi - Vendredi : 9h00 - 20h00<br/>Samedi : 9h00 - 18h00<br/>Dimanche : Fermé</p>",
  },
]);

const services = ref([
  { value: "botox", label: "Traitements au Botox" },
  { value: "fillers", label: "Produits de comblement" },
  { value: "laser", label: "Traitements laser" },
  { value: "facelift", label: "Lifting non chirurgical" },
  { value: "other", label: "Autre demande" },
]);
</script>
