<template>
  <tbody>
    <user-item
      v-for="(user, index) in userList"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapState } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  computed: {
    loading() {
      return false;
    },
    ...mapGetters({
      getByAdmin: "userListByAdmin",
    }),
    ...mapState({
      userList: (state) => state.userList,
    }),
  },
};
</script>

<style></style>
