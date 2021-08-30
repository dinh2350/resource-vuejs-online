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
const { mapGetters } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters({
      userList: "userListByUserName",
    }),
  },
};
</script>

<style></style>
