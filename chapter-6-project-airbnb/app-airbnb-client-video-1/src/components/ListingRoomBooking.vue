<template>
  <div class="row">
    <!-- Listing Item -->
    <div
      v-for="(room, index) in roomsByUser"
      :key="index"
      class="col-lg-12 col-md-12"
    >
      <room-item :room="room"></room-item>
    </div>
    <!-- Listing Item / End -->
    <div class="col-md-12 browse-all-user-listings">
      <a href="#">Browse All Listings <i class="fa fa-angle-right"></i> </a>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import RoomItem from "./RoomItem.vue";
export default {
  components: { RoomItem },
  setup() {
    const store = useStore();
    const roomsByUser = computed(() => store.state.ticket.roomsByUser);
    return {
      roomsByUser,
    };
  },
};
</script>

<style></style>
