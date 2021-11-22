<template>
  <div class="col-lg-12 col-md-12">
    <div
      @click="handleCLickRoom"
      class="listing-item-container list-layout"
      data-marker-id="2"
    >
      <a class="listing-item">
        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room.image" alt="" />
          <span class="tag">Events</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-item-inner">
            <h3>{{ room.name }}</h3>
            <span>{{ room.locationId.province }}</span>
            <div class="star-rating" data-rating="5.0">
              <div class="rating-counter">({{ room.bedRoom }} bedRoom)</div>
            </div>
          </div>

          <span class="like-icon"></span>

          <div class="listing-item-details">price : {{ room.price }} VND</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    room: {
      type: Object,
    },
  },
  setup(props) {
    const router = useRouter();
    const handleCLickRoom = () => {
      router.push(`/room-detail/${props.room._id}`);
    };
    return {
      handleCLickRoom,
    };
  },
};
</script>

<style></style>
