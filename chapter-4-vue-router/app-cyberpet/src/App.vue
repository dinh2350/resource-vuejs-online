<template>
  <header>
    <the-header></the-header>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style></style>
