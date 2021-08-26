<template>
  <div class="container">
    <div>
      <button
        class="btn btn-info"
        @click="handleSetSelectedComponent('DangChieu')"
      >
        Đang Chiếu
      </button>
      <button
        class="btn btn-danger"
        @click="handleSetSelectedComponent('SapChieu')"
      >
        Sắp Chiếu
      </button>
    </div>
    <!-- <div v-if="selectedComponent === 'DangChieu'">
      <DangChieu />
    </div>
    <div v-if="selectedComponent === 'SapChieu'">
      <SapChieu />
    </div> -->
    <div>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SapChieu from "./SapChieu.vue";
import DangChieu from "./DangChieu.vue";
export default {
  data() {
    return {
      selectedComponent: "SapChieu",
    };
  },
  components: {
    SapChieu,
    DangChieu,
  },
  methods: {
    handleSetSelectedComponent(comp) {
      this.selectedComponent = comp;
    },
  },
};
</script>

<style></style>
