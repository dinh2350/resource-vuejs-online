<template>
  <!-- Banner
================================================== -->
  <div
    class="main-search-container centered"
    data-background-image="images/airbnb-bg.jpg"
  >
    <div class="main-search-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Find Nearby
              <!-- Typed words can be configured in script settings at the bottom of this HTML file -->
              <span class="typed-words"></span>
            </h2>
            <h4>Expolore top-rated attractions, activities and more</h4>

            <base-search-location></base-search-location>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSearchLocation from "./BaseSearchLocation.vue";
export default {
  components: {
    BaseSearchLocation,
  },
  setup() {},
};
</script>

<style></style>
