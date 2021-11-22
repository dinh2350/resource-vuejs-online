<template>
  <div id="wrapper">
    <the-header></the-header>
    <!-- Dashboard -->
    <div id="dashboard">
      <the-side-bar></the-side-bar>
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheSideBar from "./components/TheSideBar.vue";

export default {
  components: {
    TheHeader,
    TheSideBar,
  },
  setup() {},
};
</script>

<style lang="scss"></style>
