<template>
  <h1 class="text-center text-primary">Pet List</h1>
  <div class="pet-list row">
    <div v-for="(pet, index) in petList" :key="index" class="col-lg-4 mb-2">
      <pet-item :pet="pet"></pet-item>
    </div>
  </div>
</template>

<script>
import PetItem from "../components/PetItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("pets");
export default {
  components: {
    PetItem,
  },
  computed: {
    ...mapState({
      petList: (state) => state.petList,
    }),
  },
};
</script>

<style></style>
