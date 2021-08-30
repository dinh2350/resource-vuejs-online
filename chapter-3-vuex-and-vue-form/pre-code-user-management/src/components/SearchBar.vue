<template>
  <div class="form-group">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="user name"
        v-model="userName"
      />
      <div class="input-group-append">
        <button
          class="btn btn-sm btn-gradient-primary"
          type="button"
          @click="searchByUserName(userName)"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");

export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    ...mapActions({
      searchByUserName: "searchByUserName",
    }),
  },
};
</script>

<style></style>
