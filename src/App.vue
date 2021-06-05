<template>
  <div class="layout">
    <v-header>
      <Navbar />
    </v-header>
    <v-content>
      <router-view />
    </v-content>
    <v-footer>
      <Footer />
    </v-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>

<style scoped>
</style>
