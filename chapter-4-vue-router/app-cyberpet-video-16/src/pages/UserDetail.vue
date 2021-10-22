<template>
  <h1>detail user</h1>
  <p>
    {{ $route.params.userId }}
  </p>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <img class="img-thumbnail" :src="userDetail.avatar" alt="" />
      </div>
      <div class="col-sm-7">
        <h3>
          Name :
          <span class="badge badge-info">
            {{ userDetail.name }}
          </span>
        </h3>
        <h3>
          Email :
          <span class="badge badge-info">
            {{ userDetail.email }}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  computed: {
    ...mapState({
      userDetail: (state) => state.userDetail,
    }),
  },
  methods: {
    ...mapActions({
      getUserById: "getUserByIdAction",
    }),
  },
  created() {
    console.log(this.$route.params.userId);
    this.getUserById(this.$route.params.userId);
  },
};
</script>

<style></style>
