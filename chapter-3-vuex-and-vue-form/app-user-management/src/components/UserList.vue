<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListBySearchName"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    UserItem,
  },
  // computed: mapState(["userList"]),
  computed: {
    loading() {
      return false;
    },
    ...mapState({
      userList: (state) => state.userList,
      // users: "userList",
    }),
    ...mapGetters({
      userListFilterBoy: "userListByBoy",
      userListBySearchName: "userListBySearchName",
    }),
  },
};
</script>

<style></style>
