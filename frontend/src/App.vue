<script setup>
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Service from "./components/Service.vue";
import About from "./components/About.vue";
import Specialists from "./components/Specialists.vue";
import Contact from "./components/Contact.vue";
import AOS from "aos";
import "AOS/dist/aos.css";
import Footer from "./footer.vue";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div>
    <Header />
    <Hero />
    <Service />
    <About />
    <Specialists />
    <Contact />
    <Footer />
  </div>
</template>
