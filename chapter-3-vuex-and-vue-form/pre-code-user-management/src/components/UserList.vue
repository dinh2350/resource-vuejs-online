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
const { mapGetters, mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters({
      userList: "userListByUserName",
    }),
  },
  methods: {
    ...mapActions({
      getAllDevs: "getAllDevsAction",
    }),
  },
  created() {
    this.getAllDevs();
  },
};
</script>

<style></style>
