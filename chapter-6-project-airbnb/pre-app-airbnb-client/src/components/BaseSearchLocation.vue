<template>
  <div class="main-search-input">
    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          id="autocomplete-input"
          type="text"
          placeholder="Location"
          v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="listLocation.length > 0 && keyword" class="list-location">
        <li v-for="(location, index) in listLocation" :key="index">
          <span class="im im-icon-Location-2"></span>
          <span>{{ location.name }}</span>
        </li>
      </ul>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, watch } from "vue";
export default {
  setup() {
    const keyword = ref("");

    const store = useStore();
    const listLocation = computed(() => store.state.location.listLoaction);
    watch(keyword, (newKeyword) => {
      store.dispatch("location/getListLocationAction", newKeyword);
    });

    return {
      keyword,
      listLocation,
    };
  },
};
</script>

<style lang="scss">
.main-search-input-item.location {
  position: relative;
  .list-location {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    list-style: none;
    position: absolute;
    top: 150%;
    background: #ffffff;
    color: #222;
    width: 100%;
    border-radius: 20px;
    padding: 7px;
    z-index: 1;

    li {
      padding: 10px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
        background: #f7f7f7;
      }
    }
  }
}
</style>
